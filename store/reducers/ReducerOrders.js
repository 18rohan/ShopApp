import {ADD_ORDER} from '../actions/ActionOrder';
import Order  from '../../models/ModelOrder';




const initialState = {
    orders : [],
};

const ReducerOrder = (state=initialState, action) =>{
    
    switch(action.type){
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), 
                                    action.orderData.items, 
                                    action.orderData.amount, 
                                    new Date()
                                    );
            return {
                ...state,
                orders:state.orders.concat(newOrder),

            };
    }
    
    return state;
}
export default ReducerOrder;