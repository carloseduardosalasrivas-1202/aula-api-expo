import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClienteHome from '../telas/ClienteHome';
import ClienteServicos from '../telas/ClienteServicos';
import ClientePerfil from '../telas/ClientePerfil';

const Tab = createBottomTabNavigator();

function UserTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopColor: 'rgba(201,162,39,0.3)',
          borderTopWidth: 1,
          height: 68,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
        tabBarActiveTintColor: '#c9a227',
        tabBarInactiveTintColor: '#8b8b8b',
      }}
    >
      <Tab.Screen name="Inicio" component={ClienteHome} />
      <Tab.Screen name="Serviços" component={ClienteServicos} />
      <Tab.Screen name="Perfil" component={ClientePerfil} />
    </Tab.Navigator>
  );
}

export default UserTabNavigator;
