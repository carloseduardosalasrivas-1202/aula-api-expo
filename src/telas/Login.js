import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const colors = {
  bg: '#0b0b0b',
  panel: '#111111',
  card: '#171717',
  gold: '#c9a227',
  goldSoft: '#e0bd45',
  goldDark: '#8f7418',
  white: '#f6f6f6',
  muted: '#bdbdbd',
  muted2: '#7c7c7c',
  border: '#3a3a3a',
  darkInput: '#171717',
};

function Login() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isPhone = width < 760;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showCadastroModal, setShowCadastroModal] = useState(false);

  const BrandLogo = () => (
    <View style={styles.brandHeader}>
      <Text style={styles.brandTitle}>Barber Prime</Text>
      <Text style={styles.brandSubtitle}>Estilo & gestão</Text>
    </View>
  );

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Campos obrigatórios', 'Digite seu e-mail e senha para entrar.');
      return;
    }

    navigation.navigate('home');
  };

  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={[styles.pageContent, isPhone && styles.pageContentMobile]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.formArea, isPhone && styles.formAreaMobile]}>
            <View style={[styles.card, isPhone && styles.cardMobile]}>
                <BrandLogo />

              <Text style={styles.title}>Entrar</Text>
              <Text style={styles.subtitle}>Acesse sua conta e continue no seu melhor visual.</Text>

              <View style={styles.formGroup}>
                <Text style={styles.label}>E-mail</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="seu@email.com"
                    placeholderTextColor={colors.muted2}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                  />
                  <Text style={styles.inputIcon}>✉</Text>
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Senha</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Sua senha"
                    placeholderTextColor={colors.muted2}
                    secureTextEntry={!showPassword}
                    style={styles.input}
                  />
                  <Pressable
                    style={styles.eyeButton}
                    onPress={() => setShowPassword((current) => !current)}
                  >
                    <Text style={{ color: colors.gold, fontSize: 18 }}>{showPassword ? '🙈' : '👁'}</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.optionsRow}>
                <Pressable style={styles.rememberWrapper} onPress={() => setRememberMe((value) => !value)}>
                  <View style={[styles.checkBox, rememberMe && styles.checkBoxChecked]}>
                    {rememberMe ? <Text style={styles.checkmark}>✓</Text> : null}
                  </View>
                  <Text style={styles.rememberText}>Lembrar-me</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('recsenha')}>
                  <Text style={styles.forgotText}>Esqueci a senha</Text>
                </Pressable>
              </View>

              <Pressable style={styles.submitButton} onPress={handleLogin}>
                <Text style={styles.submitButtonText}>Entrar</Text>
              </Pressable>

              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>ou</Text>
                <View style={styles.dividerLine} />
              </View>

              <Pressable style={styles.secondaryButton} onPress={() => setShowCadastroModal(true)}>
                <Text style={styles.secondaryButtonText}>✦ Criar conta</Text>
              </Pressable>

              <Text style={styles.footerText}>© 2026 Barber Prime</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {showCadastroModal ? (
        <Pressable style={styles.modalOverlay} onPress={() => setShowCadastroModal(false)}>
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <Pressable style={styles.modalClose} onPress={() => setShowCadastroModal(false)}>
              <Text style={styles.modalCloseText}>×</Text>
            </Pressable>

            <View style={styles.modalIcon}>
              <Text style={styles.modalIconText}>✦</Text>
            </View>

            <Text style={styles.modalTitle}>Escolha seu perfil</Text>
            <Text style={styles.modalDescription}>Selecione como deseja começar no sistema.</Text>

            <View style={[styles.optionGrid, isPhone && styles.optionGridMobile]}>
              <Pressable
                style={[styles.optionButton, isPhone && styles.optionButtonMobile]}
                onPress={() => {
                  setShowCadastroModal(false);
                  navigation.navigate('cadUsu', { perfil: 'cliente' });
                }}
              >
                <View style={styles.optionIcon}>
                  <Text style={styles.optionIconText}>👤</Text>
                </View>
                <Text style={styles.optionTitle}>Cliente</Text>
                <Text style={styles.optionDescription}>Agende serviços e acompanhe seu perfil.</Text>
              </Pressable>

              <Pressable
                style={[styles.optionButton, isPhone && styles.optionButtonMobile]}
                onPress={() => {
                  setShowCadastroModal(false);
                  navigation.navigate('cadUsu', { perfil: 'barbeiro' });
                }}
              >
                <View style={styles.optionIcon}>
                  <Text style={styles.optionIconText}>✂</Text>
                </View>
                <Text style={styles.optionTitle}>Barbeiro</Text>
                <Text style={styles.optionDescription}>Gerencie agendamentos e sua barbearia.</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  pageContent: {
    flexGrow: 1,
    flexDirection: 'row',
    minHeight: '100%',
  },
  pageContentMobile: {
    flexDirection: 'column',
  },
  brandHeader: {
    alignItems: 'center',
    marginBottom: 18,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.gold,
    letterSpacing: 1.2,
  },
  brandSubtitle: {
    marginTop: 6,
    fontSize: 12,
    color: '#d8d8d8',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  brandTitleMobile: {
    fontSize: 18,
    marginBottom: 8,
  },
  brandDescription: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: '#d8d8d8',
  },
  brandDescriptionMobile: {
    display: 'none',
  },
  formArea: {
    flex: 1.3,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formAreaMobile: {
    padding: 16,
    flex: 1,
  },
  card: {
    width: '100%',
    maxWidth: 540,
    backgroundColor: '#111111',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    paddingVertical: 28,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
  },
  cardMobile: {
    maxWidth: 420,
    paddingVertical: 22,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#bdbdbd',
    textAlign: 'center',
    marginBottom: 22,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 8,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.darkInput,
    color: colors.white,
    paddingLeft: 16,
    paddingRight: 46,
    fontSize: 15,
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
    top: 15,
    fontSize: 18,
    color: colors.gold,
  },
  eyeButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 20,
  },
  rememberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxChecked: {
    backgroundColor: colors.gold,
    borderColor: colors.gold,
  },
  checkmark: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 12,
  },
  rememberText: {
    fontSize: 14,
    color: '#d5d5d5',
  },
  forgotText: {
    fontSize: 14,
    color: colors.gold,
    fontWeight: '600',
  },
  submitButton: {
    width: '100%',
    height: 52,
    borderRadius: 10,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.goldDark,
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  submitButtonText: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '700',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#313131',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#9a9a9a',
    fontSize: 13,
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gold,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#7d7d7d',
    fontSize: 12,
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    zIndex: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#111111',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.45)',
    padding: 30,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 20,
  },
  modalClose: {
    position: 'absolute',
    right: 14,
    top: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseText: {
    color: '#aaaaaa',
    fontSize: 30,
    lineHeight: 30,
  },
  modalIcon: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.35)',
    backgroundColor: 'rgba(201,162,39,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  modalIconText: {
    color: colors.gold,
    fontSize: 26,
  },
  modalTitle: {
    textAlign: 'center',
    color: colors.gold,
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 6,
  },
  modalDescription: {
    textAlign: 'center',
    color: '#b6b6b6',
    fontSize: 15,
    marginBottom: 26,
  },
  optionGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  optionGridMobile: {
    flexDirection: 'column',
    gap: 12,
  },
  optionButton: {
    flex: 1,
    minHeight: 190,
    paddingVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonMobile: {
    minHeight: 150,
    width: '100%',
  },
  optionIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: 'rgba(201,162,39,0.25)',
    backgroundColor: 'rgba(201,162,39,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  optionIconText: {
    fontSize: 25,
    color: colors.gold,
  },
  optionTitle: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  optionDescription: {
    color: '#999999',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 18,
  },
});

export default Login;