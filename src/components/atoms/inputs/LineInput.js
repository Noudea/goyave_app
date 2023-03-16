import {TextInput, StyleSheet} from 'react-native';

const LineInput = ({placeHolder, onChangeText, value, secured}) => {
  return (
    <TextInput
      secureTextEntry={secured}
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      value={value}
      keyboardType={'default'}
      placeholderTextColor={'#bebebe'}
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
    borderRadius: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: '#bebebe',
  },
});

export default LineInput;
