import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Pantalla de Splash (Inicio) */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* Pantalla de Bienvenida (Welcome) */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        {/* Pantalla de Inicio de Sesión (Login) */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* Pantalla de Registro (SignUp) */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;