import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8a8a8a',
  border: '#2a2a2a',
};

const barbeiros = [
  { nome: 'João', especialidade: 'Corte', status: 'Ativo' },
  { nome: 'Carlos', especialidade: 'Barba', status: 'Ativo' },
  { nome: 'Pedro', especialidade: 'Corte + barba', status: 'Inativo' },
];

function Barbeiros() {
  const navigation = useNavigation();

  const handleNewBarbeiro = () => navigation.navigate('novoBarbeiro');

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Barbeiros</Text>
          <Text style={styles.title}>Lista de barbeiros</Text>
        </View>

        <View style={styles.toolbar}>
          <Pressable style={styles.primaryButton} onPress={handleNewBarbeiro}>
            <Text style={styles.primaryButtonText}>+ Novo barbeiro</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          {barbeiros.map((barbeiro, index) => (
            <Pressable
              key={barbeiro.nome}
              onPress={() => Alert.alert('Editar barbeiro', `Você selecionou ${barbeiro.nome}.`)}
              style={[styles.row, index !== barbeiros.length - 1 && styles.rowBorder]}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{barbeiro.nome[0]}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{barbeiro.nome}</Text>
                <Text style={styles.specialty}>{barbeiro.especialidade}</Text>
              </View>
              <View style={styles.meta}>
                <Text style={[styles.status, barbeiro.status === 'Ativo' ? styles.statusActive : styles.statusInactive]}>{barbeiro.status}</Text>
                <Text style={styles.action}>Editar</Text>
              </View>
            </Pressable>
          ))}
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
    padding: 18,
    gap: 16,
  },
  headerCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    borderRadius: 16,
    padding: 20,
  },
  eyebrow: {
    color: palette.gold,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  title: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
  },
  toolbar: {
    flexDirection: 'row',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: palette.gold,
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
  },
  card: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#232323',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderWidth: 1,
    borderColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: palette.gold,
    fontWeight: '700',
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
  name: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '700',
  },
  specialty: {
    color: palette.muted,
    fontSize: 12,
    marginTop: 2,
  },
  meta: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
  },
  statusActive: {
    color: '#7fe6a1',
  },
  statusInactive: {
    color: '#ffb26b',
  },
  action: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Barbeiros;
