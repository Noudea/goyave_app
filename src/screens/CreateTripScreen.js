import {Text, View} from 'react-native';
import React from 'react';
import TripIcon from '../assets/icons/icon_titre/svg/voyage.svg';
import TextDescriptionIcon from '../assets/icons/icon_titre/svg/text_description.svg';
import {Colors} from '../styles/colors';
import Title from '../components/molecules/titles/Title';
import ActionButton from '../components/atoms/buttons/ActionButton';
import LineInput from '../components/atoms/inputs/LineInput';
import {useNavigation} from '@react-navigation/native';

const CreateTripScreen = () => {
  const [tripName, setTripName] = React.useState('');
  const [tripDescription, setTripDescription] = React.useState('');

  let navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Mes Voyages');
  };

  return (
    <View style={styles.container}>
      <Title
        icon={<TripIcon />}
        color={Colors.primary}
        title={"On l'appelle comment ?"}
      />
      <LineInput
        value={tripName}
        placeHolder={'Nom du voyage'}
        onChangeText={text => {
          setTripName(text);
        }}
      />
      <Title
        icon={<TextDescriptionIcon />}
        color={Colors.primary}
        title={'Une petite bio motivante ?'}
      />
      <LineInput
        value={tripDescription}
        placeHolder={'Description du voyage'}
        onChangeText={text => {
          setTripDescription(text);
        }}
      />
      <ActionButton
        color={Colors.primary}
        text={"C'est parti !"}
        onPress={() => {
          handlePress();
        }}
        outline={false}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    paddingLeft: 37,
    paddingRight: 37,
    paddingTop: 100,
    paddingBottom: 50,
  },
};

export default CreateTripScreen;
