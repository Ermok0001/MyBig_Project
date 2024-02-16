import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "./api";
import { favoriteSlice,} from "./reducer";

export const store = configureStore({
    reducer:{
        fav: favoriteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(hotelsApi.middleware)
})
////////////////////////////////////////////////////////////////////////

