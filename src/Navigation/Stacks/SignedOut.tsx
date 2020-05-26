import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/SignedOut/Login'
import Register from '../../Screens/SignedOut/Register'




const SignedOut = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}
export default SignedOut;