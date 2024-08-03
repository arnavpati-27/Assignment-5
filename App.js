// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ItineraryScreen from './screens/ItineraryScreen';
import AddItemScreen from './screens/AddItemScreen';
import TotalExpenseScreen from './screens/TotalExpenseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Itinerary" component={ItineraryScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="TotalExpense" component={TotalExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;