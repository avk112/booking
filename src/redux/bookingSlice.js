import {createSlice} from "@reduxjs/toolkit";

const initialState=[];

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addOrder: {
            reducer(state, action) {
                return [...state, action.payload];
            }
        },
        deleteOrder: {
                reducer(state, action){
                     return state.filter(item=>item.id!==action.payload);
                },
        },
    }
});

export const {addOrder, deleteOrder} = bookingSlice.actions;
export const getOrders = (state)=>state.booking;

export default bookingSlice.reducer;