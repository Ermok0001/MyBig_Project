import { Link } from "react-router-dom";
import menu_img from "../assets/menu.png";
import search_img from "../assets/search.png";
import person_img from "../assets/person_outline.png";
import { useState } from "react";
import { SideBar } from "../other_components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { addDataHotelsArray, } from "../../store/reducer";

export function Navigation() {
    const dispatch = useDispatch();
    let [inputValue, setinputValue] = useState('')
    const hotelsArray = useSelector((state) => state.fav.hotelsArray)

    const [sideBar, setSideBar] = useState(false);

    function handleSearch() {
        let filteredHotelArray = hotelsArray.filter(
            (hotel) => hotel.country_name == inputValue
        )
        console.log(filteredHotelArray)
        dispatch(addDataHotelsArray(filteredHotelArray))
    }

    return (
        <div className="All_Navigation">
            <div className="Navigation">
                <div className="Info_Navigation">
                    <img style={{ cursor: 'pointer' }} onClick={() => { setSideBar(!sideBar) }} src={menu_img} alt="Menu" />
                    {sideBar ? (
                        <div className="Sidebar">
                            <SideBar setSideBar={setSideBar}></SideBar>
                        </div>
                    ) : (
                        <div>
                            <h2>Erasyl Hotels</h2>
                        </div>
                    )}
                    <Link to='/'><p>Main</p></Link>
                    <Link to="/fav"><p>Favourite</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/support"><p>Support</p></Link>
                </div>
                <div className="Search_Navigation">
                    <img style={{ cursor: 'pointer' }} onClick={()=>{handleSearch()}} src={search_img} alt="Search" />
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={inputValue}
                        onChange={(e) => { setinputValue(e.target.value) }} />
                    <img style={{ cursor: 'pointer' }} src={person_img} alt="Person" />
                </div>
            </div>
        </div>
    );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
