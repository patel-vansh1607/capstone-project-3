import { menuItemsData } from "./menuItemsData";
import MenuItems from "./Menuitems";
import "./Navbar.css"

const Navbar = () => {
    const depthLevel = 0;
    return(
        <nav className="main-nav">
            <ul className="menus">
                {menuItemsData.map((menu,index)=>{
                    return(
                        <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;