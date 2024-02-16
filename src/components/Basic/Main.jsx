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
import fav2 from "../assets/favorite (1).png"
import fav from "../assets/favorite_border.png"

// //////////////////////////////////////////////////////////////////

import { addTofav, removeFromfav } from "../../store/reducer"
import { useDispatch, useSelector} from "react-redux"
import axios from "axios";
import { useEffect, useState } from "react";

// //////////////////////////////////////////////////////////////////

export function Main({hotels}) {
    const dispatch = useDispatch()
    const favState = useSelector((state) => state.fav.fav)
    let isinFav = favState.fav.some((item) => item.id == hotels.id)
    const [directions, setDirections] = useState([]);
    const UrlApi = "http://map.aviasales.ru/supported_directions.json?origin_iata=LED&one_way=false&locale=ru";

    useEffect(() => {
        axios.get(UrlApi)
            .then((resp) => {
                setDirections(resp.data.directions);
            })
    }, []);

        return (
        <div className="start_Main">
            <div>
                <h1>Popular Hotels</h1>
            </div>
            <div>
                {directions.slice(0, 7).map((direction, index) => {
                    const image_country = [Paragway_img, China_img, Uar_img, Canada_img, Japan_img, France_img, Gond_img, Araw_img, Indonesi_png, Venes_img  ]
                    const selectedImage = image_country[index % image_country.length]
                    return(
                  <div className="Grid_main" key={index}>
                    <div className="info_hotel">
                        <h2>{direction.country_name}</h2>
                        <h3>{direction.country}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo distinctio cum aperiam dolor accusantium laudantium alias delectus ut harum quidem!</p>
                        </div>
                    <div className="info_hotel_money">
                        <div>
                        <p>Цена: 500$/24h</p>
                        <button>Забронировать</button>
                        </div>
                        <img src={isinFav ? fav2 : fav} onClick={()=>{
                            dispatch(isinFav ? removeFromfav(hotels) : addTofav(hotels))
                        }} alt="" />
                        </div>
                    <div className="hotel_img">
                        <img src={selectedImage} alt="" /></div>
                    </div>
                    
                    )
})}
            </div>
        </div>
    );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
