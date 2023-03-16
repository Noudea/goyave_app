import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {Colors} from '../styles/colors';
import TitleIcon from '../components/atoms/icons/RoundIcon';
import Title from '../components/molecules/titles/Title';
import InformationIcon from '../assets/icons/icon_titre/svg/information.svg';
import PlusIcon from '../assets/icons/icon_titre/svg/plus.svg';

import React from 'react';
import ActionButton from '../components/atoms/buttons/ActionButton';
import {useAuth} from '../providers/AuthProvider';

const ProfileScreen = () => {
  const authContext = useAuth();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    labelText: {
      fontSize: 12,
      textTransform: 'uppercase',
      fontWeight: 'normal',
      color: Colors.primary,
      marginTop: 15,
      marginBottom: 10,
    },
    infosContainer: {
      borderBottomColor: Colors.primary,
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
    infosText: {
      fontSize: 16,
      fontWeight: '500',
      color: Colors.black,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 150,
          marginBottom: 30,
        }}>
        <Image
          style={{width: 125, height: 125, borderRadius: 100}}
          source={{uri: 'https://i.pravatar.cc/300'}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.white,
            marginTop: 15,
            textDecorationLine: 'underline',
          }}>
          Changer la photo de profil
        </Text>
      </View>
      <View
        style={{
          padding: 30,
          borderRadius: 20,
          backgroundColor: Colors.white,
        }}>
        <Title
          title="Mes informations"
          color={Colors.primary}
          icon={<TitleIcon icon={<InformationIcon />} color={Colors.primary} />}
        />
        <View>
          <Text style={styles.labelText}>Nom</Text>
          <View style={styles.infosContainer}>
            <Text style={styles.infosText}>Martinez</Text>
          </View>
          <Text style={styles.labelText}>Prénom</Text>
          <View style={styles.infosContainer}>
            <Text style={styles.infosText}>Ruben</Text>
          </View>
          <Text style={styles.labelText}>Numéro de téléphone</Text>
          <View style={styles.infosContainer}>
            <Text style={styles.infosText}>06 11 17 03 22</Text>
          </View>
          <Text style={styles.labelText}>Adresse email</Text>
          <View style={styles.infosContainer}>
            <Text style={styles.infosText}>ruben.martinez@gmail.com</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.primary,
            marginTop: 15,
            marginBottom: 15,
            textDecorationLine: 'underline',
            textAlign: 'center',
          }}>
          Modifier mes informations
        </Text>
        <ActionButton
          text={'Déconnexion'}
          onPress={() => {
            console.log('Déconnexion');
            authContext.logout();
          }}
          color={Colors.primary}
        />
      </View>
      <View
        style={{
          padding: 30,
          borderRadius: 20,
          marginTop: 30,
          marginBottom: 30,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Title
            title="Mes documents"
            color={Colors.primary}
            icon={
              <TitleIcon icon={<InformationIcon />} color={Colors.primary} />
            }
          />
          <PlusIcon />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.black,
            padding: 30,
            textAlign: 'center',
          }}>
          Aucun documents, appuie sur le + pour ajouter des documents de voyage
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
