import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import React from 'react';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store} >
      <NavigationContainer>
          <StatusBar/>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding": "height"}
            style={{flex:1}}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
              <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}}/>
              <Stack.Screen name="EatScreen" component={EatScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
          </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}

