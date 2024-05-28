import { Text } from "@gluestack-ui/themed";

type Props = {
    name: string;
}

export function Group({ name }: Props) {
    return (
        <Text
            color="$mygray200"
            textTransform="uppercase"
            fontSize="$xs"
            fontWeight="$bold"
        >
            {name}
        </Text>
    );
}