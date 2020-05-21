import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/Cart';
import CartItem from '../../models/CartItem';
import {ADD_ORDER} from '../actions/ActionOrder';
import {DELETE_PRODUCT} from '../actions/products';

const initialState ={
    items: {},
    totalAmount: 0,

};

const userCart =  (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const ProdPrice = addedProduct.price;
            const ProdTitle = addedProduct.name;
            const image = addedProduct.imageurl;

            if (state.items[addedProduct.id]){
                // product already in Cart 
                const updatedItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    ProdTitle,
                    ProdPrice,
                    state.items[addedProduct.id].sum + ProdPrice,
                    image

                );
                return {
                    ...state,
                    items:{...state.items, [addedProduct.id]:updatedItem},
                    totalAmount: state.totalAmount + ProdPrice
                };

            } else{
                // Adding product first time in Cart
                const newCartitem = new CartItem(1,ProdTitle, ProdPrice, ProdPrice, image);
                return {
                    ...state,
                    items:{...state.items, [addedProduct.id]:newCartitem},
                    totalAmount: state.totalAmount + ProdPrice

                };
            }
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty> 1){
                // reducing the quantity, do not remove the item
                const updatedCartItem = new CartItem(selectedCartItem.quantity - 1, 
                                                    selectedCartItem.name,
                                                    selectedCartItem.price,
                                                    selectedCartItem.sum - selectedCartItem.price,
                                                    selectedCartItem.image);
                updatedCartItems = {...state.items, [action.pid] : updatedCartItem}
        
            }else{ 
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items:updatedCartItems,
                totalAmount: state.totalAmount -  selectedCartItem.price
            }
        case ADD_ORDER:
            return initialState;

        case DELETE_PRODUCT:
        if (!state.items[action.pid]){
            return state;
        }
        const updatedItems = {...state.items};
        const itemTotal = state.items[action.pid].sum;
        delete updatedItems[action.pid];

            return {
                ...state,
                items:updatedItems,
                totalAmount:state.totalAmount - itemTotal,


            }

    }
    return state;
};

export default userCart;