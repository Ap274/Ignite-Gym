import { Box } from "@gluestack-ui/themed";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { config } from '../../config/gluestack-ui.config';

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { colors } = config.tokens;

    const theme = DefaultTheme;
    theme.colors.background = colors.mygray700

    return (
        <Box flex={1} bg="$trueGray800">
            <NavigationContainer theme={theme}>
                <AppRoutes />
            </NavigationContainer>
        </Box>
    )
}