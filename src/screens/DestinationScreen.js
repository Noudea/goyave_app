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

const DestinationScreen = () => {
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
          icon={<DestinationIcon />}
          title="Voyage été 2023"
          subtitle="Destination de rêve"
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
                En France
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
                    title={'Paris'}
                    price={800}
                    image={ParisImage}
                  />
                  <DestinationCard
                    title={'Nantes'}
                    price={400}
                    image={NantesImage}
                  />
                  <DestinationCard
                    title={'Lyon'}
                    price={600}
                    image={LyonImage}
                  />
                  <DestinationCard
                    title={'Bordeaux'}
                    price={600}
                    image={BordeauxImage}
                  />
                </View>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginVertical: 20,
                }}>
                En Europe
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
                    title={'Lisbonne'}
                    price={1500}
                    image={LisbonneImage}
                  />
                  <DestinationCard
                    title={'Barcelone'}
                    price={1200}
                    image={BarceloneImage}
                  />
                  <DestinationCard
                    title={'Majorque'}
                    price={1100}
                    image={MajorqueImage}
                  />
                  <DestinationCard
                    title={'Minorque'}
                    price={1250}
                    image={MinorqueImage}
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
                  title={'Île Maurice'}
                  price={1500}
                  image={MauriceImage}
                  vote
                />
                <DestinationCard
                  title={'Normandie'}
                  price={400}
                  image={NormandieImage}
                  vote
                />
                <DestinationCard
                  title={'Malte'}
                  price={1500}
                  image={MalteImage}
                  vote
                />
                <DestinationCard
                  title={'Alsace'}
                  price={300}
                  image={AlsaceImage}
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

export default DestinationScreen;
