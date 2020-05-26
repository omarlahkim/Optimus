import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../../Themes/hooks';

interface Props {

}

const Home = (props: Props) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return (
        <SafeAreaView style={styles.container} >

            <Text>Home Page</Text>

        </SafeAreaView>
    );
}



export default Home;