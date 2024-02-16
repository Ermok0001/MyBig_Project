import {createSlice} from "@reduxjs/toolkit"

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        fav: [],
    },
    reducers: {
        addTofav: (state,action)=>{
            state.fav.push(action.payload)
        },
        removeFromfav: (state, action)=>{
            state.fav = state.fav.filter((item)=> item.id !=action.payload.id)
        }
    }
}) 

export const {addTofav,removeFromfav} = favoriteSlice.actions
/////////////////////////////////////////////////////////////////////////////////////////

// import { createSlice } from "@reduxjs/toolkit";

// export const favoriteSlice = createSlice({
//     name: "favorite",
//     initialState: {
//         fav: [], // Инициализируйте начальное состояние
//     },
//     reducers: {
//         addTofav: (state, action) => {
//             state.fav.push(action.payload);
//         },
//         removeFromfav: (state, action) => {
//             state.fav = state.fav.filter((item) => item.id !== action.payload.id);
//         },
//     },
// });

// export const { addTofav, removeFromfav } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
