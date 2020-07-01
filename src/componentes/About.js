import React from 'react'
import {View, Text, Button} from 'react-native'

export default function({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ABOUT - Screen 2</Text>
            <Button title="Go to Contact Screen >>" onPress={() => navigation.navigate('ContactScreen')} />            
            <Button title="Return to Home Screen  <<" onPress={() => navigation.navigate('HomeScreen')} />
      </View>
    );
  }
  