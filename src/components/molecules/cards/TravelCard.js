import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Typo from '../../../styles/typo';
import {Colors} from '../../../styles/colors';
import {useNavigation} from '@react-navigation/native';

const TravelCard = ({imgUrl, title, description}) => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Voyage');
      }}
      style={styles.container}>
      <Image style={styles.image} source={imgUrl} />
      <View style={styles.footerContainer}>
        <Text style={Typo.subInfos}>{title}</Text>
        <Text
          style={{
            marginTop: 5,
            color: Colors.grey,
          }}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 20,
    width: '48%',
    backgroundColor: 'white',
    borderColor: '#00000029',
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },
  image: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width: '100%',
    height: 100,
  },
  footerContainer: {
    padding: 15,
  },
});

export default TravelCard;
