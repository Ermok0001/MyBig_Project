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

export function InfoProduct({setIsAboutActive}){
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

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    return(
        <div className="Info_Hotels">
            <div className="Info_Hotel">
                <img src={getRandomImage()} alt="" />
            </div>
            <div>
                <h1>Hotel:</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel deleniti fugiat repudiandae officia impedit. Laboriosam fugiat tempora ex sapiente. </p>
                <div className="number_button">
                    <p>На сколько человек:</p>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                </div>
                <div className="button_reservation">
            <button onClick={()=>{alert("Забронирована")}} >Забронировать</button>
            <button onClick={()=>{
                setIsAboutActive(false)
            }}>Выбрать другой</button>
            </div>
            </div>
        </div>
    )
}