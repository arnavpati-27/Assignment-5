// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1514473778434-81c3f973eb4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Travel Planner</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Itinerary')}
        >
          <Text style={styles.buttonText}>View Itinerary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddItem')}
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TotalExpense')}
        >
          <Text style={styles.buttonText}>Total Expense Calculator</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'Arial-BoldMT',
  },
  button: {
    backgroundColor: '#316FF6', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Arial',
  },
});

export default HomeScreen;