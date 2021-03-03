import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//routes
import routeReducer from './reducers/index';

let composeEnhancers = compose;

// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

const store = createStore(
    routeReducer,
    composeEnhancers(applyMiddleware( thunk)),
);

export default store;