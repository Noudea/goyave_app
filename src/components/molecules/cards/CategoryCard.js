import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImageVoyage from '../../../assets/images/voyage.jpeg';
import {Colors} from '../../../styles/colors';
import EyeIcon from '../../../assets/icons/icon_titre/svg/voir_plus.svg';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({categoryTitle, image, title, infos, price, link}) => {
  let navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate(link);
  };

  return (
    <View
      style={{
        shadowColor: '#00000029',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginTop: 30,
      }}>
      <View
        style={{
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
          }}>
          {categoryTitle}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 148,
            height: 125,
            borderRadius: 20,
          }}
          source={image}
        />
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingVertical: 15,
            flexDirection: 'column',
            justifyContent: 'space-around',
            flexShrink: 1,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#D6DBE8',
              marginBottom: 5,
            }}>
            {infos}
          </Text>
          <Text
            style={{
              fontSize: 11,
              marginBottom: 5,
            }}>
            Tarif total par personne en moyenne sur cette période
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              {price} €
            </Text>
            <TouchableOpacity
              onPress={navigateTo}
              style={{
                flex: 0,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                width: 38,
                height: 38,
                backgroundColor: Colors.primary,
              }}>
              <EyeIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoryCard;
