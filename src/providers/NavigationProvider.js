import {useAuth} from './AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthenticatedStack from '../stacks/UnAuthenticatedStack';
import AuthenticatedStack from '../stacks/AuthenticatedStack';

const NavigationProvider = () => {
  const authContext = useAuth();
  console.log('authContext', authContext);
  const isAuthenticated = authContext.state.isAuthenticated;
  console.log('isAuthenticated', isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
};

export default NavigationProvider;
