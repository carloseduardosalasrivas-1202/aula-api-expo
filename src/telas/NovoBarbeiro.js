import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

function NovoBarbeiro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState('Ativo');

  const handleSave = () => {
    if (!nome.trim() || !especialidade.trim() || !telefone.trim()) {
      Alert.alert('Dados incompletos', 'Preencha nome, especialidade e telefone para continuar.');
      return;
    }

    Alert.alert('Barbeiro cadastrado', `${nome} foi adicionado ao time com sucesso.`);
    navigation.navigate('barbeiros');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Barbeiros</Text>
          <Text style={styles.title}>Novo barbeiro</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome do profissional" placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Especialidade</Text>
          <TextInput style={styles.input} value={especialidade} onChangeText={setEspecialidade} placeholder="Corte, barba, acabamento..." placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" placeholder="(11) 99999-9999" placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Status</Text>
          <TextInput style={styles.input} value={status} onChangeText={setStatus} placeholder="Ativo" placeholderTextColor={palette.muted} />

          <View style={styles.actionRow}>
            <Pressable style={styles.primaryButton} onPress={handleSave}>
              <Text style={styles.primaryButtonText}>Salvar</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
              <Text style={styles.secondaryButtonText}>Voltar</Text>
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
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    backgroundColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.gold,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: palette.gold,
    fontWeight: '700',
  },
});

export default NovoBarbeiro;
