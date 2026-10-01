import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8a8a8a',
  border: '#2a2a2a',
};

const movimentacoes = [
  { data: '17/09', desc: 'Corte', tipo: 'Entrada', valor: 'R$ 35,00' },
  { data: '17/09', desc: 'Compra de pomada', tipo: 'Saída', valor: 'R$ 100,00' },
  { data: '18/09', desc: 'Barba', tipo: 'Entrada', valor: 'R$ 45,00' },
];

function Financeiro() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Financeiro</Text>
          <Text style={styles.title}>Controle financeiro</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.label}>Faturamento</Text>
            <Text style={styles.value}>R$ 8.450,00</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.label}>Despesas</Text>
            <Text style={styles.value}>R$ 2.300,00</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.label}>Lucro</Text>
            <Text style={styles.value}>R$ 6.150,00</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Movimentações</Text>
          {movimentacoes.map((item, index) => (
            <View key={`${item.data}-${item.desc}`} style={[styles.row, index !== movimentacoes.length - 1 && styles.rowBorder]}>
              <Text style={styles.data}>{item.data}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={[styles.tipo, item.tipo === 'Entrada' ? styles.tipoEntrada : styles.tipoSaida]}>{item.tipo}</Text>
              <Text style={styles.valor}>{item.valor}</Text>
            </View>
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
  statsGrid: {
    gap: 12,
  },
  statCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 18,
  },
  label: {
    color: palette.gold,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  value: {
    color: palette.white,
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 12,
  },
  sectionTitle: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 8,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#232323',
  },
  data: {
    flex: 1,
    color: palette.text,
    fontSize: 12,
  },
  desc: {
    flex: 2,
    color: palette.white,
    fontSize: 12,
  },
  tipo: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '700',
  },
  tipoEntrada: {
    color: '#7fe6a1',
  },
  tipoSaida: {
    color: '#ffb26b',
  },
  valor: {
    flex: 1,
    color: palette.gold,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: '700',
  },
});

export default Financeiro;
