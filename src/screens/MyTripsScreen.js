import {View, StyleSheet} from 'react-native';
import SectionTitles from '../components/molecules/titles/SectionTitles';
import {Colors} from '../styles/colors';
import TripIcon from '../assets/icons/icon_titre/svg/voyage.svg';
import TravelCard from '../components/molecules/cards/TravelCard';
import MinorqueImage from '../assets/images/minorque.jpeg';

const MyTripsScreen = () => {
  const trips = {
    1: {
      id: 1,
      name: 'Trip to Paris',
      date: '2021-05-01',
      location: 'Paris, France',
      description: 'Trip to Paris for the weekend',
      image: 'https://via.placeholder.com/150',
    },
    2: {
      id: 2,
      name: 'Trip to London',
      date: '2021-05-01',
      location: 'London, UK',
      description: 'Trip to London for the weekend',
      image: 'https://via.placeholder.com/150',
    },
    3: {
      id: 3,
      name: 'Trip to New York',
      date: '2021-05-01',
      location: 'New York, USA',
      description: 'Trip to New York for the weekend',
      image: 'https://via.placeholder.com/150',
    },
    4: {
      id: 4,
      name: 'Trip to Tokyo',
      date: '2021-05-01',
      location: 'Tokyo, Japan',
      description: 'Trip to Tokyo for the weekend',
      image: 'https://via.placeholder.com/150',
    },
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: Colors.white,
      paddingLeft: 37,
      paddingRight: 37,
      paddingTop: 100,
      paddingBottom: 50,
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      flexGap: 20,
      backgroundColor: Colors.white,
    },
  });

  return (
    <View style={styles.container}>
      <SectionTitles
        icon={<TripIcon />}
        color={Colors.primary}
        title={'Mes Voyages'}
        subtitle={'Quelle est ta prochaine destination ?'}
      />
      <View style={styles.cardContainer}>
        <TravelCard
          imgUrl={MinorqueImage}
          title={'Voyage été 2023'}
          description={'Voyage de cet été 2023 avec ....'}
        />
      </View>
      {/*<Image source={{uri: trips[1].image}} style={{width: 200, height: 200}} />*/}
    </View>
  );
};

export default MyTripsScreen;
