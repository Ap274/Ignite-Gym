import { Input as GluestackInput, InputField} from '@gluestack-ui/themed'

type Props = {
    message: string;
}

export function Input({message}: Props) {
    return ( 
        <GluestackInput
            variant="outline"
            size="md"
            bg="$mygray700"
            px={16}
            borderWidth={0}
            mb={10}
            h={56}
            mx={8}
            $focus-bg='$mygray700'
            $focus-borderWidth={1}
            $focus-borderColor='$mygreen500'
        >
            <InputField 
                placeholder={message}
                fontSize="$md"
                color='$white' 
                fontFamily='$body'
                placeholderTextColor="$mygray300"
            />
        </GluestackInput>
    )
}