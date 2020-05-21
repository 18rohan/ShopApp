import {PRODUCTS} from '../../data/dummy_data';
import {DELETE_PRODUCT} from '../actions/products';

const initialState = {
    availableProducts:PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'own7'),

};

const productReducers = (state = initialState, action) => {
	switch(action.type){
		case DELETE_PRODUCT:
			return {
				userProducts:state.userProducts.filter(
					product => product.id !== action.pid
					),
				availableProducts:state.availableProducts.filter(
					product => product.id !== action.pid
					),
			};
	}
    return state;
};

export default productReducers;