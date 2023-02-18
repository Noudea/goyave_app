import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const TitleIcon = ({icon, color}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 48,
    height: 48,
  },
});

export default TitleIcon;
