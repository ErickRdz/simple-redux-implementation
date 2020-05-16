import {combineReducers} from 'redux';
import customerReducer from '../../feature/customers/customerReducer';

const rootReducer = combineReducers({
    customers: customerReducer
});

export default rootReducer;