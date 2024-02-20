import {useSelector } from "react-redux"
import { addTofav, removeFromfav } from "../../store/reducer"

export function Favoutite({direction}){
    const favState = useSelector((state)=> state.fav.fav)
    const cartState = useSelector((state) => state.cart)

    return(
        <div className="All_fav">
            <h1>favourite</h1>
            <h1>{direction}</h1>
        </div>
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////
