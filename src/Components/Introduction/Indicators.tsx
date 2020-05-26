import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useTheme } from '../../Themes/hooks'
import Indicator from './Indicator'
import _ from 'lodash';

interface Props {
    active: number
    pages: number

}
const Indicators = (props: Props) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        indicators: {

            flexDirection: 'row',
            margin: 10,
            alignSelf: 'center'

        }
    });
    const pages = _.range(props.pages);
    return (
        <View style={styles.indicators}>
            {pages.map((page: number) => (
                <Indicator key={page} page={page} active={props.active} />
            ))}

        </View>
    );
}



export default Indicators;