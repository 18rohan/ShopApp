import {LOGIN,SIGN_UP, LOGOUT} from '../actions/Auth';


const initialState ={
	token:null,
	userId:null,
};

const AuthReducer =(state = initialState, action) =>{
	switch (action.type) {
		case LOGIN:
			return {
				token:action.token,
				userId:action.userId,
			}
			case SIGN_UP:
			return {
				token:action.token,
				userId:action.userId,
			}
			case LOGOUT:
				return initialState;
			default:
			return state; 
	}
}

export default AuthReducer;