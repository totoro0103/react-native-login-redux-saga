import { combineReducers } from 'redux';
import loginReducers from './loginReducers';

const allReducers = combineReducers({
    login: loginReducers
})
export default allReducers