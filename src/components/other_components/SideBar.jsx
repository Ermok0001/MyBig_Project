import menu_img from "../assets/menu.png";
import { Link } from "react-router-dom";

export function SideBar({setSideBar}){
    return(
        <div className="SideBar">
            <img style={{cursor: "pointer"}} src={menu_img} onClick={()=>{
            setSideBar(false)
        }} alt="" />
                <ul>
                    <Link to="/"><li>Main</li></Link>
                    <Link to="fav"><li>Favourite</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/support"><li>Support</li></Link>
            </ul>
        </div>
    )
}