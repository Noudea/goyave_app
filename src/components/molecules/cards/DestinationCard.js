import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../styles/colors';
import {useState} from 'react';

const DestinationCard = ({title, price, image, vote}) => {
  const [active, setActive] = useState(false);

  return (
    <View
      style={{
        width: '48%',
        margin: '1%',
        height: 229,
        borderRadius: 20,
        borderWidth: active ? 1 : 0,
        borderColor: Colors.primary,
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
          <TouchableOpacity
            onPress={() => setActive(!active)}
            style={{
              position: 'relative',
              bottom: -20,
              borderRadius: 10,
              backgroundColor: active ? Colors.white : Colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              borderWidth: active ? 1 : 0,
              borderColor: Colors.primary,
            }}>
            <Text
              style={{
                color: active ? Colors.primary : Colors.white,
                fontSize: 13,
              }}>
              {vote
                ? active
                  ? 'Annuler'
                  : 'Voter'
                : active
                ? 'Annuler'
                : 'Proposer'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DestinationCard;
