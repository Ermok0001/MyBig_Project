import menu_img from "../assets/menu.png";

export function sideBar(props){
    return(
        <div className={props.sideBar ? 'SideBar open' : 'SideBar'}>
            <img onClick={props.handleSidebar} src={menu_img} alt="" />
        </div>
    )
}