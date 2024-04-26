import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Text, View } from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Loading />
    </GluestackUIProvider>
  );
}
