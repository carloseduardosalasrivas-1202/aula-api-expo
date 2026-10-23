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
    navigation.navigate('configuracoes');
  };

  const handleBack = () => navigation.goBack();

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

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Serviços</Text>
            <Text style={styles.summaryValue}>18</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Status</Text>
            <Text style={styles.summaryValue}>Gold</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>rafael@email.com</Text>

          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(11) 99999-9999</Text>

          <Text style={styles.label}>Plano</Text>
          <Text style={styles.value}>Gold Barber</Text>
        </View>

        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Editar perfil</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={handleBack}>
            <Text style={styles.secondaryButtonText}>Voltar</Text>
          </Pressable>
        </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
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
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: 'rgba(201,162,39,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.22)',
    borderRadius: 14,
    padding: 14,
  },
  summaryLabel: {
    color: '#d9d9d9',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  summaryValue: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
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
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    height: 52,
    backgroundColor: palette.gold,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    flex: 1,
    height: 52,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: palette.gold,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: palette.gold,
    fontSize: 17,
    fontWeight: '700',
  },
});

export default Perfil;