import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import EventsScreen from '../screens/EventsScreen';

const Stack = createNativeStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          title: 'Upcoming Events',
          headerStyle: { backgroundColor: '#03a9f4' },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{
          title: 'Event Details',
          animation: 'slide_from_right',
          headerStyle: { backgroundColor: '#ff5722' },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}
