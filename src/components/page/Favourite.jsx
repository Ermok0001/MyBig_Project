import Paragway_img from "../assets/Paragway.png"
import China_img from "../assets/China.png"
import Uar_img from "../assets/Uar.png"
import Canada_img from "../assets/Canada.png"
import Japan_img from "../assets/Japan.png"
import France_img from "../assets/France.png"
import Gond_img from "../assets/Gond.png"
import Araw_img from "../assets/Araw.png"
import Indonesi_png from "../assets/Indonesi.png"
import Venes_img from "../assets/Venes.png"
import { useState } from "react";
import fav2 from "../assets/favorite (1).png"
import { useDispatch, useSelector} from "react-redux"
import { removeFromfav } from "../../store/reducer"
import { InfoProduct } from "../other_components/infoProfuct"

export function Favoutite(){
    let [isAboytActive, setAboutActive] = useState(false)
    const dispatch = useDispatch()
    const favState = useSelector((state) => state.fav.fav);

    const [images] = useState([
        Paragway_img,
        China_img,
        Uar_img,
        Canada_img,
        Japan_img,
        France_img,
        Gond_img,
        Araw_img,
        Indonesi_png,
        Venes_img
    ]);

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    return(
        <div className="All_fav">
            <h1>Favourite</h1>
            {favState.map((direction, index) => (
                <div className="fav_hotelsInfo" key={index}>
                    <img src={getRandomImage()} alt="" />
                    <div>
                    <h2>{direction.country_name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam vitae ducimus sapiente quod voluptates excepturi minima laboriosam nostrum. Inventore dolorem modi, labore aspernatur maxime illum recusandae impedit fugit eum?</p>
                    </div>
                    <div className="fav_img">
                    <img src={fav2} onClick={()=>{
                        dispatch(removeFromfav(direction))
                    }} alt="" />
                    </div>
                    <div className="hotels_price">
                    <p>Цена: 500$/24h</p>
                    <button onClick={() => { setAboutActive(!isAboytActive) }}>Забронировать</button>
                   {isAboytActive ? (
                     <div className="blur">
                 <InfoProduct setIsAboutActive={setAboutActive} 
                 direction={direction}/>
                   </div>
                ) : (
                    <div></div>
                 )}
                    </div>
                </div>
            ))}
        </div>
    )
}
/////////////////////////////////////////////////////////////////////////////////////////////
