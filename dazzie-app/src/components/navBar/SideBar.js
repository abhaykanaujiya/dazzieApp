// import Data from "./sideBar.json";
import Data from "../../constants/jsons/sidebar.json";
import "./sideNavBar.css";
import Dashboard from "../../assets/sideBarIcon/settings.svg";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBarWrapper">
      <div>
        {Data.sidebar_items?.map((value, idx) => {
          let Diamond = require(`../../assets/sideBarIcon/${value.selected_icon_url}`);
          return (
            <div className="sideBarContainer " key={idx}>
              <NavLink to={value.icon_url}>
                <img src={Diamond} alt="img" />
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="sideBarContainer">
        <NavLink to="/setting">
          <img src={Dashboard} alt="icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
