import Product from "../../models/products";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

export const fetchProduct = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				"https://shopapp-fb9ab.firebaseio.com/products.json"
			);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const resData = await response.json();
			console.log(resData);
			const loadedProducts = [];
			for (const key in resData) {
				loadedProducts.push(
					new Product(
						key,
						"c4",
						"own7",
						resData[key].name,
						resData[key].price,
						resData[key].description,
						resData[key].imageurl
					)
				);
			}
			dispatch({ type: SET_PRODUCT, products: loadedProducts });
		} catch (err) {
			// send to custom analytics server
			throw err;
		}
	};
};

export const deleteProduct = (productId) => {
	return async (dispatch) => {
		await fetch(
			`https://shopapp-fb9ab.firebaseio.com/products/${productId}.json`,
			{ method: "DELETE" }
		);

		dispatch({
			type: DELETE_PRODUCT,
			pid: productId,
		});
	};
	return;
};

export const createProduct = (name, imageurl, description, price) => {
	return async (dispatch) => {
		// Async Function to fetch Data from FireBase
		const response = await fetch(
			"https://shopapp-fb9ab.firebaseio.com/products.json",
			{
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					name,
					imageurl,
					description,
					price,
				}),
			}
		);

		const resData = await response.json();
		console.log(resData);

		// Dispatch Function
		dispatch({
			type: CREATE_PRODUCT,
			productData: {
				id: resData.name,
				name,
				imageurl,
				description,
				price,
			},
		});
	};
};

export const updateProduct = (id, name, imageurl, description) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://shopapp-fb9ab.firebaseio.com/products/${id}.json`,
			{
				method: "PATCH",
				headers: { "content-Type": "application/json" },

				body: JSON.stringify({
					name,
					imageurl,
					description,
				}),
			}
		);
		if(!response.ok){
			throw new Error('Something went wrong');
		}

		dispatch({
			type: UPDATE_PRODUCT,
			pid: id,
			productData: {
				name,
				imageurl,
				description,
			},
		});
	};
};
