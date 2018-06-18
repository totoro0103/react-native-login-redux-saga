import * as types from '../actions/types';
import appState from '../contants/initialState';

const loginReducer = (state = appState.login, action) => {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, ...{ isLoading: action.isLoading, error: action.isError } }
        case types.LOGIN_SUCCESS:
            return { ...state, ...{ isLoading: action.isLoading, error: action.isError, userInfo: action.userInfo } }
        case types.LOGIN_FAILED:
            return { ...state, ...{ isLoading: action.isLoading, error: action.isError } }
        default:
            return state
    }
}
export default loginReducer