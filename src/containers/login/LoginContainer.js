import React, { Component } from 'react';
import Login from '../../components/login/Login';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import { validate } from '../../utils/validation';

class LoginContainer extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    static navigationOptions = {
        header: null
    }
    login = (params) => {
        const emailValidation = validate('email', params.email.trim())
        const passwordValidation = validate('password', params.password.trim())

        if (emailValidation.isError) {
            alert(emailValidation.messageError)
        } else if (passwordValidation.isError) {
            alert(emailValidation.messageError)
        } else {
            this.props.login(params)
        }
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
    console.log(state)
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (params) => {
            dispatch(loginActions.login(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
