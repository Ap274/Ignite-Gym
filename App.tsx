import { GluestackUIProvider, Text, View } from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { config } from './config/gluestack-ui.config';

import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

     { fontsLoaded ? <SignUp/> : <Loading />}
    </GluestackUIProvider>
  );
}
