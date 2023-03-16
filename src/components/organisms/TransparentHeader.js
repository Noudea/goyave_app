import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/elements';
import {Colors} from '../../styles/colors';

const TransparentHeader = ({title}) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      height: 100,
      width: '100%',
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderBackButton
          tintColor={Colors.black}
          onPress={navigation.goBack}
        />
      </View>
    </View>
  );
};

export default TransparentHeader;
