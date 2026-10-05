import React, { useMemo, useState } from 'react';
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

const clientes = [
  { id: '01', nome: 'João Silva', telefone: '(11) 99999-1111', email: 'joao@email.com', status: 'Ativo' },
  { id: '02', nome: 'Pedro Souza', telefone: '(11) 98888-2222', email: 'pedro@email.com', status: 'Ativo' },
  { id: '03', nome: 'Marcos Lima', telefone: '(11) 97777-3333', email: 'marcos@email.com', status: 'Inativo' },
];

function Clientes() {
  const navigation = useNavigation();
  const [filtro, setFiltro] = useState('Todos');

  const listaFiltrada = useMemo(() => {
    if (filtro === 'Ativos') {
      return clientes.filter((cliente) => cliente.status === 'Ativo');
    }

    if (filtro === 'Inativos') {
      return clientes.filter((cliente) => cliente.status !== 'Ativo');
    }

    return clientes;
  }, [filtro]);

  const handleCadastrar = () => navigation.navigate('cadastroCliente');
  const handleFiltrar = () => {
    const proximoFiltro = filtro === 'Todos' ? 'Ativos' : filtro === 'Ativos' ? 'Inativos' : 'Todos';
    setFiltro(proximoFiltro);
    Alert.alert('Filtro', `Mostrando clientes ${proximoFiltro.toLowerCase()}.`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Clientes</Text>
          <Text style={styles.title}>Lista de clientes</Text>
        </View>

        <View style={styles.toolbar}>
          <Pressable style={styles.primaryButton} onPress={handleCadastrar}>
            <Text style={styles.primaryButtonText}>+ Cadastrar</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={handleFiltrar}>
            <Text style={styles.secondaryButtonText}>{filtro === 'Todos' ? 'Filtrar' : filtro}</Text>
          </Pressable>
        </View>

        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={styles.th}>ID</Text>
            <Text style={styles.th}>Nome</Text>
            <Text style={styles.th}>Status</Text>
            <Text style={styles.th}>Ações</Text>
          </View>

          {listaFiltrada.map((cliente) => (
            <View key={cliente.id} style={styles.row}>
              <Text style={styles.cell}>{cliente.id}</Text>
              <View style={styles.nameWrap}>
                <Text style={styles.name}>{cliente.nome}</Text>
                <Text style={styles.email}>{cliente.email}</Text>
              </View>
              <Text style={[styles.status, cliente.status === 'Ativo' ? styles.statusActive : styles.statusInactive]}>{cliente.status}</Text>
              <Pressable onPress={() => Alert.alert('Cliente', `Editar dados de ${cliente.nome}.`)}>
                <Text style={styles.actionText}>Editar</Text>
              </Pressable>
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
  toolbar: {
    flexDirection: 'row',
    gap: 10,
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
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: palette.gold,
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: palette.gold,
    fontWeight: '700',
  },
  tableCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#232323',
  },
  th: {
    flex: 1,
    color: palette.gold,
    fontSize: 11,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#232323',
  },
  cell: {
    flex: 1,
    color: palette.text,
    fontSize: 12,
  },
  nameWrap: {
    flex: 1,
  },
  name: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '600',
  },
  email: {
    color: palette.muted,
    fontSize: 10,
    marginTop: 2,
  },
  status: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
  },
  statusActive: {
    color: '#7fe6a1',
  },
  statusInactive: {
    color: '#ffb26b',
  },
  actionText: {
    flex: 1,
    color: palette.gold,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Clientes;
