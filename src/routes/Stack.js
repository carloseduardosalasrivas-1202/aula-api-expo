import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../telas/Login';
import CadusuarioScreen from '../telas/Cadusuario';
import HomeScreen from '../telas/Home';
import RecSenhaScrean from '../telas/recSenha';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}

    >
      <Stack.Screen name="login"
       component={LoginScreen}
        options={{ title: 'login' }} />

      <Stack.Screen name="home"
       component={HomeScreen}
        options={{ title: 'Home' }} />

      <Stack.Screen name="cadUsu" 
      component={CadusuarioScreen}
        options={{ title: 'Cadatro de usuario ' }} />

      <Stack.Screen name="recsenha"
       component={RecSenhaScrean}
        options={{
          title: 'Recuperação de senha',
          headerStyle: {
            backgroundColor: '#0010f7',
          },
          headerTintColor: '#00fd0d',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

    </Stack.Navigator>
  );
}

export default RootStack;