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

const produtos = [
  { nome: 'Pomada', categoria: 'Produtos', qtd: 15, preco: 'R$ 25,00', status: 'Normal' },
  { nome: 'Shampoo', categoria: 'Higiene', qtd: 3, preco: 'R$ 30,00', status: 'Baixo' },
  { nome: 'Gel', categoria: 'Estilo', qtd: 21, preco: 'R$ 18,00', status: 'Normal' },
];

function Produtos() {
  const navigation = useNavigation();

  const handleNewProduct = () => {
    Alert.alert('Novo produto', 'A tela de cadastro de produto foi iniciada.');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Produtos</Text>
          <Text style={styles.title}>Estoque</Text>
        </View>

        <View style={styles.toolbar}>
          <Pressable style={styles.primaryButton} onPress={handleNewProduct}>
            <Text style={styles.primaryButtonText}>+ Novo produto</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          {produtos.map((produto, index) => (
            <Pressable
              key={produto.nome}
              onPress={() => Alert.alert('Produto', `${produto.nome} está com estoque ${produto.qtd}.`)}
              style={[styles.row, index !== produtos.length - 1 && styles.rowBorder]}
            >
              <View style={styles.info}>
                <Text style={styles.name}>{produto.nome}</Text>
                <Text style={styles.meta}>{produto.categoria}</Text>
              </View>
              <Text style={styles.amount}>{produto.qtd}</Text>
              <Text style={styles.price}>{produto.preco}</Text>
              <Text style={[styles.status, produto.status === 'Normal' ? styles.statusGood : styles.statusLow]}>{produto.status}</Text>
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
  info: {
    flex: 1.5,
  },
  name: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '700',
  },
  meta: {
    color: palette.muted,
    fontSize: 11,
    marginTop: 3,
  },
  amount: {
    flex: 0.7,
    color: palette.text,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    flex: 1,
    color: palette.gold,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  status: {
    flex: 1,
    textAlign: 'right',
    fontSize: 11,
    fontWeight: '700',
  },
  statusGood: {
    color: '#7fe6a1',
  },
  statusLow: {
    color: '#ffb26b',
  },
});

export default Produtos;
