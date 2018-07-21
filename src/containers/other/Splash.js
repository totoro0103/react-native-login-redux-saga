import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getToken, clearToken } from '../../utils/storage';
import * as loginActions from '../../actions/loginActions';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.checkSignInStatus();
        }, 500);
    }

    onSuccess = (data) => {
        const { navigation } = this.props;
        let routeName = 'login';
        if (data) {
            routeName = 'home';
        }
        setTimeout(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName }),
                ],
            });
            navigation.dispatch(resetAction);
        }, 300);
    }

    onError = (error) => {
        try {
            clearToken();
            const { navigation } = this.props;
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'login' }),
                ],
            });
            navigation.dispatch(resetAction);
        } catch (e) {
            this.setState({});
        }
    }

    checkSignInStatus() {
        getToken().then((token) => {
            if (token && token.length > 0) {
                this.props.actions.user.fetchUserInfo(this.onSuccess, this.onError)
            } else {
                const { navigation } = this.props;
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'login' }),
                    ],
                });
                navigation.dispatch(resetAction);
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>SPLASH SCREEN</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        user: bindActionCreators(loginActions, dispatch)
    }
})
export default connect(null, mapDispatchToProps)(Splash)


