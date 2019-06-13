import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/reducers';
import testApi from './middleware/testApi';

const Store = createStore(Reducer, applyMiddleware(testApi));

export default Store;