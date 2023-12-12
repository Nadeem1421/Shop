import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface countersate{
    value: number;
}
const initialState: countersate={
    value: 0
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1;   
        },
        decrement:(state)=>{
            state.value -= 1;   
        },
        incrementByAmount:(state, action:PayloadAction<number>)=>{
            state.value += action.payload;   
        },
    },
});
export const counterActions = counterSlice.actions
export default counterSlice.reducer;