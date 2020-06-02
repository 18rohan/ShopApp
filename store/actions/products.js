import Product from "../../models/products";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

export const fetchProduct = () => {
	return async (dispatch, getState) => {
		const userId = getState().auth.userId;
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
						resData[key].ownerId,
						resData[key].name,
						resData[key].price,
						resData[key].description,
						resData[key].imageurl
					)
				);
			}
			dispatch({ type: SET_PRODUCT, 
				products: loadedProducts , 
				userProducts:loadedProducts.filter(prod => prod.ownerId === userId)
			});
		} catch (err) {
			// send to custom analytics server
			throw err;
		}
	};
};

export const deleteProduct = (productId) => {
	return async (dispatch, getState) => {
		const token = getState().auth.token;
		await fetch(
			`https://shopapp-fb9ab.firebaseio.com/products/${productId}.json?auth=${token}`,
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
	return async (dispatch, getState) => {
		// Async Function to fetch Data from FireBase
		const token = getState().auth.token;
		const userId = getState().auth.userId;
		const response = await fetch(
			`https://shopapp-fb9ab.firebaseio.com/products.json?auth=${token}`,
			{
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					name,
					imageurl,
					description,
					price,
					ownerId:userId,
				}),
			}
		);
		if(!response.ok){
			throw new Error('Something went wrong');
		}

		const resData = await response.json();
		// console.log(resData);

		// Dispatch Function
		dispatch({
			type: CREATE_PRODUCT,
			productData: {
				id: resData.name,
				name,
				imageurl,
				description,
				price,
				ownerId:userId,
			},
		});
	};
};

export const updateProduct = (id, name, imageurl, description) => {
	return async (dispatch,getState) => {
		// console.log("getState------");
		// console.log(getState());
		const token = getState().auth.token
		const response = await fetch(
			`https://shopapp-fb9ab.firebaseio.com/products/${id}.json?auth=${token}`,
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
