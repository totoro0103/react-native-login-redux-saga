import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Input from '../commons/Input';

class Login extends Component {
    state = { email: '', password: '' }

    render() {
        return (
            <View style={styles.container} >
                <Input
                    placeholder='Email'
                    onChangeText={(value) => this.setState({ email: value })} />
                <Input
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
