import { StyleSheet, SafeAreaView } from 'react-native';
import SearchForm from './src/components/SearchForm';
import {LinearGradient} from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <LinearGradient colors={["white", "#ffa700"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm />
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
