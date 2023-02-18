import {Text, View} from 'react-native';
import TitleIcon from '../../atoms/icons/RoundIcon';
import Typo from '../../../styles/typo';

const TitleSection = ({icon, color}) => {
  return (
    <View style={styles.container}>
      <TitleIcon icon={icon} color={color} />
      <View style={styles.titleSectionContainer}>
        <Text style={[Typo.screenTitle, {color: color}]}>title section</Text>
        <Text style={[Typo.subSectionTitle]}>Subtitle</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
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
