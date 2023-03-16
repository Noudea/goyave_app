import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import {Colors} from '../../styles/colors';

const PrimaryColorHeader = () => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      height: 125,
      backgroundColor: Colors.primary,
      width: '100%',
      paddingVertical: 30,
      paddingHorizontal: 20,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <HeaderBackButton tintColor={Colors.black} onPress={navigation.goBack} />
    </View>
  );
};

export default PrimaryColorHeader;
