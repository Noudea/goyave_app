import {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = ({placeHolder}) => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        value={text}
        keyboardType={'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#f4f5f3',
    borderRadius: 10,
    paddingLeft: 20,
  },
});

export default Input;
