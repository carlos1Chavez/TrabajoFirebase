import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Crear from './crear';
import Editar from './editar';



const App = () => {
  const Stack = createNativeStackNavigator();
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      options={{
        title: 'Login',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#525FE1'}
      }}/>
      <Stack.Screen name="Home" component={Home}
      options={{
        title: 'HOME',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#525FE1'}
      }}/>
      <Stack.Screen name="Crear" component={Crear}
      options={{
        title: 'Crear',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#525FE1'}
      }}/>
      <Stack.Screen name="Editar" component={Editar}
      options={{
        title: 'Editar',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#525FE1'}
      }}/>
    </Stack.Navigator>

  );
}
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    
  );
};

export default App;