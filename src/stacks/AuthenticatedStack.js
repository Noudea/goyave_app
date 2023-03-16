import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateTripScreen from '../screens/CreateTripScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripStack from './TripStack';
import ProfilIcon from '../assets/icons/profil/profil.svg';
import {Colors} from '../styles/colors';
import VoyaveIcon from '../assets/icons/tab/voyage.svg';
import PlusIcon from '../assets/icons/tab/plus.svg';

const AuthenticatedStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    // <Stack.Navigator>

    <Tab.Navigator
      initialRouteName="Mes Voyages"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        showIcon: true,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <PlusIcon />,
        }}
        name={'Ajouter un voyage'}
        component={CreateTripScreen}
      />
      <Tab.Screen
        name="Mes Voyages"
        component={TripStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <VoyaveIcon />,
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          activeTintColor: Colors.primary,
          tabBarIcon: ({color, size}) => <ProfilIcon />,
        }}
        name={'Mon Profil'}
        component={ProfileScreen}
      />
    </Tab.Navigator>
    // </Stack.Navigator>
  );
};

export default AuthenticatedStack;
