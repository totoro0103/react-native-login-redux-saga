import React, { Component } from 'react';
import Login from '../../components/login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/loginActions';
import { validate } from '../../utils/validation';
import { saveToken } from '../../utils/storage';
import { NavigationActions, StackActions } from 'react-navigation';

class LoginContainer extends Component {

    state = { isLoading: false }
    onSuccess = (data) => {
        this.setState({ isLoading: false })
        if (data.token && data.token.length > 0) {
            saveToken(data.token).then((isSuccess) => {
                if (isSuccess) {
                    const { navigation } = this.props;
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'home' }),
                        ],
                    });
                    navigation.dispatch(resetAction);
                }
            });
        }
    }
    onError = (error) => {
        this.setState({ isLoading: false })
        console.log(error)

    }
    login = (params) => {
        this.setState({ isLoading: true })
        const emailValidation = validate('email', params.email.trim())
        const passwordValidation = validate('password', params.password.trim())

        // if (emailValidation.isError) {
        //     alert(emailValidation.messageError)
        // } else if (passwordValidation.isError) {
        //     alert(emailValidation.messageError)
        // } else {
        //     this.props.actions.login.login(params, this.onSuccess(), this.onError())
        // }
        this.props.actions.login.login({ email: 'hoangpt@hblab.vn', password: 'thehoang' }, this.onSuccess, this.onError)
    }
    render() {
        return (
            <Login
                login={this.login}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            login: bindActionCreators(loginActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
