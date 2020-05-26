import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../Themes/hooks'



interface Props {
    active: number
}
const Content = (props: Props) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: colors.headingText,
            fontSize: 20,
            fontWeight: '600'
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Page {props.active + 1}</Text>


        </View>
    );
}



export default Content;