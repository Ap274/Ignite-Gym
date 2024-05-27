import { Platform } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationProp, } from '@react-navigation/bottom-tabs';
import { config } from '../../config/gluestack-ui.config';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { colors } = config.tokens;

    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.mygreen500,
            tabBarInactiveTintColor: colors.mygray200,
            tabBarStyle: {
                backgroundColor: colors.mygray600,
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: 30,
                paddingTop: 24,
            }
        }}>
            <Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={24} height={24}/>
                    )
                }}
            />

            <Screen 
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={24} height={24}/>
                    )
                }}
            />

            <Screen 
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={24} height={24}/>
                    )
                }}
            />

            <Screen 
                name="exercise"
                component={Exercise}
                options={{ tabBarButton: () => null}}
            />
        </Navigator>
    );
}