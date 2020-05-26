import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useTheme } from '../../Themes/hooks'

interface Props {

}

const Register = (props: Props) => {
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
            <Text>Register Page</Text>

        </SafeAreaView>
    );
}



export default Register;