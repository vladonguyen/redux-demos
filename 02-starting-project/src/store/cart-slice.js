import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {quantity: 0, price: 6},
    reducers: {
        increment(state){
            state.quantity++
        },
        decrement(state){
            state.quantity--
        }
    }
});

export const cartSliceActions = cardSlice.actions;
export default cardSlice;