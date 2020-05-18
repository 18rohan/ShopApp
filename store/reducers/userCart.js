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
    }
    return state;
};

export default userCart;