// screens/ItineraryScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ItineraryScreen = () => {
  const [itinerary, setItinerary] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Itinerary</Text>
      <FlatList
        data={itinerary}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ItineraryScreen;