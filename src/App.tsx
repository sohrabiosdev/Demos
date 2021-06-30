import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import store from "./boot/store";
import { Provider } from "react-redux";
import Details from "./screens/Home/Details";

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Provider store={store}>
          <Stack.Navigator>
              <Stack.Screen name="Demos" component={Home} />
              <Stack.Screen name="Details" component={Details}/>
          </Stack.Navigator>
      </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
