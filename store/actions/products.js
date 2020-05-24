export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (productId) => {
	return {
		type: DELETE_PRODUCT,
		pid: productId,
	};
};

export const createProduct = (name, imageurl, description, price) => {
	return {
		type: CREATE_PRODUCT,
		productData: {
			name,
			imageurl,
			description,
			price,
		},
	};
};

export const updateProduct = (id, name, imageurl, description) => {
	return {
		type: UPDATE_PRODUCT,
		pid:id,
		productData: {
			name,
			imageurl,
			description,
			
		},
	};
};
