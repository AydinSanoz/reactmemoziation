import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import SearchInput from './components/SearchInput';

const App = () => {
  console.log(' Redering App');
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }
  const handleText = (val) => {
    console.log(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text>App Counter</Text>
        <Text style={styles.counterText}>{counter}</Text>
        <Button title="Increase Counter" onPress={increase} />
      </View>
      <SearchInput
        title="Search"
        placeholder="Enter a Text..."
        handleText={handleText}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  counterContainer: {backgroundColor: '#00000020', alignItems: 'center'},
  counterText: {fontSize: 40},
});
