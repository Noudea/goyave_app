import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Accueil</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
