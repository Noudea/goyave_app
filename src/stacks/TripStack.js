import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTripsScreen from '../screens/MyTripsScreen';
import TripScreen from '../screens/TripScreen';
import DestinationScreen from '../screens/DestinationScreen';
import AccommodationScreen from '../screens/AccomodationScreen';
import SpendingScreen from '../screens/SpendingScreen';
import TransportScreen from '../screens/TransportScreen';
import LocationScreen from '../screens/LocationScreen';

const TripStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Mes Voyages détails"
        component={MyTripsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Voyage"
        component={TripScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="destination"
        component={DestinationScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="accommodation"
        component={AccommodationScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="spending"
        component={SpendingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="transport"
        component={TransportScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="location"
        component={LocationScreen}
      />
      {/*<Stack.screen*/}
      {/*  options={{headerShown: false}}*/}
      {/*  name="destination"*/}
      {/*  component={DestinationScreen}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export default TripStack;
