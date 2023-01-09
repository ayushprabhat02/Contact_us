import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Homescreen from './src/screens/Homescreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Homescreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // margin: 30,
  },
});
