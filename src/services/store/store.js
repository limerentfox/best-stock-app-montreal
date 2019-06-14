import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../../reducers/RootReducer';
import INITIALIZED_DEDUCER from '../../middleware/custom-deducer';

const Store = createStore(RootReducer, applyMiddleware(INITIALIZED_DEDUCER));
console.log(Store.getState());

export default Store;