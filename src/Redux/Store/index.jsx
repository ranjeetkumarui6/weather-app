import { configureStore } from "@reduxjs/toolkit";
import slices from './Slices'
const store=configureStore({
    reducer:{
        rootreducer:slices
    },
});

export default store;