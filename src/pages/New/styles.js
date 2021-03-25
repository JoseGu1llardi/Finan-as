import styled from 'styled-components'

export const Background = styled.View`
flex: 1;
background-color: #131313
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
width: 90%;
height: 50px;
background-color: rgba(255, 255, 255, 0.9);
margin-top: 30px;
font-size: 17px;
border-radius: 10px
`

export const SubmitButton = styled.TouchableOpacity`
width: 90%;
height: 50px;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color: #00b94a
`

export const SubmitText = styled.Text`
font-size: 21px;
font-weight: bold;
color:#FFF
`
