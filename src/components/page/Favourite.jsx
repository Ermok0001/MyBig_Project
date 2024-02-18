import { useDispatch, useSelector } from "react-redux"
import { addTofav, removeFromfav } from "../../store/reducer"

export function Favoutite({direction}){
    const dispatch = useDispatch()
    const favState = useSelector((state)=> state.fav.fav)
    const cartState = useSelector((state) => state.direction)

    let isInCart = cartState.direction.some((item)=> item.direction == direction.direction)
    return(
        <div className="All_fav">
            <h1>favourite</h1>
            <h1>{direction.country_name}</h1>
        </div>
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////
