import products from "../components/Trending/products";

const initialState = {
    products: [],
    totelPrice: 0 ,
};
const CartReducers = (state = initialState, action) =>{
 switch (action.type) {
    case "ADD_TO_CART": return state + 1;
    default: return state;
        
 }
}

export default CartReducers;