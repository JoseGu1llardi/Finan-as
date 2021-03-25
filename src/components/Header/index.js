import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container, ButtonMenu, } from './styles'

export default function Header() {
const navigation = useNavigation();

 return (
   <Container> 

     <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
       <Icon name='menu' size={40} color='#FFF'/>
     </ButtonMenu>

   </Container>
  );
}