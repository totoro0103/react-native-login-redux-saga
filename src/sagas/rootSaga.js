import { all } from 'redux-saga/effects';
import { watchLogin,watchFetchUserInfo } from '../sagas/loginSagas';
function* rootSaga() {
    yield all([
        watchLogin(),
        watchFetchUserInfo()
    ])
}
export default rootSaga