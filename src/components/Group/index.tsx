import { Text, Pressable } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";

type Props = PressableProps & {
    name: string;
    isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
    return (
        <Pressable
            mr={12}
            w={96}
            h={40}
            bg="$mygray600"
            rounded="$md"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            $active-borderColor={isActive ? "$mygreen500" : "transparent"}
            $active-borderWidth={isActive ? 1 : "$0"}
            {...rest}
        >
            <Text
                color={isActive ? "$mygreen500" : "$mygray200"}
                textTransform="uppercase"
                fontSize="$xs"
                fontWeight="$bold"
            >
                {name}
            </Text>
        </Pressable>
    );
}