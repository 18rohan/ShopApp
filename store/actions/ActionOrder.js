import Order from '../../models/ModelOrder';

export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

export const fetchOrder = () =>{
	return async (dispatch, getState) => {
		const token = getState().auth.token;
		const userId = getState().auth.userId;
		try {
			const response = await fetch(
				`https://shopapp-fb9ab.firebaseio.com/orders/${userId}.json`
			);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const resData = await response.json();
			console.log(resData);
			const loadedOrders = [];
			for (const key in resData) {
				loadedOrders.push(
					new Order(
						key,
						resData[key].cartItems,
						resData[key].totalAmount,
						new Date(resData[key].date),
						
					)
				);
			}
			dispatch({ type: SET_ORDER, orders: loadedOrders });
		} catch (err) {
			// send to custom analytics server
			throw err;
		}
	};
		



	};






export const addOrder = (cartItems, totalAmount) => {
	const date = new Date();
	return async (dispatch,getState) => {
		const token = getState().auth.token;
		const userId = getState().auth.userId;
		const response = await fetch(
			`https://shopapp-fb9ab.firebaseio.com/orders/${userId}.json?auth=${token}`,
			{
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					cartItems,
					totalAmount,
					date : date.toISOString(),
					 
				}),
			}

		);
		if (!response.ok){
			throw new Error('Something went wrong');
		}

		const resData = await response.json();

		dispatch({
			type: ADD_ORDER,
			orderData: {
				id:resData.name,
				items: cartItems,
				amount: totalAmount,
				date:date,
			},
		});
	};

};
