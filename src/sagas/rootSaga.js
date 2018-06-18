import { all } from 'redux-saga/effects';
import { watchLogin } from '../sagas/loginSagas';
function* rootSaga() {
    yield all([
        watchLogin()
    ])
}
export default rootSaga