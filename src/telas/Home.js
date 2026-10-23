import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f6f6f6',
  text: '#d9d9d9',
  border: '#2f2f2f',
};

function HomeScreen() {
  const navigation = useNavigation();

  const modules = [
    { label: 'Agendamentos', icon: '📅', route: 'agendamento', value: '12 hoje' },
    { label: 'Clientes', icon: '👥', route: 'clientes', value: '148 ativos' },
    { label: 'Barbeiros', icon: '💈', route: 'barbeiros', value: '5 no time' },
    { label: 'Serviços', icon: '✂️', route: 'servicos', value: '4 itens' },
    { label: 'Produtos', icon: '📦', route: 'produtos', value: '84 itens' },
    { label: 'Financeiro', icon: '📈', route: 'financeiro', value: 'R$ 8.4k' },
    { label: 'Perfil', icon: '👤', route: 'perfil', value: 'Rafael' },
    { label: 'Configurações', icon: '⚙️', route: 'configuracoes', value: 'Loja' },
  ];

  const stats = [
    { label: 'Hoje', value: '12' },
    { label: 'Receita', value: 'R$ 8,4k' },
    { label: 'Avaliação', value: '4.9' },
  ];

  const handleLogout = () => {
    Alert.alert('Logout', 'Sessão encerrada com sucesso.');
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <View style={styles.headerOverlay}>
            <View style={styles.headerTop}>
              <View>
                <Text style={styles.eyebrow}>Hope barbearia</Text>
                <Text style={styles.greeting}>Bem-vindo, Rafael</Text>
              </View>
              <Pressable style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Sair</Text>
              </Pressable>
            </View>
            <Text style={styles.subtitle}>Seu atendimento está pronto para continuar.</Text>

            <View style={styles.statRow}>
              {stats.map((item) => (
                <View key={item.label} style={styles.statCard}>
                  <Text style={styles.statLabel}>{item.label}</Text>
                  <Text style={styles.statValue}>{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.grid}>
          {modules.map((item) => (
            <Pressable key={item.route} style={styles.tile} onPress={() => navigation.navigate(item.route)}>
              <Text style={styles.tileIcon}>{item.icon}</Text>
              <Text style={styles.tileTitle}>{item.label}</Text>
              <Text style={styles.tileValue}>{item.value}</Text>
            </Pressable>
          ))}
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
  headerCard: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#191919',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },
  headerOverlay: {
    padding: 22,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(15, 15, 15, 0.92)',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  eyebrow: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  greeting: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#f5f5f5',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 18,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(201,162,39,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.25)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  statLabel: {
    color: '#d8d8d8',
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
  logoutButton: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.4)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  logoutText: {
    color: palette.gold,
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  tile: {
    width: '48%',
    minHeight: 150,
    borderRadius: 18,
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 18,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  tileIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  tileTitle: {
    color: palette.gold,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  tileValue: {
    color: palette.text,
    fontSize: 14,
  },
});

export default HomeScreen;