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

const horarios = ['08:00', '08:30', '09:00', '09:30', '10:00', '11:00'];
const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

function Agendamento() {
  const navigation = useNavigation();
  const diasAtivos = useMemo(() => ['17', '18', '19', '20', '21', '22'], []);
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedBarbeiro, setSelectedBarbeiro] = useState('João');
  const [selectedService, setSelectedService] = useState('Corte');
  const [selectedHour, setSelectedHour] = useState('09:00');

  const handleConfirm = () => {
    Alert.alert(
      'Agendamento confirmado',
      `Serviço: ${selectedService}\nBarbeiro: ${selectedBarbeiro}\nData: ${diasAtivos[selectedDay]}/09/2026\nHorário: ${selectedHour}`
    );
    navigation.goBack();
  };

  const handleCancel = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Agendamento</Text>
          <Text style={styles.title}>Nova reserva</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Calendário</Text>
          <View style={styles.daysRow}>
            {dias.map((dia, index) => (
              <Pressable
                key={dia}
                onPress={() => setSelectedDay(index)}
                style={[styles.dayItem, index === selectedDay && styles.dayItemActive]}
              >
                <Text style={[styles.dayText, index === selectedDay && styles.dayTextActive]}>{dia}</Text>
                <Text style={[styles.dayNumber, index === selectedDay && styles.dayNumberActive]}>{diasAtivos[index]}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Barbeiro</Text>
          <View style={styles.optionList}>
            {['João', 'Carlos', 'Pedro'].map((nome) => (
              <Pressable
                key={nome}
                onPress={() => setSelectedBarbeiro(nome)}
                style={[styles.option, nome === selectedBarbeiro && styles.optionActive]}
              >
                <Text style={[styles.optionText, nome === selectedBarbeiro && styles.optionTextActive]}>{nome}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Serviço</Text>
          <View style={styles.optionList}>
            {['Corte', 'Barba', 'Corte + barba', 'Outros'].map((servico) => (
              <Pressable
                key={servico}
                onPress={() => setSelectedService(servico)}
                style={[styles.option, servico === selectedService && styles.optionActive]}
              >
                <Text style={[styles.optionText, servico === selectedService && styles.optionTextActive]}>{servico}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Horários disponíveis</Text>
          <View style={styles.timeGrid}>
            {horarios.map((hora) => (
              <Pressable
                key={hora}
                onPress={() => setSelectedHour(hora)}
                style={[styles.timePill, hora === selectedHour && styles.timePillActive]}
              >
                <Text style={[styles.timeText, hora === selectedHour && styles.timeTextActive]}>{hora}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Dados do cliente</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome</Text>
            <Text style={styles.infoValue}>João Silva</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Telefone</Text>
            <Text style={styles.infoValue}>(11) 98765-4321</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Confirmação</Text>
          <Text style={styles.confirmText}>Serviço: {selectedService}</Text>
          <Text style={styles.confirmText}>Barbeiro: {selectedBarbeiro}</Text>
          <Text style={styles.confirmText}>Data: {diasAtivos[selectedDay]}/09/2026</Text>
          <Text style={styles.confirmText}>Horário: {selectedHour}</Text>
          <Text style={styles.confirmText}>Valor: R$ 45,00</Text>

          <View style={styles.actionRow}>
            <Pressable style={styles.primaryButton} onPress={handleConfirm}>
              <Text style={styles.primaryButtonText}>Confirmar</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={handleCancel}>
              <Text style={styles.secondaryButtonText}>Cancelar</Text>
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
    borderRadius: 16,
    padding: 18,
  },
  sectionTitle: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  dayItem: {
    flex: 1,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#2b2b2b',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  dayItemActive: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderColor: palette.gold,
  },
  dayText: {
    color: palette.muted,
    fontSize: 12,
    marginBottom: 4,
  },
  dayTextActive: {
    color: palette.gold,
    fontWeight: '700',
  },
  dayNumber: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
  },
  dayNumberActive: {
    color: palette.gold,
  },
  optionList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2d2d2d',
    backgroundColor: '#171717',
  },
  optionActive: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderColor: palette.gold,
  },
  optionText: {
    color: palette.text,
    fontSize: 13,
    fontWeight: '600',
  },
  optionTextActive: {
    color: palette.gold,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timePill: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2d2d2d',
    backgroundColor: '#171717',
  },
  timePillActive: {
    backgroundColor: 'rgba(201,162,39,0.12)',
    borderColor: palette.gold,
  },
  timeText: {
    color: palette.text,
    fontSize: 13,
    fontWeight: '600',
  },
  timeTextActive: {
    color: palette.gold,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#232323',
  },
  infoLabel: {
    color: palette.muted,
    fontSize: 14,
  },
  infoValue: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '600',
  },
  confirmText: {
    color: palette.text,
    fontSize: 14,
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: palette.gold,
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: palette.gold,
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: palette.gold,
    fontWeight: '700',
    fontSize: 15,
  },
});

export default Agendamento;
