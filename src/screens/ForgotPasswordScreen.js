import backgroundImage from '../assets/images/pexels-photo-1267706.jpeg';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import TransparentHeader from '../components/organisms/TransparentHeader';
import Input from '../components/atoms/inputs/Input';
import React, {useState} from 'react';
import ActionButton from '../components/atoms/buttons/ActionButton';
import {Colors} from '../styles/colors';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    //TODO handle forgetPassword
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      paddingTop: 120,
      paddingBottom: 100,
      paddingRight: 30,
      paddingLeft: 30,
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
      shadowColor: '#00000029',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 10,
      marginBottom: 50,
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch
    },
    buttonContainer: {
      marginTop: 50,
      width: '80%',
    },
  });

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <TransparentHeader title="Custom Header" />
      <View style={styles.container}>
        <Text style={styles.title}>Mot de passe oublié</Text>
        <Input onChangeText={setEmail} value={email} placeHolder="Email" />
        <View style={styles.buttonContainer}>
          <ActionButton
            onPress={handleSubmit}
            text={'Réinitialiser mon mot de passe'}
            color={Colors.primary}
            outline={false}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
