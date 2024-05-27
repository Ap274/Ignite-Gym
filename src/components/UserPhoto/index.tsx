import { Image } from "@gluestack-ui/themed"
import { ImageProps } from "react-native"

type Props = ImageProps & {
    size: number;
}

export function UserPhoto({ size, ...rest }: Props) {
    return (
        <Image 
            w={size}
            h={size}
            rounded="$full"
            borderWidth={2}
            borderColor="$mygray400"
            {...rest}
        />
    )
}