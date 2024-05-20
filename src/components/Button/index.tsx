import { Button as ButtonGluestack, ButtonText } from '@gluestack-ui/themed'

type Props = {
    title: string;
}

export function Button({title}: Props) { 
    return (
        <ButtonGluestack
            width="$full"
            h={56}
            rounded="$sm"
            bg="$mygreen500"
            $active-bg="$mygreen700"
            isDisabled={false}
            isFocusVisible={false}
        >
            <ButtonText
                color="$white" 
                fontFamily="$heading" 
                fontSize="$sm"
            >
                {title}
            </ButtonText>
        </ButtonGluestack>
    )
}