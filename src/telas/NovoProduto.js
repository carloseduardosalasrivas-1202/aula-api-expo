import React, { useEffect, useState } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';

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

function NovoProduto() {
  const navigation = useNavigation();
  const route = useRoute();
  const produtoParaEditar = route.params?.produtoParaEditar;
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    if (produtoParaEditar) {
      setNome(produtoParaEditar.nome || '');
      setCategoria(produtoParaEditar.categoria || '');
      setQuantidade(String(produtoParaEditar.qtd || ''));
      setPreco((produtoParaEditar.preco || '').replace('R$ ', '').replace(',', '.'));
    }
  }, [produtoParaEditar]);

  const handleSave = () => {
    if (!nome.trim() || !categoria.trim() || !quantidade.trim() || !preco.trim()) {
      Alert.alert('Dados incompletos', 'Preencha todos os campos do produto antes de salvar.');
      return;
    }

    const quantidadeNumerica = Number(quantidade);
    const precoNumerico = Number(preco.replace(',', '.'));

    if (Number.isNaN(quantidadeNumerica) || Number.isNaN(precoNumerico)) {
      Alert.alert('Valores inválidos', 'Quantidade e preço precisam ser valores válidos.');
      return;
    }

    const itemSalvo = {
      id: produtoParaEditar?.id ?? Date.now(),
      nome: nome.trim(),
      categoria: categoria.trim(),
      qtd: quantidadeNumerica,
      preco: `R$ ${precoNumerico.toFixed(2).replace('.', ',')}`,
      status: quantidadeNumerica <= 5 ? 'Baixo' : 'Normal',
    };

    if (produtoParaEditar) {
      Alert.alert('Produto atualizado', `${itemSalvo.nome} foi atualizado com sucesso.`);
      navigation.navigate('estoque', { produtoAtualizado: itemSalvo });
      return;
    }

    Alert.alert('Produto salvo', `${itemSalvo.nome} foi adicionado ao estoque com sucesso.`);
    navigation.navigate('estoque', { novoItem: itemSalvo });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Produtos</Text>
          <Text style={styles.title}>Novo produto</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nome do produto</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Pomada, shampoo..." placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Categoria</Text>
          <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} placeholder="Estilo, higiene..." placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Quantidade</Text>
          <TextInput style={styles.input} value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" placeholder="15" placeholderTextColor={palette.muted} />

          <Text style={styles.label}>Preço</Text>
          <TextInput style={styles.input} value={preco} onChangeText={setPreco} keyboardType="decimal-pad" placeholder="R$ 25,00" placeholderTextColor={palette.muted} />

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

export default NovoProduto;
