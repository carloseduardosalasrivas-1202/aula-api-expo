import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native';

const palette = {
  bg: '#0b0b0b',
  card: '#111111',
  gold: '#c9a227',
  white: '#f5f5f5',
  text: '#d8d8d8',
  muted: '#8b8b8b',
  border: '#2b2b2b',
};

const agenda = [
  { dia: 'Hoje', horario: '09:00', servico: 'Corte + barba', barbeiro: 'João' },
  { dia: 'Quinta', horario: '14:30', servico: 'Barba completa', barbeiro: 'Carlos' },
];

function ClienteAgendamentos() {
  const [selectedService, setSelectedService] = useState('Corte clássico');
  const [selectedHour, setSelectedHour] = useState('10:00');

  const handleNewBooking = () => {
    Alert.alert('Agendamento realizado', `Seu serviço ${selectedService} foi agendado para ${selectedHour}.`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Agenda</Text>
          <Text style={styles.title}>Seus compromissos</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Próximos</Text>
          {agenda.map((item, index) => (
            <View key={index} style={styles.bookingItem}>
              <View>
                <Text style={styles.bookingDay}>{item.dia}</Text>
                <Text style={styles.bookingTitle}>{item.servico}</Text>
              </View>
              <View style={styles.bookingInfo}>
                <Text style={styles.bookingMeta}>{item.horario}</Text>
                <Text style={styles.bookingMeta}>{item.barbeiro}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Agendar novo serviço</Text>

          <Text style={styles.label}>Serviço</Text>
          <View style={styles.optionList}>
            {['Corte clássico', 'Barba completa', 'Corte + barba', 'Hidratação'].map((item) => (
              <Pressable
                key={item}
                onPress={() => setSelectedService(item)}
                style={[styles.option, selectedService === item && styles.optionActive]}
              >
                <Text style={[styles.optionText, selectedService === item && styles.optionTextActive]}>{item}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.label}>Horário</Text>
          <View style={styles.optionList}>
            {['09:00', '10:00', '11:00', '14:30'].map((time) => (
              <Pressable
                key={time}
                onPress={() => setSelectedHour(time)}
                style={[styles.option, selectedHour === time && styles.optionActive]}
              >
                <Text style={[styles.optionText, selectedHour === time && styles.optionTextActive]}>{time}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.primaryButton} onPress={handleNewBooking}>
            <Text style={styles.primaryButtonText}>Confirmar agendamento</Text>
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
    paddingTop: 24,
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
    marginBottom: 8,
  },
  title: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
  },
  sectionCard: {
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 18,
    padding: 18,
  },
  sectionTitle: {
    color: palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  bookingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
    paddingVertical: 12,
  },
  bookingDay: {
    color: palette.gold,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  bookingTitle: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '600',
  },
  bookingInfo: {
    alignItems: 'flex-end',
  },
  bookingMeta: {
    color: palette.text,
    fontSize: 12,
    marginBottom: 2,
  },
  label: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  optionList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2f2f2f',
    backgroundColor: '#171717',
  },
  optionActive: {
    borderColor: palette.gold,
    backgroundColor: 'rgba(201,162,39,0.12)',
  },
  optionText: {
    color: palette.text,
    fontSize: 13,
    fontWeight: '600',
  },
  optionTextActive: {
    color: palette.gold,
  },
  primaryButton: {
    backgroundColor: palette.gold,
    borderRadius: 12,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#111111',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ClienteAgendamentos;
