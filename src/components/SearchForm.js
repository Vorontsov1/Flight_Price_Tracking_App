import { View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const onSearchPress = () => {
    onSearch({ from, to, departDate, returnDate });
  };

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

      <View style={styles.datePicker}>
        <Feather name="calendar" size={26} color="gray" />
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => setDepartDate(date || new Date())}
          minimumDate={new Date()}
        />
        <Text style={{ fontSize: 20, color: "gainsboro", marginLeft: 10 }}>
          |{" "}
        </Text>

        <DateTimePicker
          value={returnDate}
          onChange={(event, date) => setReturnDate(date || new Date())}
          minimumDate={departDate}
        />
      </View>

      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
};

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
    borderColor: "gainsboro",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  datePicker: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 7,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
});

