// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducerMyComApi from 'app/containers/myComApi/reducer';
import reducerLanguage from 'app/containers/LanguageProvider/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    reducerLanguage,
    reducerMyComApi,
});

export default rootReducer;
