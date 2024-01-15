import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import SearchForm from './src/components/SearchForm';
import {LinearGradient} from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import dammyData from './data.json';
import FlightOptionItem from './src/components/FlightOptionItem';
import { useState } from 'react';



export default function App() {
const [items, setItems] = useState([]) 
  const onSearch = (data) => {
    console.warn(data);
    
    // get items from the backend

    setItems(dammyData);
}

  return (
    <LinearGradient colors={["white", "#ffa700"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
        {/* <FlightOptionItem flight={option1} /> */}
        <FlatList
          data={items}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
