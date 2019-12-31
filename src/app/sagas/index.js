import { all, fork } from 'redux-saga/effects';

import myCompApiSaga from 'app/containers/myComApi/saga';
import languageSaga from 'app/containers/LanguageProvider/saga';

export default function* rootSaga() {
    yield all([fork(myCompApiSaga), fork(languageSaga)]);
}
