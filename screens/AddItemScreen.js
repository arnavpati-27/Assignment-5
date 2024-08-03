// screens/AddItemScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddItemScreen = ({ navigation }) => {
  const addItem = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item to Itinerary</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Date (MM-DD-YYYY)"
      />
      <TextInput
        style={styles.input}
        placeholder="Type (e.g., Flight, Hotel, Activity)"
      />
      <Button title="Add" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
    width: '100%',
  },
});
export default AddItemScreen;