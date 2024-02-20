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


export function InfoProduct({ setIsAboutActive, direction }) {
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

    const [numberPeople, setNumberOfPeople] = useState(1);

    function getRandomImage(){
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    function handleReservation(){
        alert(`Забронирована на ${numberPeople} человек(a)`);
    };

    return (
        <div className="Info_Hotels">
            <div className="Info_Hotel">
                <img src={getRandomImage()} alt="" />
            </div>
            <div>
                <h1>Hotel: {direction.country_name}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel deleniti fugiat repudiandae officia impedit. Laboriosam fugiat tempora ex sapiente. </p>
                <div className="number_button">
                    <p>На сколько человек: {numberPeople}</p>
                    <button onClick={() => setNumberOfPeople(1)}>1</button>
                    <button onClick={() => setNumberOfPeople(2)}>2</button>
                    <button onClick={() => setNumberOfPeople(3)}>3</button>
                    <button onClick={() => setNumberOfPeople(4)}>4</button>
                </div>
                <div className="button_reservation">
                    <button onClick={handleReservation}>Забронировать</button>
                    <button onClick={() => setIsAboutActive(false)}>Выбрать другой</button>
                </div>
            </div>
        </div>
    );
}