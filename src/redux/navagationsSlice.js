import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import navigationData from "../data/navigation";

const navAdapter = createEntityAdapter({
    selectId: (nav)=>nav.url,
});


function resolveAfter2Seconds(data) { //simulation of axios promise
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

export const fakeApi = createAsyncThunk("navigations/fetchNavigations",
    async ()=>{
    const response = await resolveAfter2Seconds(navigationData); //fake axios-like promise
    return response;
    });

const initialState=navAdapter.getInitialState({
    status: "loading"
});


const navigationsSlice = createSlice({
    name: "navigations",
    initialState,
    reducers: {

        },
    extraReducers(builder){
        builder
            .addCase(fakeApi.fulfilled,(state, action)=>{
                navAdapter.setAll(state, action.payload);
                state.status="loaded";
        })
    }
});

export const {
    selectAll: getAllNavs,
    selectById: getNavById,
    selectIds: getNavsIds,
} = navAdapter.getSelectors(state => state.navigations);

export const getNavStatus = (state)=>state.navigations.status;
export default navigationsSlice.reducer