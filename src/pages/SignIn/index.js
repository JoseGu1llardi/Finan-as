import React, { useState, useContext } from 'react';
import { Platform, Keyboard, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Background, 
         Container, 
         Logo, 
         AreaInput, 
         Input, 
         SubmitButton, 
         SubmitText, 
         Link, 
         LinkText } 
from './styles'
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

   const navigation = useNavigation();

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const { signIn, loadingAuth } = useContext(AuthContext)

   function handleLogin() {
      signIn(email, password)
      Keyboard.dismiss()
   }

 return (
   <Background>
       <Container 
       behavior={Platform.OS === 'ios' ? 'padding' : ''}
       enable
       >
       <Logo source={require('../../assets/Logo.png')}/>

       <AreaInput>
          <Input 
          placeholder='E-mail'
          autoCorrect={false} 
          autoCapitalize='none'
          value={email}
          onChangeText={ (textoEmail) => setEmail(textoEmail) }
          />
       </AreaInput>

       <AreaInput>
          <Input 
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          onChangeText={ (textoPassword) => setPassword(textoPassword) }
          secureTextEntry={true}
          />
       </AreaInput>

       <SubmitButton onPress={handleLogin}>
          {
             loadingAuth ? (
                <ActivityIndicator size={20} color='#FFF'/>
             ) : (
               <SubmitText>Acessar</SubmitText>
             )
          }
       </SubmitButton>

       <Link onPress={ () => navigation.navigate('SignUp') }>
         <LinkText>Criar conta!</LinkText>
       </Link>

       </Container>
   </Background>
  );
}
