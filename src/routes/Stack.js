import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../telas/Login';
import CadusuarioScreen from '../telas/Cadusuario';
import HomeScreen from '../telas/Home';
import RecSenhaScrean from '../telas/recSenha';
import AgendamentoScreen from '../telas/Agendamento';
import ClientesScreen from '../telas/Clientes';
import CadastroClienteScreen from '../telas/CadastroCliente';
import BarbeirosScreen from '../telas/Barbeiros';
import NovoBarbeiroScreen from '../telas/NovoBarbeiro';
import ProdutosScreen from '../telas/Produtos';
import NovoProdutoScreen from '../telas/NovoProduto';
import FinanceiroScreen from '../telas/Financeiro';
import ConfiguracoesScreen from '../telas/Configuracoes';
import PerfilScreen from '../telas/Perfil';
import ItemScreen from '../telas/Item';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0b0b0b' },
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="cadUsu" component={CadusuarioScreen} />
      <Stack.Screen name="recsenha" component={RecSenhaScrean} />
      <Stack.Screen name="agendamento" component={AgendamentoScreen} />
      <Stack.Screen name="clientes" component={ClientesScreen} />
      <Stack.Screen name="cadastroCliente" component={CadastroClienteScreen} />
      <Stack.Screen name="barbeiros" component={BarbeirosScreen} />
      <Stack.Screen name="novoBarbeiro" component={NovoBarbeiroScreen} />
      <Stack.Screen name="produtos" component={ProdutosScreen} />
      <Stack.Screen name="novoProduto" component={NovoProdutoScreen} />
      <Stack.Screen name="financeiro" component={FinanceiroScreen} />
      <Stack.Screen name="configuracoes" component={ConfiguracoesScreen} />
      <Stack.Screen name="perfil" component={PerfilScreen} />
      <Stack.Screen name="servicos" component={ItemScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;