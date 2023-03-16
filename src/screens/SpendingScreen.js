import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SpendingColorHeader from '../components/organisms/SpendingColorHeader';
import {Colors} from '../styles/colors';

const SpendingScreen = () => {
  return (
    <View>
      <SpendingColorHeader />
      <View
        style={{
          backgroundColor: Colors.white,
          height: 100,
          width: 250,
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: -50,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#00000029',
          shadowOffset: {width: 0, height: 8},
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 10,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: Colors.secondary5,
            }}>
            Voyage été 2023
          </Text>
          <Text>6 juin au 9 juin</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <ScrollView
          style={{
            height: 500,
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: '#2B5DE4',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                }}>
                Dépenses
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                Payé par moi
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.secondary5,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                8.99 €
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#A8A6A4',
                }}>
                20/10/2022
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: '10%',
            backgroundColor: Colors.secondary5,
          }}>
          <View
            style={{
              position: 'absolute',
              top: -30,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: Colors.white,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: Colors.secondary5,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          {/*left 2 text and right 2 text*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderColor: '#2B5DE4',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: Colors.white,
                  marginBottom: 5,
                }}>
                MON COÛT TOTAL
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.white,
                }}>
                159.95 €
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: Colors.white,
                  marginBottom: 5,
                  alignSelf: 'flex-end',
                }}>
                TOTAL DÉPENSES
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.white,
                  alignSelf: 'flex-end',
                }}>
                285.88 €
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpendingScreen;
