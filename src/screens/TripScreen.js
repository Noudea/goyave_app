import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles/colors';
import PrimaryColorHeader from '../components/organisms/PrimaryColorHeader';
import CalendarIcon from '../assets/icons/icon_category/calendrier.svg';
import DestinationIcon from '../assets/icons/icon_category/destination.svg';
import TransportIcon from '../assets/icons/icon_category/vol.svg';
import HotelIcon from '../assets/icons/icon_category/logement.svg';
import LocationIcon from '../assets/icons/icon_category/vehicule.svg';
import ExpenseIcon from '../assets/icons/icon_category/euros.svg';
import CategoryCard from '../components/molecules/cards/CategoryCard';
import ImageVoyage from '../assets/images/voyage.jpeg';
import HotelImage from '../assets/images/hotel.png';
import AvionImage from '../assets/images/avion.png';
import VoitureImage from '../assets/images/jeep.png';
import Title from '../components/molecules/titles/Title';
import TitleIcon from '../components/atoms/icons/RoundIcon';
import InformationIcon from '../assets/icons/icon_titre/svg/information.svg';
import PlusIcon from '../assets/icons/icon_titre/svg/plus.svg';
import {useNavigation} from '@react-navigation/native';

const TripScreen = () => {
  let navigation = useNavigation();

  return (
    <ScrollView
      style={{
        backgroundColor: Colors.white,
      }}>
      <PrimaryColorHeader />
      <View
        style={{
          backgroundColor: Colors.white,
          height: 100,
          width: 250,
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: -50,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          shadowColor: '#00000029',
          shadowOffset: {width: 0, height: 8},
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 10,
        }}>
        <View
          style={{
            flex: 0.8,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: Colors.primary,
            }}>
            Voyage été 2023
          </Text>
          <Text>6 juin au 9 juin</Text>
        </View>
        <View
          style={{
            flex: 0.2,
          }}>
          <Text>Left</Text>
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 20,
            shadowColor: '#00000029',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.8,
            shadowRadius: 8,
            elevation: 10,
            paddingTop: 20,
            paddingBottom: 20,
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}>
            <CalendarIcon />
            <Text
              style={{
                marginTop: 5,
                fontSize: 10,
                color: Colors.primary,
              }}>
              Calendrier
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('destination');
            }}
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}>
            <DestinationIcon />
            <Text
              style={{
                marginTop: 5,
                fontSize: 10,
                color: Colors.secondary1,
              }}>
              Destination
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('transport');
            }}
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}>
            <TransportIcon />
            <Text
              style={{
                marginTop: 5,
                fontSize: 10,
                color: Colors.secondary2,
              }}>
              Transport
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('accommodation');
            }}
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}>
            <HotelIcon />
            <Text
              style={{
                marginTop: 5,
                fontSize: 10,
                color: Colors.secondary3,
              }}>
              Hébergement
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}>
            <LocationIcon />
            <Text
              style={{
                marginTop: 5,
                fontSize: 10,
                color: Colors.secondary4,
              }}>
              Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('spending');
            }}
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 5,
            }}>
            <ExpenseIcon />
            <Text
              style={{
                marginTop: 5,
                fontSize: 10,
                color: Colors.secondary5,
              }}>
              Dépenses
            </Text>
          </TouchableOpacity>
        </View>
        <CategoryCard
          categoryTitle={'Destination'}
          image={ImageVoyage}
          title={'Ile Maurice'}
          infos={'4 votes'}
          price={1500}
          link={'destination'}
        />
        <CategoryCard
          categoryTitle={'Transport'}
          image={AvionImage}
          title={'Avion'}
          infos={'2h50'}
          price={300}
          link={'transport'}
        />
        <CategoryCard
          categoryTitle={'Hébergement'}
          image={HotelImage}
          title={'Hôtel Marc'}
          infos={'1 votes'}
          price={450}
          link={'accommodation'}
        />
        <CategoryCard
          categoryTitle={'Transport sur place'}
          image={VoitureImage}
          title={'Voiture'}
          infos={'3 jours'}
          price={1500}
        />
        <View
          style={{
            padding: 30,
            borderRadius: 20,
            marginTop: 30,
            marginBottom: 30,
            backgroundColor: Colors.white,
            shadowColor: '#00000029',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.8,
            shadowRadius: 8,
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Title
              title="Mes documents"
              color={Colors.primary}
              icon={
                <TitleIcon icon={<InformationIcon />} color={Colors.primary} />
              }
            />
            <PlusIcon />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: Colors.black,
              padding: 30,
              textAlign: 'center',
            }}>
            Aucun documents, appuie sur le + pour ajouter des documents de
            voyage
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TripScreen;
