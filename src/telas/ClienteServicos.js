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
  border: '#2b2b2b',
};

const servicos = [
  { nome: 'Corte clássico', tempo: '50 min', preco: 'R$ 45,00', icone: '✂️' },
  { nome: 'Barba completa', tempo: '25 min', preco: 'R$ 30,00', icone: '🧔' },
  { nome: 'Corte + barba', tempo: '70 min', preco: 'R$ 70,00', icone: '💈' },
  { nome: 'Hidratação capilar', tempo: '20 min', preco: 'R$ 25,00', icone: '✨' },
];

function ClienteServicos() {
  const navigation = useNavigation();

  const handleAgendar = (servico) => {
    Alert.alert('Serviço selecionado', `${servico.nome} foi adicionado à sua agenda.`);
    navigation.navigate('Agenda');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Serviços</Text>
          <Text style={styles.title}>Escolha o melhor para você</Text>
        </View>

        {servicos.map((servico) => (
          <View key={servico.nome} style={styles.cardItem}>
            <View style={styles.serviceInfo}>
              <View style={styles.iconWrap}>
                <Text style={styles.iconText}>{servico.icone}</Text>
              </View>
              <View>
                <Text style={styles.serviceName}>{servico.nome}</Text>
                <Text style={styles.serviceMeta}>{servico.tempo}</Text>
              </View>
            </View>

            <View style={styles.rightSide}>
              <Text style={styles.price}>{servico.preco}</Text>
              <Pressable style={styles.button} onPress={() => handleAgendar(servico)}>
                <Text style={styles.buttonText}>Agendar</Text>
              </Pressable>
            </View>
          </View>
        ))}
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
    gap: 16,
  },
  headerCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    borderRadius: 18,
    padding: 20,
  },
  eyebrow: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 16,
  },
  serviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  serviceName: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  serviceMeta: {
    color: palette.muted,
    fontSize: 13,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  price: {
    color: palette.gold,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: palette.gold,
    fontWeight: '700',
  },
});

export default ClienteServicos;
