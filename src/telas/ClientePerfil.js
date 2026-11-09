import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8b8b8b',
  border: '#2a2a2a',
};

function ClientePerfil() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.avatarWrap}>
            <Text style={styles.avatarText}>R</Text>
          </View>
          <Text style={styles.name}>Rafael Silva</Text>
          <Text style={styles.role}>Cliente Gold</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Atendimentos</Text>
            <Text style={styles.statValue}>18</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Plano</Text>
            <Text style={styles.statValue}>Gold</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>rafael@email.com</Text>

          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(11) 99999-9999</Text>

          <Text style={styles.label}>Preferências</Text>
          <Text style={styles.value}>Corte moderno, barba precisa e hidratação.</Text>
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Sair da conta</Text>
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
    gap: 18,
  },
  card: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 22,
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
    alignSelf: 'center',
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
    textAlign: 'center',
    marginBottom: 4,
  },
  role: {
    color: palette.muted,
    fontSize: 15,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(201,162,39,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.25)',
    borderRadius: 14,
    padding: 14,
  },
  statLabel: {
    color: palette.muted,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  statValue: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
  },
  label: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 6,
    marginTop: 12,
  },
  value: {
    color: palette.text,
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 17,
  },
});

export default ClientePerfil;
