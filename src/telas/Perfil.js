import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d7d7d7',
  muted: '#8d8d8d',
  border: '#2a2a2a',
};

function Perfil() {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    Alert.alert('Perfil', 'Suas informações foram carregadas para edição.');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.profileCard}>
          <View style={styles.avatarWrap}>
            <Text style={styles.avatarText}>R</Text>
          </View>

          <Text style={styles.name}>Rafael Silva</Text>
          <Text style={styles.role}>Cliente premium</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>rafael@email.com</Text>

          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(11) 99999-9999</Text>

          <Text style={styles.label}>Plano</Text>
          <Text style={styles.value}>Gold Barber</Text>
        </View>

        <Pressable style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    marginBottom: 18,
  },
  avatarWrap: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderWidth: 1,
    borderColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: palette.gold,
    fontSize: 30,
    fontWeight: '700',
  },
  name: {
    color: palette.white,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  role: {
    color: palette.muted,
    fontSize: 15,
  },
  infoCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },
  label: {
    color: palette.gold,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginTop: 12,
    marginBottom: 6,
  },
  value: {
    color: palette.text,
    fontSize: 16,
  },
  button: {
    height: 52,
    backgroundColor: palette.gold,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default Perfil;