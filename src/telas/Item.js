import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d9d9d9',
  muted: '#8b8b8b',
  border: '#2b2b2b',
};

function Item() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Barber Prime</Text>
          <Text style={styles.title}>Serviços premium</Text>
          <Text style={styles.subtitle}>Confira os melhores serviços da barbearia.</Text>
        </View>

        <View style={styles.listCard}>
          {[
            ['Corte clássico', 'R$ 45,00', '50 min'],
            ['Barba completa', 'R$ 30,00', '25 min'],
            ['Corte + barba', 'R$ 70,00', '70 min'],
            ['Hidratação capilar', 'R$ 25,00', '20 min'],
          ].map(([name, price, time], index) => (
            <View key={index} style={styles.itemRow}>
              <View>
                <Text style={styles.itemTitle}>{name}</Text>
                <Text style={styles.itemMeta}>{time}</Text>
              </View>
              <Text style={styles.itemPrice}>{price}</Text>
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
    padding: 20,
    paddingTop: 30,
  },
  headerCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
  },
  eyebrow: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: palette.white,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: palette.text,
    fontSize: 15,
  },
  listCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 12,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    paddingVertical: 16,
  },
  itemTitle: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600',
  },
  itemMeta: {
    color: palette.muted,
    fontSize: 13,
    marginTop: 4,
  },
  itemPrice: {
    color: palette.gold,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Item;