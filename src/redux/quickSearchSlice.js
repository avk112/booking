import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    startCity: "",
    finishCity: "",
    date:  null
}

const quickSearchSlice = createSlice({
    name: "quickSearch",
    initialState,
    reducers: {
        setData: {
            reducer(state, action){
                return {...state, [action.payload.key]: action.payload.data}
            }
        }
    }
});

export const {setData}=quickSearchSlice.actions;
export const getAll = (state)=>state.quickSearch;

export default quickSearchSlice.reducer;