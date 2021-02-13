import React from 'react';
import {View, StyleSheet} from 'react-native';

const Seperator = (props) => {
  return <View style={styles.container}></View>;
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});
