import React, { createContext, useState, useEffect } from 'react'
import { Keyboard } from 'react-native'
import firebase from '../services/firebaseConnection'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)

    useEffect(() => {
        async function loadStorage() {
            const storageUser1  = await AsyncStorage.getItem('Auth_user')

            if(storageUser1) {
                setUser(JSON.parse(storageUser1))
                setLoading(false)
            }

            setLoading(false)
        }
        loadStorage()
    }, [])

    // Logar usuário
    async function signIn(email, password) {
        setLoadingAuth(true)
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email
                }
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
            })
        }).catch((error) => {
            alert(error.code)
            setLoadingAuth(false)
        })
    }

    // Cadastro usuário
    async function signUp(email, password, nome) {
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome,
            })
            .then( () => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                } 
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
            } )
        } )
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(false)
        })
    }

    // Salva no AsyncSorage
    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => setUser(null))

        Keyboard.dismiss()
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signIn, signOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )
}