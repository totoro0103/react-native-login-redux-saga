import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import TMSTextInput from '../commons/TMSTextInput';

class Login extends Component {
    state = { email: '', password: '' }

    render() {
        return (
            <View style={styles.container} >
                <TMSTextInput
                    placeholder='Email'
                    onChangeText={(value) => this.setState({ email: value })} />
                <TMSTextInput
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(value) => this.setState({ password: value })} />
                <Button
                    style={styles.buttonLogin} title='Login'
                    onPress={() => this.props.login({ email: this.state.email, password: this.state.password })} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonLogin: {
        marginTop: 50,
    }
})

export default Login;
