import { Spinner, Center } from '@gluestack-ui/themed';

export function Loading() {
    return (
        <Center flex={1} bg='$mygray700'> 
            <Spinner size="large" color="$mygreen500"/>
        </Center>
    );
}