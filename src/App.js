/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ActionButton from './components/atoms/buttons/ActionButton';
import {BackgroundColors, Colors} from './styles/colors';
import VoteButton from './components/atoms/buttons/VoteButton';
import ProjectButton from './components/atoms/buttons/ProjectButton';
import Input from './components/atoms/inputs/Input';
import SwipeButton from './components/atoms/buttons/SwipeButton';
import TitleIcon from './components/atoms/icons/RoundIcon';
import MaisonIcon from './assets/icons/icon_titre/svg/maison.svg';
import Title from './components/molecules/titles/Title';
import TitleSection from './components/molecules/titles/SectionTitles';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Boutons d'action">
            <ActionButton
              text="bouton"
              color={Colors.secondary4}
              onPress={() => {
                console.log('onPress Action Button');
              }}
              outline={true}
            />
            <ActionButton
              text="bouton"
              color={Colors.secondary4}
              onPress={() => {
                console.log('onPress Action Button');
              }}
              outline={false}
            />
          </Section>
          <Section title={'Bouton de vote'}>
            <VoteButton
              onPress={() => {
                console.log('onPress Vote Button');
              }}
              color={Colors.primary}
            />
            <VoteButton
              onPress={() => {
                console.log('onPress Vote Button');
              }}
              color={Colors.secondary2}
              outline
            />
          </Section>
          <Section
            style={{flex: 1, flexDirection: 'row', width: '100%'}}
            title={'Project Boutton'}>
            <ProjectButton
              onPress={() => {
                console.log('OnPress Project Button');
              }}
              color={Colors.primary}
            />
          </Section>
          <Section
            style={{flex: 1, flexDirection: 'row', width: '100%'}}
            title={'Project Boutton'}>
            <Input placeHolder={'Nom'} />
            <Input placeHolder={'Email'} />
          </Section>
          <Section
            style={{flex: 1, flexDirection: 'row', width: '100%'}}
            title={'Project Boutton'}>
            <SwipeButton />
          </Section>
          <Section
            style={{flex: 1, flexDirection: 'row', width: '100%'}}
            title={'Title Icon'}>
            <TitleIcon icon={<MaisonIcon />} color={Colors.primary} />
          </Section>
          <Section
            style={{flex: 1, flexDirection: 'row', width: '100%'}}
            title={'Title'}>
            <Title
              icon={<MaisonIcon />}
              color={Colors.primary}
              title={'Titre simple'}
            />
          </Section>
          <Section
            style={{flex: 1, flexDirection: 'row', width: '100%'}}
            title={'Title section'}>
            <TitleSection icon={<MaisonIcon />} color={Colors.primary} />
          </Section>

          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
