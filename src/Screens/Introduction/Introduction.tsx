import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Button, Text } from 'react-native';
import { useTheme } from '../../Themes/hooks';
import Indicators from '../../Components/Introduction/Indicators';
import Content from '../../Components/Introduction/Content';
import Navigators from '../../Components/Introduction/Navigators';
import { InterstitialAd, RewardedAd, BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

interface Props {
    navigation: any

}
const Introduction = (props: Props) => {
    //styling
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        text: {
            fontFamily: 'Lato-Black'
        }

    });
    //state
    const [active, setActive] = useState(0);
    const [pages, setPages] = useState(3)


    return (
        <SafeAreaView style={styles.container}>
            <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
            <Content active={active} />

            <Navigators Skip={() => { }} Confirm={() => { }} Back={() => { setActive(prev => (prev - 1) % pages) }} Continue={() => { setActive(prev => (prev + 1) % pages) }} pages={pages} active={active} />
            <Indicators pages={pages} active={active} />
        </SafeAreaView>
    );
}


export default Introduction;