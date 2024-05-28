import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack } from "@gluestack-ui/themed";

export function Home() {
    return (
        <VStack flex={1}>
            <HomeHeader />

            <HStack>
                <Group name="costas" />
                <Group name="peito" />
                <Group name="pernas"/>
            </HStack>
        </VStack>
    )
}