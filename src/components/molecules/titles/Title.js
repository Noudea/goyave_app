import TitleIcon from '../../atoms/icons/RoundIcon';
import {StyleSheet, Text, View} from 'react-native';
import Typo from '../../../styles/typo';

const Title = ({icon, color, title}) => {
  return (
    <View style={styles.container}>
      <TitleIcon icon={icon} color={color} />
      <Text style={[Typo.sectionTitle, styles.margin]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  margin: {
    marginLeft: 10,
  },
});

export default Title;
