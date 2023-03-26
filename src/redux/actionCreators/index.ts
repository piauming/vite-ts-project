import { Dispatch } from "redux"
import { ActionType } from "../actionTypes"
import { Action } from "../actions/index"

export type CartItem = {
    id: number,
    count: number,
    title: string
}

export const addToCart = (cartItem: CartItem) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TO_CART,
            payload: cartItem
        })
    }
}