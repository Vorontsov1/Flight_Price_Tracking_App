import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import SearchForm from './src/components/SearchForm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <SearchForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
