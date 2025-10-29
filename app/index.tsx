import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import React from 'react';
import DrawerNavigator from '../navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

registerRootComponent(App);
