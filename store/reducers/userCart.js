import {ADD_TO_CART} from '../actions/Cart';
import CartItem from '../../models/CartItem';

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

            if (state.items[addedProduct.id]){
                // product already in Cart 
                const updatedItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    ProdTitle,
                    ProdPrice,
                    state.items[addedProduct.id].sum + prodPrice
                );
                return {
                    ...state,
                    items:{...state.items, [addedProduct]:updatedItem},
                    totalAmount: state.totalAmount + prodPrice
                };

            } else{
                // Adding product first time in Cart
                const item = new CartItem(1,ProdTitle, ProdPrice, ProdPrice);
                return {
                    ...state,
                    items:{...state.items, [addedProduct]:item},
                    totalAmount: state.totalAmount + ProdPrice

                };
            }
    }
    return state;
};

export default userCart;