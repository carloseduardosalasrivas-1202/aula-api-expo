import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../telas/Home';
import PerfilScreen from '../telas/Perfil';
import ItemScreen from '../telas/Item';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopColor: 'rgba(201,162,39,0.3)',
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#c9a227',
        tabBarInactiveTintColor: '#8b8b8b',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Serviços" component={ItemScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;