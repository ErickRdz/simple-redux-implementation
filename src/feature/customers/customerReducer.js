import {SAVE_CUSTOMER_ID} from './customerConstants';

const initialState = {
    customerId: 0
};

const customerReducer = (state = initialState, action) => {

    if(action.type === SAVE_CUSTOMER_ID){
        return {
            ...state, customerId: action.payload.customerId
        }
    }
    else{
        return {
            ...state
        }
    }
    
}



export default customerReducer;