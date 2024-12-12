import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        auth : authSliceReducer
    },
    devTools:true
});

export default store;