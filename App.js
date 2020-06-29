
import 'react-native-gesture-handler'; //Essa linha sempre pro primeiro

import React from 'react';
import {  View,  Text, Button} from 'react-native';

//Linhas que adicionei
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Esse componente será mantido no App por padrão
const HomeScreen = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to details screen" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

/**
 * Os demais componetes tanto function componente o class componente
 * poderão ser externos, caso componente apresente navegação o argumento
 * navigation deverá ser obrigatoriamente informado
 */
const DetailScreen = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Button title="Go to datails screen...again" onPress={() => navigation.push("Details")} /> 
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} /> 
      <Button title="Go to back" onPress={() => navigation.goBack()} /> 
      <Button title="Go to the first screen" onPress={() => navigation.popToTop()} /> 
    </View>
  );
}

const Stack = createStackNavigator();

//Estiloas adicionados a stack.Navigator efetará todas as telas
//Estilos mais internos direto no stack.screen somente aquela tela e será sobreposto por ser mais interno
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} >

        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Overview'
        }}/>
        <Stack.Screen name="Details" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
