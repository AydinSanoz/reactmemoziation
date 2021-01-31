import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchInput = ({placeholder}) => {
  console.log('rendering SearchInput');
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc0ee',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 10,
  },
  textInput: {
    margin: 10,
    padding: 5,
  },
});
