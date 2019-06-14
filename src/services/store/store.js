import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../../reducers/RootReducer';
import testApi from '../../middleware/testApi';

const Store = createStore(RootReducer, applyMiddleware(testApi));

export default Store;