import { Dispatch } from "redux";
import { Action } from "../index";
import { ActionType } from "../type";
import { CartItem } from "../payload";

const addToCart = (cartItem: CartItem) => {
    return (dispatch: Dispatch<Action>) => {
        // action is the value, and the value must match the "interface AddToCartAction"
        const action = {
            type: ActionType.ADD_TO_CART,
            payload: cartItem
        }

        dispatch(action);
    }
}

export default addToCart;