import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: {
            reducer(state, action){
                return {...state, username: action.payload.username, email: action.payload.email}
            }
        },
        breakUser: {
            reducer(state){
                return {...state, username: "", email: ""}
            }
        }
    }
})

export const {setUser, breakUser} = userSlice.actions;
export const getUser = (state)=>state.user;

export default userSlice.reducer;