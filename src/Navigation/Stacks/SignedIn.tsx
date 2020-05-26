import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/SignedIn/Home'
import Settings from '../../Screens/SignedIn/Settings'
import { useTheme } from '../../Themes/hooks'


const SignedIn = () => {
    const Tab = createBottomTabNavigator();
    const { colors } = useTheme()


    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle: { backgroundColor: colors.tabBar, },
            style: { backgroundColor: colors.tabBar },
            safeAreaInsets: { bottom: 25, top: 0 },
        }} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator >
    );
}



export default SignedIn;