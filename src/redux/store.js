
import { basketReducer } from './reducers/basketReducer';
import { productReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  basketReducer,
  productReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
