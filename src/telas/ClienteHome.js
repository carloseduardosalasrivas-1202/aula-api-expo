import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  goldSoft: '#f0d36d',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8b8b8b',
  border: '#2d2d2d',
};

const quickActions = [
  { label: 'Serviços', icon: '💈', route: 'Serviços' },
  { label: 'Agendar', icon: '✂️', route: 'Serviços' },
  { label: 'Meu perfil', icon: '👤', route: 'Perfil' },
];

function ClienteHome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Hope barbearia</Text>
          <Text style={styles.greeting}>Olá, Rafael</Text>
          <Text style={styles.subtitle}>Sua próxima experiência com estilo começa aqui.</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Próximo</Text>
              <Text style={styles.statValue}>Hoje</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Status</Text>
              <Text style={styles.statValue}>Confirmado</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Atalhos</Text>
          <View style={styles.quickRow}>
            {quickActions.map((item) => (
              <Pressable
                key={item.label}
                style={styles.quickButton}
                onPress={() => navigation.navigate(item.route)}
              >
                <Text style={styles.quickIcon}>{item.icon}</Text>
                <Text style={styles.quickText}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Próximo agendamento</Text>
          <View style={styles.bookingBox}>
            <Text style={styles.bookingTitle}>Corte + barba</Text>
            <Text style={styles.bookingMeta}>Hoje • 09:00 • João</Text>
            <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Agenda')}>
              <Text style={styles.primaryButtonText}>Ver agenda</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 24,
    gap: 18,
  },
  heroCard: {
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.4)',
    borderRadius: 22,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },
  eyebrow: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  greeting: {
    color: palette.white,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: palette.text,
    fontSize: 15,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(201,162,39,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.25)',
    borderRadius: 12,
    padding: 12,
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
  sectionCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 18,
  },
  sectionTitle: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  quickButton: {
    flex: 1,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#343434',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickIcon: {
    fontSize: 22,
    marginBottom: 8,
  },
  quickText: {
    color: palette.white,
    fontSize: 13,
    fontWeight: '600',
  },
  bookingBox: {
    backgroundColor: '#141414',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 5,
  },
  bookingTitle: {
    color: palette.goldSoft,
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 8,
  },
  bookingMeta: {
    color: palette.text,
    fontSize: 14,
    marginBottom: 18,
  },
  primaryButton: {
    backgroundColor: palette.gold,
    borderRadius: 12,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ClienteHome;
