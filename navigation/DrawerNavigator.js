import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventsStack from './EventsStack';
import HomeTabs from './HomeTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerShown: true,
        drawerStyle: { backgroundColor: '#f5f5dc' },
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen name="Events" component={EventsStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
