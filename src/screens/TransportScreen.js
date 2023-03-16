import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles/colors';
import AvionIcon from '../assets/icons/filtre_recherche/svg/avion.svg';
import TrainIcon from '../assets/icons/filtre_recherche/svg/train.svg';
import VoitureIcon from '../assets/icons/filtre_recherche/svg/voiture.svg';
import BusIcon from '../assets/icons/filtre_recherche/svg/bus.svg';
import TransparentHeader from '../components/organisms/TransparentHeader';
import SectionTitles from '../components/molecules/titles/SectionTitles';
import TransportIcon from '../assets/icons/icon_titre/svg/transport.svg';
import ActionButton from '../components/atoms/buttons/ActionButton';

const TransportScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.white,
        marginVertical: 20,
        paddingHorizontal: 30,
      }}>
      <TransparentHeader />
      <SectionTitles
        title="Voyage été 2023"
        subtitle={'Comment y aller ?'}
        color={Colors.primary}
        icon={<TransportIcon />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            width: 65,
            height: 65,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            borderWidth: 4,
            borderColor: Colors.white,
            shadowColor: '#00000029',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.8,
            shadowRadius: 8,
            elevation: 10,
          }}
          onPress={() => {}}>
          <AvionIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F2F2F2',
            width: 65,
            height: 65,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            shadowColor: '#00000029',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.8,
            shadowRadius: 8,
            elevation: 10,
          }}
          onPress={() => {}}>
          <TrainIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F2F2F2',
            width: 65,
            height: 65,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            shadowColor: '#00000029',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.8,
            shadowRadius: 8,
            elevation: 10,
          }}
          onPress={() => {}}>
          <VoitureIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F2F2F2',
            width: 65,
            height: 65,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            shadowColor: '#00000029',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.8,
            shadowRadius: 8,
            elevation: 10,
          }}
          onPress={() => {}}>
          <BusIcon />
        </TouchableOpacity>
      </View>
      <ActionButton
        color={Colors.primary}
        text="Chercher pour mes dates"
        onPress={() => {}}
      />
    </ScrollView>
  );
};

export default TransportScreen;
