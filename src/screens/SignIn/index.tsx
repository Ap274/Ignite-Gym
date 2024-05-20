import { VStack, ImageBackground, Text, Center, Heading } from '@gluestack-ui/themed'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from "@assets/background.png"

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
    return (
        <VStack flex={1} bg="$trueGray800">
            <ImageBackground 
                source={BackgroundImg}
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
        </VStack>
    )
}
