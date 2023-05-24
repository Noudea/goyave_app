import {ScrollView, Text, View} from 'react-native';
import TransparentHeader from '../components/organisms/TransparentHeader';
import SectionTitles from '../components/molecules/titles/SectionTitles';
import {Colors} from '../styles/colors';
import DestinationIcon from '../assets/icons/icon_titre/svg/destination.svg';
import SwipeButton from '../components/atoms/buttons/SwipeButton';
import {useState} from 'react';
import DestinationCard from '../components/molecules/cards/DestinationCard';
import ActionButton from '../components/atoms/buttons/ActionButton';
import MauriceImage from '../assets/images/maurice.jpeg';
import NormandieImage from '../assets/images/normandie.jpeg';
import MalteImage from '../assets/images/malte.jpeg';
import AlsaceImage from '../assets/images/alsace.jpeg';
import ParisImage from '../assets/images/paris.jpeg';
import LyonImage from '../assets/images/lyon.jpeg';
import NantesImage from '../assets/images/nantes.jpeg';
import BordeauxImage from '../assets/images/bordeaux.jpeg';
import BarceloneImage from '../assets/images/barcelone.jpeg';
import LisbonneImage from '../assets/images/lisbonne.jpeg';
import MajorqueImage from '../assets/images/majorque.jpeg';
import MinorqueImage from '../assets/images/minorque.jpeg';
import Hotel1Image from '../assets/images/hotel1.png';
import Hotel2Image from '../assets/images/hotel2.jpeg';
import Hotel3Image from '../assets/images/hotel3.png';
import Hotel4Image from '../assets/images/hotel4.png';
import HotelIcon from '../assets/icons/icon_titre/svg/maison.svg';

const AccommodationScreen = () => {
  const [propose, setPropose] = useState(false);

  return (
    <ScrollView
      style={{
        paddingTop: 30,
      }}>
      <TransparentHeader />
      <View
        style={{
          padding: 20,
        }}>
        <SectionTitles
          icon={<HotelIcon />}
          title="Voyage été 2023"
          subtitle="Où se loger ?"
          color={Colors.primary}
        />
        <View
          style={{
            marginVertical: 30,
          }}>
          <SwipeButton
            propose={propose}
            action={() => {
              if (propose === false) {
                setPropose(true);
              } else {
                setPropose(false);
              }
              console.log(propose);
            }}
          />
        </View>
        <View>
          {propose === true ? (
            <View
              style={{
                marginBottom: 30,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginVertical: 20,
                }}>
                Meilleurs notes
              </Text>
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                    }}>
                    <DestinationCard
                      title={'Hotel Safestay'}
                      price={200}
                      image={Hotel1Image}
                    />
                    <DestinationCard
                      title={'Hotel Slefet'}
                      price={150}
                      image={Hotel2Image}
                    />
                    <DestinationCard
                      title={'Hotel Marry'}
                      price={400}
                      image={Hotel3Image}
                    />
                    <DestinationCard
                      title={'Hotel Rox'}
                      price={250}
                      image={Hotel4Image}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginVertical: 20,
                }}>
                Meilleurs rapport qualité prix
              </Text>
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  <DestinationCard
                    title={'Hotel Reilm'}
                    price={100}
                    image={Hotel1Image}
                  />
                  <DestinationCard
                    title={'Hotel Accor'}
                    price={150}
                    image={Hotel2Image}
                  />
                  <DestinationCard
                    title={'Hotel Josseph'}
                    price={275}
                    image={Hotel3Image}
                  />
                  <DestinationCard
                    title={'Hotel Nox'}
                    price={300}
                    image={Hotel4Image}
                  />
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                <DestinationCard
                  title={'Hotel Safestay'}
                  price={200}
                  image={Hotel1Image}
                  vote
                />
                <DestinationCard
                  title={'Hotel Slefet'}
                  price={150}
                  image={Hotel2Image}
                  vote
                />
                <DestinationCard
                  title={'Hotel Marry'}
                  price={400}
                  image={Hotel3Image}
                  vote
                />
                <DestinationCard
                  title={'Hotel Rox'}
                  price={250}
                  image={Hotel4Image}
                  vote
                />
              </View>
              <View
                style={{
                  width: '80%',
                  alignSelf: 'center',
                  marginVertical: 30,
                }}>
                <ActionButton
                  outline={true}
                  color={Colors.primary}
                  text={'Je valide mon vote'}
                  action={() => {
                    console.log('Ajouter une destination');
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default AccommodationScreen;
