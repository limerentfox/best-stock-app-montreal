import * as actions from '../const/actions';
import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBarReducer';
import CompanyOverviewReducer from './CompanyOverviewReducer';
import FavoritesReducer from './FavoritesReducer';
import GraphReducer from './GraphReducer';
import KeyStatsReducer from './KeyStatsReducer';
import LatestNewsReducer from './LatestNewsReducer';
import MarketReducer from './MarketReducer';
import TopPeersReducer from './TopPeersReducer';


const RootReducer = combineReducers({
    SearchBarReducer,
    CompanyOverviewReducer,
    FavoritesReducer,
    GraphReducer,
    KeyStatsReducer,
    LatestNewsReducer,
    MarketReducer,
    TopPeersReducer
})

export default RootReducer;