import React from 'react';
import {  View,  Text, Button} from 'react-native';

//Componente principal
export default function({navigation}){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HOME - Screen 1</Text>
        <Button title="Go to About Screen >>" onPress={() => navigation.navigate('AboutSreen')} />
      </View>
    );
  }