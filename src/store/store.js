import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/rootReducer';
import thunk from '../middleware/notThunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
