import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Example Screens
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import ProfileScreen from '../screens/Authenticate/ProfileScreen';;
import LocationSearch from '../screens/HomeScreens/LocationSearch';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2563EB',   // active color (blue)
        tabBarInactiveTintColor: 'gray',   // inactive color
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Bus') {
            iconName = 'bus-outline';
          }

          // Make sure iconName exists before returning the icon
          return iconName ? <Ionicons name={iconName} size={24} color={color} /> : null;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
        />
      <Tab.Screen name="Bus" component={LocationSearch} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
