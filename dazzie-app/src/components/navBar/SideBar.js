// import Data from "./sideBar.json";
import Data from "../../constants/jsons/sidebar.json";
import "./sideNavBar.css"
import Dashboard from "../../assets/sideBarIcon/Dashboard.svg"
import { NavLink } from "react-router-dom";



const SideBar = () => {

  return (
    <div className="sideBarWrapper">
      {Data.sidebar_items?.map((value, idx) => {
        console.log(value);
        return (<div className="sideBarContainer" key={idx}>
          <NavLink to={value.selected_icon_url}>
            <img src={Dashboard} alt="img" />
          </NavLink>
        </div>)
      })}

      <div>
        <img src={Dashboard} />
      </div>
    </div>

  )
};

export default SideBar;
