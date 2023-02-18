import {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = ({placeHolder, onChangeText, value}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      value={value}
      keyboardType={'default'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 47,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f4f5f3',
    borderRadius: 10,
    paddingLeft: 20,
  },
});

export default Input;
