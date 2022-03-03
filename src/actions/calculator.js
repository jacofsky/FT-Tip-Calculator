import { types } from "../types/types";
import { calculateBill, calculateTip } from "../helpers/calculate";


export const onChangeValues = (tip, bill, persons) => {

    return (dispatch) => {

        const tipPerPerson = calculateTip(tip, bill, persons)
        const total = calculateBill(tipPerPerson, bill, persons)
    
    
        dispatch(changeTipAndBill(tipPerPerson, total))
        
    }

}



export const resetTipAndBill = () => ({ type: types.resetTipAndBill })

export const resetedTipAndBill = () => ({ type: types.resetedTipAndBill })

export const errorTrue = () => ({ type: types.errorTrue})

const changeTipAndBill = (tipAmount, total) => ({
    type: types.changeTipAndBill,
    payload: {
        tipAmount,
        total
    }

})
