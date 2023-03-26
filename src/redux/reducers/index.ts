import { ActionType } from "../actionTypes/index"
import { Action } from "../actions"
import { CartItem } from "../actionCreators";
import produce from 'immer';

interface State {
    cart: CartItem[];
}

const initialState = {
    cart: [],
}

const reducer = (state: State = initialState, action: Action): State => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ActionType.ADD_TO_CART:
                draft.cart.push(action.payload);
            default:
                return draft;
        }
    });
}

export default reducer