import { ActionType } from "../actionTypes/index"
import { CartItem } from "../actionCreators"

interface AddToCartAction {
    type: ActionType.ADD_TO_CART,
    payload: CartItem
}

export type Action = AddToCartAction;