import { View,Text, Pressable } from "react-native";
import { Button } from '@react-navigation/elements';
import { Link } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
function login() {

const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
       <Button screen="login">Acessar o App</Button>
        <Link screen="cadUsu">Cadatro de usuario</Link>
        <Pressable onPress={() => navigation.navigate('recSenha')}>
          <text>Recuperação de senha </text>
        </Pressable>
    </View>
  );
}

export default login