import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';

export default createStore(
    reducers,
    applyMiddleware(thunk)
);