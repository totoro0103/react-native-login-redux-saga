import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { clearToken } from '../../utils/storage';
import { NavigationActions, StackActions } from 'react-navigation';


class HomeContainer extends Component {
    logout = () => {
        clearToken()
        const { navigation } = this.props;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'login' }),
            ],
        });
        navigation.dispatch(resetAction);
    }
    render() {
        const { userInfo } = this.props.data
        console.log(userInfo)
        return (
            <View style={styles.container}>
                <Button title="LogOut" onPress={() => this.logout()} />
                <Text>{userInfo.name}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    data: {
        userInfo: state.login.userInfo
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})

export default connect(mapStateToProps, null)(HomeContainer)