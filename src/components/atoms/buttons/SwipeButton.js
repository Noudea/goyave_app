import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../styles/colors';
import Typo from '../../../styles/typo';
import {useState} from 'react';

const SwipeButton = () => {
  const [active, setActive] = useState(false);

  const onPress = () => {
    setActive(!active);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={active ? styles.buttonActive : styles.buttonInactive}
        onPress={onPress}>
        <Text style={Typo.subSectionTitle}>Proposer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={active ? styles.buttonInactive : styles.buttonActive}>
        <Text style={Typo.subSectionTitle}>Voter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  text: {
    color: Colors.black,
    fontSize: 20,
  },
  buttonInactive: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  buttonActive: {
    borderWidth: 1,
    borderColor: Colors.black,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
});

export default SwipeButton;
