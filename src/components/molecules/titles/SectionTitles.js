import {Text, View} from 'react-native';
import TitleIcon from '../../atoms/icons/RoundIcon';
import Typo from '../../../styles/typo';

const TitleSection = ({title, subtitle, icon, color}) => {
  return (
    <View style={styles.container}>
      <TitleIcon icon={icon} color={color} />
      <View style={styles.titleSectionContainer}>
        <Text style={[Typo.screenTitle, {color: color}]}>{title}</Text>
        <Text style={[Typo.subSectionTitle]}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleSectionContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
};

export default TitleSection;
