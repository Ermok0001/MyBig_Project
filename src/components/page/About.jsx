import { Link } from "react-router-dom";
import hotels_log_img from "../assets/hotels_logo.png"

export function About(){
    return(
        <div className="All_About">
            <h1>About Us</h1>
            <div className="About_logo">
                <img src={hotels_log_img} alt="" />
                <div className="info_About">
                    <h1>Популярные отели от Ерасыла</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni debitis hic dignissimos recusandae perspiciatis earum. Vitae molestiae suscipit quae, consequatur vel debitis, labore veritatis natus sapiente ad tempore accusantium doloribus?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus enim quo neque aperiam earum nisi saepe dolor adipisci. Reiciendis ipsam minus iusto eos culpa officia enim voluptatibus at dolore atque.
                    </p>
                    <Link to='/'><button>Начать бронировать</button></Link>
                </div>
            </div>
        </div>
    )
}