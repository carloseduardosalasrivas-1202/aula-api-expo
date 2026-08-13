import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from '../telas/Login';
import CadusuarioScreen from '../telas/Cadusuario';
import HomeScreen from '../telas/Home';
import recSenhaScrean from '../telas/recSenha';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
     initialRouteName="Login"
  screenOptions={{
    headerStyle: { backgroundColor: 'tomato' },
  }}
    
    >
      <Stack.Screen name="login" component={loginScreen} 
       options={{ title: 'Login' }} />
       <Stack.Screen name="Home" component={HomeScreen}
        options={{ title: 'Home' }} />
        <Stack.Screen name="cadUsu" component={CadusuarioScreen}
         options={{ title: 'Cadatro de usuario ' }} />
          <Stack.Screen name="recsenha" component={recSenhaScrean}
         options={{ title: 'Recuperação de senha' }} />
    </Stack.Navigator>
  );
}

export default RootStack;