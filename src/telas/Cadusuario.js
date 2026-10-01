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
  goldSoft: '#e0bd45',
  white: '#f6f6f6',
  text: '#d4d4d4',
  muted: '#8b8b8b',
  input: '#171717',
  border: '#2e2e2e',
};

function Cadusuario({ route }) {
  const navigation = useNavigation();
  const perfil = route?.params?.perfil ?? 'cliente';
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCreateAccount = () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, e-mail e senha para continuar.');
      return;
    }

    Alert.alert('Conta criada', 'Seu cadastro foi concluído com sucesso!');
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>{perfil === 'barbeiro' ? '✂' : '👤'}</Text>
          </View>

          <Text style={styles.title}>{perfil === 'barbeiro' ? 'Cadastro de barbeiro' : 'Cadastro de cliente'}</Text>
          <Text style={styles.subtitle}>Crie sua conta para continuar com segurança.</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              placeholderTextColor={palette.muted}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              placeholderTextColor={palette.muted}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              placeholder="Crie sua senha"
              placeholderTextColor={palette.muted}
              secureTextEntry
            />
          </View>

          <Pressable style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Criar conta</Text>
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
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: palette.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    padding: 28,
  },
  iconWrap: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: palette.gold,
    backgroundColor: 'rgba(201,162,39,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },
  iconText: {
    fontSize: 30,
    color: palette.gold,
  },
  title: {
    textAlign: 'center',
    color: palette.white,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: palette.text,
    fontSize: 15,
    marginBottom: 24,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: palette.input,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 10,
    color: palette.white,
    height: 50,
    paddingHorizontal: 14,
    fontSize: 15,
  },
  button: {
    marginTop: 8,
    height: 52,
    borderRadius: 10,
    backgroundColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 17,
  },
});

export default Cadusuario;