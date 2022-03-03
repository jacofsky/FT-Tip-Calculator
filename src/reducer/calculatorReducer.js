import { types } from "../types/types";

// - Calculate the correct tip and total cost of the bill per person

const initialState = {

    tipAmount: 0,
    total: 0,
    resetear: false,
    error: false

}

export const calculatoReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.changeTipAndBill:
            return {
                ...state,
                tipAmount: action.payload.tipAmount,
                total: action.payload.total,
                error: false
            }
        
        case types.resetTipAndBill:
            return  {
                ...state, 
                error: false
            }

        case types.errorTrue:
            return {
                ...state,
                error: true
            }

        case types.resetedTipAndBill:
            return initialState
                
        default:
            return initialState
    }

}