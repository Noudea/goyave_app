import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles/colors';
import AvionIcon from '../assets/icons/filtre_recherche/svg/avion.svg';
import TrainIcon from '../assets/icons/filtre_recherche/svg/train.svg';
import VoitureIcon from '../assets/icons/filtre_recherche/svg/voiture.svg';
import BusIcon from '../assets/icons/filtre_recherche/svg/bus.svg';
import TransparentHeader from '../components/organisms/TransparentHeader';
import SectionTitles from '../components/molecules/titles/SectionTitles';
import TransportIcon from '../assets/icons/icon_titre/svg/transport.svg';
import ActionButton from '../components/atoms/buttons/ActionButton';
import EasyJetImage from '../assets/images/easyjet.png';

const TransportScreen = () => {
  return (
    <ScrollView
      style={{
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
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginVertical: 20,
        }}>
        Vols choisis par Chef Goyave
      </Text>
      <View
        style={{
          flexDirection: 'column',
          shadowColor: '#00000029',
          shadowOffset: {width: 0, height: 8},
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 10,
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 20,
        }}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={EasyJetImage}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 11,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  10:35 - 12:50
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  NTS-PAS, easyjet
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                Direct
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                2 h 25 min
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={EasyJetImage}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 11,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  13:50 - 15:55
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  PAS-NTS, easyjet
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                Direct
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                2 h 25 min
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            alignSelf: 'flex-end',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          154 €
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            width: 143,
            height: 33,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,

              paddingVertical: 5,
              fontSize: 12,
              paddingHorizontal: 10,
            }}>
            Je choisis ce vols
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TransportScreen;
