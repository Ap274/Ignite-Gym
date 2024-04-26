import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Text, View } from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202024'}}>
        { fontsLoaded ? <Text>Hello World!!</Text> : <View />}
      </View>
    </GluestackUIProvider>
  );
}
