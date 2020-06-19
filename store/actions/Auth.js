export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const SignUp = (email, password) => {
	return async (dispatch) =>{
		
		const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2JzL4Gp2yWQLTpsxmju-fPYYWtnD6gN8',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email:email,
					password: password,
					returnSecureToken:true,


				})
			});
		if (!response.ok) {
			const ErrorresData = await response.json();
			// console.log(ErrorresData);
			let message = 'Something went wrong!';
			if (ErrorresData.error.message === 'EMAIL_EXISTS') {
				message = 'Email already exists!';
			} else if (ErrorresData.error.message === 'OPERATION_NOT_ALLOWED') {
				message = "Operation not allowed";
			} else if (ErrorresData.error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER'){
				message = 'Too many attempts.Try later.'
			}
			throw new Error(message);
		}

		const resData = await response.json();
		console.log(resData);
		dispatch({type:SIGN_UP});
	};
};

export const Login = (email, password) =>{
	return async (dispatch) => {
		const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2JzL4Gp2yWQLTpsxmju-fPYYWtnD6gN8',{
			method:'POST',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: email,
				password: password,
				returnSecureToken:true
			})
		});
		if (!response.ok) {
			const ErrorresData = await response.json();
			// console.log(ErrorresData);
			let message = 'Something went wrong!';
			if (ErrorresData.error.message === 'EMAIL_NOT_FOUND') {
				message = 'Email not Found!';
			} else if (ErrorresData.error.message === 'INVALID_PASSWORD'){
				message = "Wrong Password!";
			} else if (ErrorresData.error.message === 'USER_DISABLED'){
				message = 'User Disabled.'
			}
			throw new Error(message);

		}
		const resData = await response.json();
		console.log(resData);
		dispatch({type:LOGIN,token:resData.idToken, userId:resData.localId});
	};
};

export const Logout = () => {
	return { type:LOGOUT };
};
