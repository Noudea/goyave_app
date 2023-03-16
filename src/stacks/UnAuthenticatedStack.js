import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const UnAuthenticatedStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'forgotPassword'}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
