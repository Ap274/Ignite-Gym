import { TouchableOpacity } from "react-native";
import { HStack, VStack, Text, Heading, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserPhoto } from "@components/UserPhoto";

export function HomeHeader() {
    return (
        <HStack bg="$mygray600" pt={54} pb={20} px={32} alignItems="center">
            <UserPhoto 
                source={{ uri: 'https://github.com/Ap274.png' }}
                alt="Imagem do usuário"
                size={64}
                style={{ marginRight: 16 }}
            />

            <VStack flex={1}>
                <Text color="$mygray100" fontSize="$md">
                    Hello,
                </Text>

                <Heading color="$mygray100" fontSize="$md">
                    Aldo
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon 
                    as={LogOut}
                    color="$mygray200"
                    size="xl"
                />
            </TouchableOpacity>
        </HStack>
    )
}