import 'react-native-gesture-handler';
import React, { createContext, useState, useEffect } from 'react';
import Navigator from './Navigation/Navigator';
import { setI18nConfig } from './Services/Translation/translation';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

export const authContext = createContext(null);

const App = () => {
    const [auth, setAuth] = useState({
        token: "",
        id: "",
        isAuthenticated: false,
        isFirstTime: true
    });
    useEffect(() => {
        setI18nConfig();
        admob()
            .setRequestConfiguration({
                // Update all future requests suitable for parental guidance
                maxAdContentRating: MaxAdContentRating.PG,

                // Indicates that you want your content treated as child-directed for purposes of COPPA.
                tagForChildDirectedTreatment: true,

                // Indicates that you want the ad request to be handled in a
                // manner suitable for users under the age of consent.
                tagForUnderAgeOfConsent: true,
            })
            .then(() => {
                // Request config successfully set!
            });
    }, [])
    return (
        <authContext.Provider value={[auth, setAuth]}>
            <Navigator />
        </authContext.Provider>
    );
};

export default App;
