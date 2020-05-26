import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { useTheme } from '../../Themes/hooks'

interface Props {
    page: number
    active: number
}
const Indicators = (props: Props) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({

        indicator: {
            width: 12,
            height: 12,
            borderRadius: 6,
            margin: 10,
            backgroundColor: props.page == props.active ? colors.indicatorActive : 'transparent',
            borderColor: props.page == props.active ? 'transparent' : colors.indicatorActive,
            borderWidth: 2
        }
    });


    return (
        <View style={styles.indicator} />
    );
}



export default Indicators;