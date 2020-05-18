import {PRODUCTS} from '../../data/dummy_data';

const initialState = {
    availableProducts:PRODUCTS,
    userProducts: PRODUCTS,
};

const productReducers = (state = initialState, action) => {
    return state;
};

export default productReducers;