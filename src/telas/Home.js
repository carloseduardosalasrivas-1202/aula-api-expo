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
                <Text style={styles.eyebrow}>Barber Prime</Text>
                <Text style={styles.greeting}>Bem-vindo, Rafael</Text>
              </View>
              <Pressable style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Sair</Text>
              </Pressable>
            </View>
            <Text style={styles.subtitle}>Seu atendimento está pronto para continuar.</Text>
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
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  headerOverlay: {
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(10, 10, 10, 0.72)',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
    borderRadius: 16,
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 18,
    justifyContent: 'center',
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