import { View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native";
import { useState } from 'react';

const SearchForm = () => {

  const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

  const onSearchPress = () => {
  console.warn("searching for");
}

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip
      </Text>

      <TextInput
        value={from}
        onChangeText={setFrom}
        style={styles.input}
        placeholder="From"
      />

      <TextInput
        value={to}
        onChangeText={setTo}
        style={styles.input}
        placeholder="To"
      />

      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
}

export default SearchForm;


const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
});

