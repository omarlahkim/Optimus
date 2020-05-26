import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../../Themes/hooks';

interface Props {

}

const Settings = (props: Props) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text>Settings Page</Text>

        </SafeAreaView>
    );
}


export default Settings;