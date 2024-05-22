import { createBottomTabNavigator, BottomTabNavigationProp, } from '@react-navigation/bottom-tabs';

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
    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#00B37E',
            tabBarInactiveTintColor: '#C4C4CC',
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
            />
        </Navigator>
    );
}