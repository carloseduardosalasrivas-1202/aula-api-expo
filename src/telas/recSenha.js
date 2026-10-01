import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f6f6f6',
  text: '#d0d0d0',
  muted: '#8f8f8f',
  input: '#171717',
  border: '#2f2f2f',
};

function RecSenha() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSendRecovery = () => {
    if (!email.trim()) {
      Alert.alert('E-mail obrigatório', 'Informe seu e-mail para receber o link de redefinição.');
      return;
    }

    Alert.alert('Link enviado', 'Verifique seu e-mail para redefinir sua senha.');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Text style={styles.iconText}>✦</Text>
        </View>

        <Text style={styles.title}>Recuperação de senha</Text>
        <Text style={styles.subtitle}>Digite seu e-mail para receber as instruções de redefinição.</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          placeholderTextColor={palette.muted}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Pressable style={styles.button} onPress={handleSendRecovery}>
          <Text style={styles.buttonText}>Enviar link</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: palette.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    padding: 28,
  },
  iconWrap: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    backgroundColor: 'rgba(201,162,39,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },
  iconText: {
    fontSize: 24,
    color: palette.gold,
  },
  title: {
    color: palette.white,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: palette.text,
    fontSize: 15,
    marginBottom: 22,
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
    height: 52,
    color: palette.white,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  button: {
    height: 52,
    borderRadius: 10,
    backgroundColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default RecSenha;