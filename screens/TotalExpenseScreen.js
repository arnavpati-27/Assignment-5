// screens/TotalExpenseScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const TotalExpenseScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (name.trim() && amount.trim()) {
      setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
      setName('');
      setAmount('');
    }
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Expense Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Add Expense" onPress={addExpense} />
      <Text style={styles.totalText}>Total: ${totalExpense.toFixed(2)}</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseName}>{item.name}</Text>
            <Text style={styles.expenseAmount}>${item.amount.toFixed(2)}</Text>
          </View>
        )}
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  totalText: {
    fontSize: 24,
    marginTop: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  expenseName: {
    fontSize: 18,
  },
  expenseAmount: {
    fontSize: 18,
    color: '#4CAF50',
  },
});

export default TotalExpenseScreen;