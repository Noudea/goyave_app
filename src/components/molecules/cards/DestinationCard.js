import {ImageBackground, Text, View} from 'react-native';
import backgroundImage from '../../../assets/images/pexels-photo-1267706.jpeg';
import {Colors} from '../../../styles/colors';

const DestinationCard = ({title, price, image, vote}) => {
  const active = false;

  return (
    <View
      style={{
        width: '48%',
        margin: '1%',
        height: 229,
        borderRadius: 20,
        borderWidth: active ? 1 : 0,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: 'cover',
          borderRadius: 20,
          overflow: 'hidden',
          justifyContent: 'flex-end',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
        // imageStyle={{borderRadius: 20}}
        source={image}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 20,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
            }}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'relative',
              bottom: -10,
            }}>
            <Text
              style={{
                fontSize: 8,
                flex: 0.6,
              }}>
              Tarif total en moyenne sur cette période
            </Text>
            <Text
              style={{
                flex: 0.4,
                color: Colors.primary,
                fontWeight: 'bold',
              }}>
              {price} €
            </Text>
          </View>
          <View
            style={{
              position: 'relative',
              bottom: -20,
              borderRadius: 10,
              backgroundColor: Colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 13,
              }}>
              {vote ? 'Voter' : 'Proposer'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DestinationCard;
