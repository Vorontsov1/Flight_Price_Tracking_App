import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import SearchForm from './src/components/SearchForm';
import {LinearGradient} from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import data from './data';
import FlightOptionItem from './src/components/FlightOptionItem';



export default function App() {
  return (
    <LinearGradient colors={["white", "#ffa700"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm />
        {/* <FlightOptionItem flight={option1} /> */}
        <FlatList
          data={data}
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
