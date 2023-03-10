import {configureStore} from "@reduxjs/toolkit";
import navigationsReducer from "./navagationsSlice";
import quickSearchReducer from "./quickSearchSlice";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
    reducer: {
        navigations: navigationsReducer,
        quickSearch: quickSearchReducer,
        user: userReducer,
        booking: bookingReducer,
    }
})