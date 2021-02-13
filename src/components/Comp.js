import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Comp = () => {
  return (
    <View style={styles.container}>
      <Text>Comp</Text>
    </View>
  );
};

export default Comp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
});
