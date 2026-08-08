import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from '../telas/Login';
import CadusuarioScreen from '../telas/Cadusuario';
import HomeScreen from '../telas/Home';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={loginScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadusu" component={CadusuarioScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;