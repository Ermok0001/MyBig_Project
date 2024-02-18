import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "./api";
import { cartSlice, favoriteSlice, sortedHotels} from "./reducer";

export const store = configureStore({
    reducer:{
        [hotelsApi.reducerPath]: hotelsApi.reducer,
        cart: cartSlice.reducer,
        fav: favoriteSlice.reducer,
        sort: sortedHotels.reducer

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(hotelsApi.middleware)
})
////////////////////////////////////////////////////////////////////////

