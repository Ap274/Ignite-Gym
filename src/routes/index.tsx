import { Box } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    return (
        <Box flex={1} bg="$trueGray800">
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </Box>
    )
}