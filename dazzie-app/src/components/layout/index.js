import React from "react";
import Header from "../header/Header";
import SideBar from "../navBar/SideBar";
import '../../App.css';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <SideBar />
        <div className="appContentWrapper">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout