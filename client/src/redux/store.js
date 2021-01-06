import { createStore } from 'redux';

const initialState = {};

const storeReducer = function(initialState) {return initialState;}

const store = createStore(
    storeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;