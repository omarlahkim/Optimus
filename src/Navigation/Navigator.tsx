
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { authContext } from '../App';
import SignedIn from './Stacks/SignedIn';
import SignedOut from './Stacks/SignedOut';
import Introduction from '../Screens/Introduction/Introduction';
import AsyncStorage from '@react-native-community/async-storage';




const Navigator = () => {
    //Context
    const [auth, setAuth] = useContext(authContext);
    //---------------------------------------------
    //Functions
    //Get Data from Async Storage
    const getFromAsyncStorage = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {
                return true
            }
            else {
                return false
            }
        } catch (e) {
            // error reading value
        }
    }
    //Check if first time using app
    const checkFirstTime = async () => {
        if (await getFromAsyncStorage('first_time') == true) {
            await setAuth((prev: any) => { return { ...prev, isFirstTime: false } })
        }
    };
    //---------------------------------------------
    // Login Function
    const updateAuthUser = async (token: string, id: string) => {
        await setAuth((prev: any) => { return { ...prev, token, id } })
    };
    //---------------------------------------------
    //Security Checking functions
    const checkToken = async () => {
        //Check token here
        return true;
    }
    const CheckAuthentication = async () => {
        if (await checkToken()) {
            await setAuth((prev: any) => { return { ...prev, isAuthenticated: false } })
        }
    };
    //---------------------------------------------
    //ComponentDidMount
    useEffect(() => {
        checkFirstTime();
        CheckAuthentication();
    }, [])

    return (
        <NavigationContainer>
            {
                auth.isAuthenticated == false ?
                    auth.isFirstTime == true ?
                        <Introduction />
                        :
                        <SignedOut />
                    :
                    <SignedIn />
            }
        </NavigationContainer>
    );
};

export default Navigator;
