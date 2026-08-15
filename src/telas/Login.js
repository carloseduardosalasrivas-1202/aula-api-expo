import { View,Text, Pressable } from "react-native";
import { Button } from '@react-navigation/elements';
import { Link } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
function login() {

const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
       <Button screen="home">Acessar o App</Button>
        <Link screen="cadUsu">Cadatro de usuario</Link>
        <Pressable onPress={() => navigation.navigate('recsenha')}>
          <Text>Recuperação de senha </Text>
        </Pressable>
    </View>
  );
}

export default login