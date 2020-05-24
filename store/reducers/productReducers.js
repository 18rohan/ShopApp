import { PRODUCTS } from "../../data/dummy_data";
import {
	DELETE_PRODUCT,
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
} from "../actions/products";

import Product from '../../models/products';

const initialState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((product) => product.ownerId === "own7"),
};

const productReducers = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PRODUCT:
			const newProduct = new Product(
				new Date().toString(),
				'c4',
				"u1",
				
				action.productData.name,
				action.productData.price,

				action.productData.description,
				action.productData.imageurl,
			);
			return {
				...state,
				availableProducts: state.availableProducts.concat(newProduct),
				userProducts: state.userProducts.concat(newProduct),

			};

			
		case UPDATE_PRODUCT:
			const productIndex = state.userProducts.findIndex(product => product.id === action.pid);
			const updatedProduct = new Product(
								action.pid, 
								'c4',
								state.userProducts[productIndex].ownerId, 
								
								action.productData.name,
								state.userProducts[productIndex].price,
								action.productData.description,
								action.productData.imageurl,
								
								
								
								
								);
			const updatedUserProducts =[...state.userProducts]; 
			updatedUserProducts[productIndex] = updatedProduct;
			const availableProductIndex = state.availableProducts.findIndex(prod =>prod.id === action.pid);

			const updatedAvailableProducts =[...state.availableProducts];
			updatedAvailableProducts[availableProductIndex] = updatedProduct;

			return {
				...state,
				availableProducts:updatedAvailableProducts,
				userProducts:updatedUserProducts,
			};
		case DELETE_PRODUCT:
			return {
				userProducts: state.userProducts.filter(
					(product) => product.id !== action.pid
				),
				availableProducts: state.availableProducts.filter(
					(product) => product.id !== action.pid
				),
			};
	}
	return state;
};

export default productReducers;
