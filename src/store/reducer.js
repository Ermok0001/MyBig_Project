import {createSlice} from "@reduxjs/toolkit"

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cart: [],
//         total: 0,
//     },
//     reducers:{
//         addToCart: (state, action)=>{
//             state.cart.push(action.payload)
//         },
//         removeFromCart:(state, action)=>{
//             state.cart = state.cart.filter(
//                 (product)=> product.id !==action.payload.id)
//         },
//         addToTotal: (state, action)=>{
//             state.total += action.payload;
//         },
//         removeFromTotal: (state, action)=>{
//             state.total -= action.payload;
//         }
//     },
// })

// export const {addToCart, removeFromCart, addToTotal, removeFromTotal} = cartSlice.actions;

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        hotelsArray: [],
        fav: [],
    },
    reducers: {
        addTofav: (state,action)=>{
            state.fav.push(action.payload)
        },
        removeFromfav: (state, action)=>{
            state.fav = state.fav.filter((item)=> item.country != action.payload.country)
        },
        addDataHotelsArray: (state,action)=>{
            state.hotelsArray = action.payload
        }
    }
}) 

export const {addTofav,removeFromfav, addDataHotelsArray} = favoriteSlice.actions

export const sortedHotels = createSlice({
    name: 'sort',
    initialState: {
        sortedContent: [],
    },
    reducers: {
        addToSortedContent: (state, action) => {
            state.sortedContent = action.payload
        }
    }
})

export const {addToSortedContent} = sortedHotels.actions
/////////////////////////////////////////////////////////////////////////////////////////
