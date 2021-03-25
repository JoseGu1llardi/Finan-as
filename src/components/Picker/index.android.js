import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-picker/picker'
import { PickerView } from './styles'

export default function Picker({ onChance, tipo }) {
 return (
   <PickerView>
     <RNPickerSelect
     style={{width: '100%'}}
     selectedValue={tipo}
     onValueChange={ (valor) => onChance(valor)}
     >
       <RNPickerSelect.Item label='Selecone um tipo' value='selecione'/>
       <RNPickerSelect.Item label='Receita' value='receita'/>
       <RNPickerSelect.Item label='Despesa' value='despesa'/>

     </RNPickerSelect>
   </PickerView>
  );
}