import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as apis from '../services/apis';
import * as loginActions from '../actions/loginActions';
import NavigationService from '../navigation/NavigationService';

export function* login(action) {
    try {
        const data = yield call(apis.login, action.params)
        yield put(loginActions.loginSuccess(data.data))
        NavigationService.reset('tabNavigator');

    } catch (error) {
        yield put(loginActions.loginFailed())
    }
}

export function* watchLogin() {
    yield takeLatest(types.LOGIN, login)
}