import { VStack, ImageBackground, Text, Center } from '@gluestack-ui/themed'
import LogoSvg from '@assets/logo.svg'
import BackgroundImg from "@assets/background.png"

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
        </VStack>
    )
}
