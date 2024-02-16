import { Link } from "react-router-dom";
import menu_img from "../assets/menu.png";
import search_img from "../assets/search.png";
import person_img from "../assets/person_outline.png";
import { useState } from "react";

export function Navigation() {
    const [sideBar, setSideBar] = useState(false);

    function handleSidebar() {
        setSideBar(!sideBar);
    }

    console.log(sideBar);

    return (
        <div className="All_Navigation">
            <div className="Navigation">
                <div className="Info_Navigation">
                        <img style={{ cursor: 'pointer' }} onClick={handleSidebar} src={menu_img} alt="Menu" />
                    <Link to='/'><p>Main</p></Link>
                    <Link to="/fav"><p>Favourite</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/support"><p>Support</p></Link>
                </div>
                <div className="Search_Navigation">
                    <img style={{ cursor: 'pointer' }} src={search_img} alt="Search" />
                    <input type="text" />
                    <img style={{ cursor: 'pointer' }} src={person_img} alt="Person" />
                </div>
            </div>
        </div>
    );
}


// import { Link } from "react-router-dom";
// import menu_img from "../assets/menu.png";
// import search_img from "../assets/search.png";
// import person_img from "../assets/person_outline.png";
// import { useState } from "react";

// export function Navigation() {
//     const [sideBar, setSideBar] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [directions, setDirections] = useState([]);

//     function handleSidebar() {
//         setSideBar(!sideBar);
//     }

//     const filteredDirections = directions.filter(direction => {
//         return direction.country_name.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     return (
//         <div className="All_Navigation">
//             <div className="Navigation">
//                 <div className="Info_Navigation">
//                     <img style={{ cursor: 'pointer' }} onClick={handleSidebar} src={menu_img} alt="Menu" />
//                     <Link to='/'><p>Main</p></Link>
//                     <Link to="/fav"><p>Favourite</p></Link>
//                     <Link to="/about"><p>About</p></Link>
//                     <Link to="/support"><p>Support</p></Link>
//                 </div>
//                 <div className="Search_Navigation">
//                     <img style={{ cursor: 'pointer' }} src={search_img} alt="Search" />
//                     <input 
//                     type="text" 
//                     placeholder="Search country..."
//                     value={searchTerm} 
//                     onChange={(e) => setSearchTerm(e.target.value)} 
//                 />
//                     <button onClick={handleSearch}>Search</button>
//                     <img style={{ cursor: 'pointer' }} src={person_img} alt="Person" />
//                 </div>
//             </div>
//         </div>
//     );
// }


// import { Link, useHistory } from "react-router-dom";
// import { useState } from "react";

// export function Navigation() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const history = useHistory();

//     function handleSearch() {
//         history.push(`/main?search=${searchTerm}`);
//     }

//     return (
//         <div className="All_Navigation">
//             <div className="Navigation">
//                 <div className="Info_Navigation">
//                     <input 
//                         type="text" 
//                         value={searchTerm} 
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         placeholder="Search country..."
//                     />
//                     <button onClick={handleSearch}>Search</button>
//                     <Link to='/fav'><p>Favourite</p></Link>
//                     <Link to='/about'><p>About</p></Link>
//                     <Link to='/support'><p>Support</p></Link>
//                 </div>
//             </div>
//         </div>
//     );
// }