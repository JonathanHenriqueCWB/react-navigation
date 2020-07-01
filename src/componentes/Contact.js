import React from 'react';
import {Text, View, Button} from 'react-native';

export default function({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CONTACT - Screen </Text>
            <Button title="Return to About Screen  <<" onPress={() => navigation.navigate('AboutSreen')} />         
            <Button title="Return to Home Screen  <<" onPress={() => navigation.navigate('HomeScreen')} />
      </View>
    );
  }