import { HStack, VStack, Text, Heading } from "@gluestack-ui/themed";

import { UserPhoto } from "@components/UserPhoto";

export function HomeHeader() {
    return (
        <HStack bg="$mygray600" pt={64} pb={20} px={32} alignItems="center">
            <UserPhoto 
                source={{ uri: 'https://github.com/Ap274.png' }}
                alt="Imagem do usuário"
                size={64}
                style={{ marginRight: 16 }}
            />

            <VStack>
                <Text color="$mygray100" fontSize="$md">
                    Hello,
                </Text>

                <Heading color="$mygray100" fontSize="$md">
                    Aldo
                </Heading>
            </VStack>
        </HStack>
    )
}