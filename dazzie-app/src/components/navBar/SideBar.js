import Data from "./sideBar.json";
import "./sideNavBar.css"
import Dashboard from "../../assets/sideBarIcon/Dashboard.svg"


const SideBar = () => {

  return (
    <div className="sideBarWrapper">
      {Data.sideBar.map((value, idx) => (
        <div className="sideBarContainer" key={idx} >
          <img src={Dashboard} alt="img" />
        </div>
      ))}

      <div>
        <img src={Dashboard} />
      </div>
    </div>

  )
};

export default SideBar;
