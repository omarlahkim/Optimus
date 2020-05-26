import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../../Themes/hooks'
import { translate } from '../../Services/Translation/translation'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
interface Props {

}

const Login = (props: Props) => {
    //Component Did Mount
    useEffect(() => {
    }, [])
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',

        },
        text: {
            fontFamily: 'Lato-Black'
        }

    });
    return (
        <SafeAreaView style={styles.container}>
            <Icon name='user' size={19} color='red' />
            <Text style={styles.text}>{translate('test')}</Text>
        </SafeAreaView>
    );
}
export default Login;