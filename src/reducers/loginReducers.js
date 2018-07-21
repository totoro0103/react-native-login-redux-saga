import * as types from '../actions/types';
import appState from '../contants/initialState';

const loginReducer = (state = appState.login, action) => {
    switch (action.type) {
        case types.SET_USER_INFO:
            return { ...state, ...{ userInfo: action.data } }
        default:
            return state
    }
}
export default loginReducer