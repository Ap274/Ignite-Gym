import { useNavigation } from '@react-navigation/native'
import { VStack, ImageBackground, Text, Center, Heading, ScrollView, SafeAreaView } from '@gluestack-ui/themed'

import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from "@assets/background.png"

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount() {
        navigation.navigate('signUp');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1F2937' }}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} bounces={false}>
                <VStack flex={1} bg="$trueGray800" pb={64}>
                    <ImageBackground 
                        source={BackgroundImg}
                        defaultSource={BackgroundImg}
                        alt="Pessoas treinando"
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='stretch'
                        position='absolute'
                        />

                    <Center my={96}>
                        <LogoSvg />

                        <Text color="$mygray100" fontSize="$sm">
                            Treine sua mente e o seu corpo    
                        </Text>        
                    </Center>

                    <Center px={28}>
                        <Heading color="$mygray100" fontSize="$xl" mb={24} fontFamily="$heading">
                            Acesse sua conta
                        </Heading>

                        <Input 
                            message="E-mail"
                            />
                        <Input 
                            message="Senha"
                        />

                        <Button 
                            title="Acessar"
                            />
                    </Center>

                    <Center px={28} mt={96}>
                        <Text color="$mygray100" fontSize="$sm" mb={12} fontFamily='$body'>
                            Ainda não tem acesso?
                        </Text>
                        <Button 
                            title="Criar Conta"
                            variant='outline'
                            onPress={handleNewAccount}
                        />
                    </Center>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
