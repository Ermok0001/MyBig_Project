import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "./api";
import { favoriteSlice, sortedHotels} from "./reducer";

export const store = configureStore({
    reducer:{
        [hotelsApi.reducerPath]: hotelsApi.reducer,
        fav: favoriteSlice.reducer,
        sort: sortedHotels.reducer

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(hotelsApi.middleware)
})
////////////////////////////////////////////////////////////////////////

