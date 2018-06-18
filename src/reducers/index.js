import { combineReducers } from 'redux';
import loginReducers from '../reducers/loginReducers';

const allReducers = combineReducers({
    login: loginReducers
})
export default allReducers