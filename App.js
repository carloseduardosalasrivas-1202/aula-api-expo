import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootStack from './src/routes/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

