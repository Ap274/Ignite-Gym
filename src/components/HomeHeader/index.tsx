import { HStack, VStack, Text, Heading } from "@gluestack-ui/themed";

export function HomeHeader() {
    return (
        <HStack bg="$mygray600" pt={64} pb={20} px={32} alignItems="center">
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