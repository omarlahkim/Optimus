import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require("./Languages/en.json"),
};

export const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
);


export const setI18nConfig = () => {
    // fallback if no available language fits
    const fallback = { languageTag: "fr", isRTL: false };

    const { languageTag, isRTL } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
        fallback;

    // clear translation cache
    translate.cache.clear();
    // update layout direction
    if (I18nManager.isRTL != isRTL) {
        I18nManager.forceRTL(isRTL);
        // Immediately reload the React Native Bundle
        RNRestart.Restart();

    }

    // set i18n-js config
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};

