import { Text, Pressable } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";

type Props = PressableProps & {
    name: string;
}

export function Group({ name, ...rest }: Props) {
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
            {...rest}
        >
            <Text
                color="$mygray200"
                textTransform="uppercase"
                fontSize="$xs"
                fontWeight="$bold"
            >
                {name}
            </Text>
        </Pressable>
    );
}