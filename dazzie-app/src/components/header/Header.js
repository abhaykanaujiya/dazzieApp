import React from "react";
import "./header.css";
import Logo from "../../assets/icons/logo.png";
import Notification from "../../assets/icons/NotificationBell.svg";
import CustomerLogo from "../../assets/icons/customer.svg";
const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="header">
        <div className="logoParent">
          <img className="header-logo" src={Logo} alt="img" />
        </div>
        <h2>Dazzie</h2>
      </div>
      <div className="customer-header">
        <div className="notification-icon-parent">
          <img className="notification-icon" src={Notification} />
        </div>
        <div className="loggedin-user">
          <div>
            <img className="customer-icon" src={CustomerLogo} />

          </div>
          <div className="header-customer-info">
            <div className="customer-name">Admintest</div>
            <div className="designation">cashier</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
