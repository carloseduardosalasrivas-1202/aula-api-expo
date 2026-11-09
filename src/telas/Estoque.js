import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Alert, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8a8a8a',
  border: '#2a2a2a',
};

const produtosIniciais = [
  { id: 1, nome: 'Pomada', categoria: 'Produtos', qtd: 15, preco: 'R$ 25,00', status: 'Normal' },
  { id: 2, nome: 'Shampoo', categoria: 'Higiene', qtd: 3, preco: 'R$ 30,00', status: 'Baixo' },
  { id: 3, nome: 'Gel', categoria: 'Estilo', qtd: 21, preco: 'R$ 18,00', status: 'Normal' },
  { id: 4, nome: 'Óleo', categoria: 'Cuidados', qtd: 8, preco: 'R$ 22,00', status: 'Normal' },
  { id: 5, nome: 'Loção', categoria: 'Higiene', qtd: 2, preco: 'R$ 27,00', status: 'Baixo' },
];

function Estoque() {
  const navigation = useNavigation();
  const route = useRoute();
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [pesquisa, setPesquisa] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  useEffect(() => {
    if (route.params?.novoItem) {
      const novoItem = { ...route.params.novoItem, id: Date.now() };
      setProdutos((itensAtuais) => [novoItem, ...itensAtuais]);
      navigation.setParams({ novoItem: undefined });
    }

    if (route.params?.produtoAtualizado) {
      const produtoAtualizado = route.params.produtoAtualizado;
      setProdutos((itensAtuais) =>
        itensAtuais.map((item) =>
          item.id === produtoAtualizado.id ? produtoAtualizado : item,
        ),
      );
      navigation.setParams({ produtoAtualizado: undefined });
    }
  }, [route.params?.novoItem, route.params?.produtoAtualizado]);

  const categorias = ['Todos', 'Produtos', 'Higiene', 'Estilo', 'Cuidados'];

  const totalEstoque = produtos.reduce((total, produto) => total + Number(produto.qtd || 0), 0);
  const itensBaixos = produtos.filter((produto) => produto.status === 'Baixo').length;
  const valorEstoque = produtos.reduce((total, produto) => {
    const valorNumerico = Number(String(produto.preco).replace('R$ ', '').replace('.', '').replace(',', '.')) || 0;
    return total + valorNumerico * Number(produto.qtd || 0);
  }, 0);

  const resumoEstoque = [
    { label: 'Estoque', value: `${totalEstoque} itens` },
    { label: 'Baixo', value: `${itensBaixos} itens` },
    { label: 'Valor', value: `R$ ${valorEstoque.toFixed(2).replace('.', ',')}` },
  ];

  const produtosFiltrados = useMemo(() => {
    const texto = pesquisa.trim().toLowerCase();

    return produtos.filter((produto) => {
      const atendeBusca = !texto || produto.nome.toLowerCase().includes(texto) || produto.categoria.toLowerCase().includes(texto);
      const atendeCategoria = categoriaSelecionada === 'Todos' || produto.categoria === categoriaSelecionada;
      return atendeBusca && atendeCategoria;
    });
  }, [produtos, pesquisa, categoriaSelecionada]);

  const handleAddProduct = () => navigation.navigate('novoProduto');

  const handleEditar = (produto) => {
    navigation.navigate('novoProduto', { produtoParaEditar: produto });
  };

  const handleExcluir = (produto) => {
    Alert.alert(
      'Excluir produto',
      `Deseja remover ${produto.nome} do estoque?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            setProdutos((itensAtuais) => itensAtuais.filter((item) => item.id !== produto.id));
            Alert.alert('Produto removido', `${produto.nome} foi removido do estoque.`);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Estoque</Text>
          <Text style={styles.title}>Controle de inventário</Text>
        </View>

        <View style={styles.statsRow}>
          {resumoEstoque.map((item) => (
            <View key={item.label} style={styles.statBox}>
              <Text style={styles.statLabel}>{item.label}</Text>
              <Text style={styles.statValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.primaryButton} onPress={handleAddProduct}>
          <Text style={styles.primaryButtonText}>+ Adicionar item</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Produtos em estoque</Text>

          <TextInput
            style={styles.searchInput}
            value={pesquisa}
            onChangeText={setPesquisa}
            placeholder="Buscar produto..."
            placeholderTextColor={palette.muted}
          />

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
            {categorias.map((categoria) => (
              <Pressable
                key={categoria}
                style={[styles.filterChip, categoriaSelecionada === categoria && styles.filterChipActive]}
                onPress={() => setCategoriaSelecionada(categoria)}
              >
                <Text style={[styles.filterText, categoriaSelecionada === categoria && styles.filterTextActive]}>{categoria}</Text>
              </Pressable>
            ))}
          </ScrollView>

          {produtosFiltrados.length === 0 ? (
            <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
          ) : (
            produtosFiltrados.map((produto, index) => (
              <View key={produto.id ?? `${produto.nome}-${index}`} style={[styles.row, index !== produtosFiltrados.length - 1 && styles.rowBorder]}>
                <View style={styles.info}>
                  <Text style={styles.name}>{produto.nome}</Text>
                  <Text style={styles.meta}>{produto.categoria}</Text>
                </View>

                <View style={styles.qtyBox}>
                  <Text style={styles.qtyLabel}>Qtd</Text>
                  <Text style={styles.qtyValue}>{produto.qtd}</Text>
                </View>

                <View style={styles.priceBox}>
                  <Text style={styles.priceValue}>{produto.preco}</Text>
                </View>

                <View style={styles.statusWrap}>
                  <Text style={[styles.status, produto.status === 'Normal' ? styles.statusGood : styles.statusLow]}>{produto.status}</Text>
                </View>

                <View style={styles.actionsRow}>
                  <Pressable style={styles.actionButton} onPress={() => handleEditar(produto)}>
                    <Text style={styles.actionText}>Editar</Text>
                  </Pressable>
                  <Pressable style={[styles.actionButton, styles.deleteButton]} onPress={() => handleExcluir(produto)}>
                    <Text style={styles.actionText}>Excluir</Text>
                  </Pressable>
                </View>
              </View>
            ))
          )}
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
    borderRadius: 18,
    padding: 20,
  },
  eyebrow: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  title: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(201,162,39,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.25)',
    borderRadius: 14,
    padding: 12,
  },
  statLabel: {
    color: palette.muted,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  statValue: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: palette.gold,
    borderRadius: 12,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#c9a227',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 15,
  },
  card: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 14,
    marginTop: 16,
  },
  sectionTitle: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 10,
    color: palette.white,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 12,
  },
  filterRow: {
    paddingBottom: 8,
    gap: 8,
  },
  filterChip: {
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterChipActive: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderColor: 'rgba(201,162,39,0.4)',
  },
  filterText: {
    color: palette.muted,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  filterTextActive: {
    color: palette.gold,
  },
  emptyText: {
    color: palette.muted,
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    backgroundColor: '#151515',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  rowBorder: {
    borderBottomWidth: 0,
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
  qtyBox: {
    width: 46,
    alignItems: 'center',
    marginRight: 4,
  },
  qtyLabel: {
    color: palette.muted,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  qtyValue: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '700',
  },
  priceBox: {
    width: 74,
    alignItems: 'center',
    marginRight: 4,
  },
  priceValue: {
    color: palette.gold,
    fontSize: 12,
    fontWeight: '700',
  },
  statusWrap: {
    width: 58,
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statusGood: {
    color: '#7fe6a1',
  },
  statusLow: {
    color: '#ffb26b',
  },
  actionsRow: {
    flexDirection: 'column',
    gap: 6,
    marginLeft: 6,
  },
  actionButton: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: 'rgba(255,90,90,0.08)',
    borderColor: 'rgba(255,90,90,0.3)',
  },
  actionText: {
    color: palette.white,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default Estoque;
