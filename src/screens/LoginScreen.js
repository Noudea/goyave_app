import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import backgroundImage from '../assets/images/pexels-photo-1056497.jpeg';
import Input from '../components/atoms/inputs/Input';
import {useState} from 'react';
import ActionButton from '../components/atoms/buttons/ActionButton';
import {Colors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../providers/AuthProvider';

const LoginScreen = () => {
  const authContext = useAuth();
  console.log('authContext', authContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('forgotPassword');
  };

  const handleLogin = () => {
    console.log('coucou');
    authContext.login(email, password);
    //TODO implement login
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      paddingTop: 120,
      paddingBottom: 100,
      paddingRight: 50,
      paddingLeft: 50,
    },
    text: {
      fontSize: 30,
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
      marginBottom: 16,
    },
    subTitle: {
      fontSize: 21,
      fontWeight: '600',
      color: 'white',
      shadowColor: '#00000029',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 10,
      marginBottom: 48,
    },
    forgotPassword: {
      fontSize: 14,
      fontWeight: 'normal',
      color: Colors.primary,
      marginBottom: 23,
      textDecorationLine: 'underline',
    },
    inputContainer: {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
    },
    buttonContainer: {
      width: '70%',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <Text style={styles.subTitle}>et rejoins la team Goyave</Text>
        <View style={styles.inputContainer}>
          <Input onChangeText={setEmail} value={email} placeHolder="Email" />
          <Input
            secured={true}
            onChangeText={setPassword}
            value={password}
            placeHolder="Mot de passe"
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <ActionButton
              onPress={handleLogin}
              text={'Connexion'}
              color={Colors.primary}
              outline={false}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
