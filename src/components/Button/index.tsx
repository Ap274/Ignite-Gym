import { Button as ButtonGluestack, ButtonText } from '@gluestack-ui/themed'

type Props = {
    title: string;
    variant?: 'solid' | 'outline';
    onPress?: () => void;
}

export function Button({title, variant = 'solid', onPress}: Props) { 
    const isOutline = variant === 'outline';

    return (
        <ButtonGluestack
            width="$full"
            h={56}
            rounded="$sm"
            bg={isOutline ? "transparent" : "$mygreen500"}
            borderColor={isOutline ? "$mygreen500" : "transparent"}
            borderWidth={isOutline ? 1 : 0}
            $active-bg={isOutline ? "$mygray500" : "$mygreen700"}
            isDisabled={false}
            isFocusVisible={false}
            onPress={onPress}
        >
            <ButtonText
                color={variant === 'outline' ? '$mygreen500' : "$white"} 
                fontFamily="$heading" 
                fontSize="$sm"
            >
                {title}
            </ButtonText>
        </ButtonGluestack>
    )
}