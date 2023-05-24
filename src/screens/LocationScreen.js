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
import JeepImage from '../assets/images/jeep.png';
import PeopleIcon from '../assets/icons/information/svg/nb_place_voiture.svg';
import BaggagesIcon from '../assets/icons/information/svg/bagage.svg';
import DoorsIcon from '../assets/icons/information/svg/nb_porte_voiture.svg';
import GearboxIcon from '../assets/icons/information/svg/type_boite_manuel.svg';
import ClimIcon from '../assets/icons/information/svg/clim.svg';
import SuvIcon from '../assets/icons/suv.svg';
import CitadineIcon from '../assets/icons/citadine.svg';
import JeepIcon from '../assets/icons/jeep.svg';
import ScooterIcon from '../assets/icons/scooter.svg';

const LocationScreen = () => {
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
          <CitadineIcon />
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
          <SuvIcon />
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
          <JeepIcon />
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
          <ScooterIcon />
        </TouchableOpacity>
      </View>
      <ActionButton
        color={Colors.primary}
        text="Chercher une location"
        onPress={() => {}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginVertical: 20,
        }}>
        Choisissez votre véhicule
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          paddingVertical: 20,
        }}>
        <Image
          source={JeepImage}
          style={{
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginVertical: 20,
          }}>
          SUZUKI JIMNY
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <PeopleIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              4
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <DoorsIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              2
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <BaggagesIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              3
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <GearboxIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              M
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <ClimIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              Climatisation
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginVertical: 20,
            }}>
            Prix
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 20,
              }}>
              <Text
                style={{
                  color: Colors.primary,
                }}>
                437 €
              </Text>
              /jour
            </Text>
            <ActionButton
              color={Colors.primary}
              text="Réserver"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingVertical: 20,
        }}>
        <Image
          source={JeepImage}
          style={{
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginVertical: 20,
          }}>
          SUZUKI JIMNY
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <PeopleIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              4
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <DoorsIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              2
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <BaggagesIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              3
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <GearboxIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              M
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
            }}>
            <ClimIcon />
            <Text
              style={{
                marginLeft: 5,
              }}>
              Climatisation
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginVertical: 20,
            }}>
            Prix
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 20,
              }}>
              <Text
                style={{
                  color: Colors.primary,
                }}>
                437 €
              </Text>
              /jour
            </Text>
            <ActionButton
              color={Colors.primary}
              text="Réserver"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LocationScreen;
