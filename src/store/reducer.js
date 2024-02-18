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
            state.fav = state.fav.filter((item)=> item.country != action.payload.country)
        }
    }
}) 

export const {addTofav,removeFromfav} = favoriteSlice.actions
/////////////////////////////////////////////////////////////////////////////////////////
