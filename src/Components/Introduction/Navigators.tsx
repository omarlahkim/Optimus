import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useTheme } from '../../Themes/hooks'



interface Props {
    active: number
    pages: number
    Skip: any
    Back: any
    Continue: any
    Confirm: any
}
const Navigators = (props: Props) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        navigators: {

            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15

        }
    });

    return (
        <View style={styles.navigators}>
            {props.active > 0 ? (<Button onPress={props.Back} title="Back" />) : null}
            <Button onPress={props.Skip} title="Skip" />
            {props.active < props.pages - 1 ? (<Button onPress={props.Continue} title="Continue" />) : null}
            {props.active == props.pages - 1 ? (<Button onPress={props.Confirm} title="Confirm" />) : null}
        </View>

    );
}



export default Navigators;