import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './componentes/Home';
import About from './componentes/About';
import Contact from './componentes/Contact';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Menu} />
        <Stack.Screen name="AboutSreen" component={About} />
        <Stack.Screen name="ContactScreen" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;