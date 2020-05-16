import {SAVE_CUSTOMER_ID} from './customerConstants';

export const saveCustomerId = (customerId) => {
    return {
        type: SAVE_CUSTOMER_ID,
        payload: {
            customerId
        }
    }
}