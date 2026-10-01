import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable, Alert } from 'react-native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8a8a8a',
  border: '#2a2a2a',
  input: '#171717',
};

function Configuracoes() {
  const [nomeBarbearia, setNomeBarbearia] = useState('Hope Barbearia');
  const [telefone, setTelefone] = useState('(11) 4002-8922');
  const [endereco, setEndereco] = useState('Rua da Barba, 123');
  const [horario, setHorario] = useState('09:00 às 19:00');

  const handleSalvar = () => {
    Alert.alert('Configurações salvas', 'As informações da barbearia foram atualizadas.');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Configurações</Text>
          <Text style={styles.title}>Barbearia</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nome da barbearia</Text>
          <TextInput style={styles.input} value={nomeBarbearia} onChangeText={setNomeBarbearia} placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Endereço</Text>
          <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Horário de funcionamento</Text>
          <TextInput style={styles.input} value={horario} onChangeText={setHorario} placeholderTextColor={palette.muted} />

          <Pressable style={styles.primaryButton} onPress={handleSalvar}>
            <Text style={styles.primaryButtonText}>Salvar</Text>
          </Pressable>
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
  card: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 18,
  },
  label: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: palette.input,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 10,
    color: palette.white,
    paddingHorizontal: 12,
  },
  primaryButton: {
    marginTop: 18,
    height: 48,
    borderRadius: 10,
    backgroundColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Configuracoes;
