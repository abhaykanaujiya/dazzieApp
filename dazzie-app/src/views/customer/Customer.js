import React from "react";
import Layout from "../../components/layout";
import "./customer.css";
import scheduleList from "../../constants/jsons/scheduleList.json";
import moreIcon from "../../assets/icons/threedots.svg";
import Pen from "../../assets/icons/pen.svg";
import Plus from "../../assets/icons/plus.svg";

export default function Customer() {
  return (
    <Layout>
      <div className="titleContainer">
        <h2>Employee Shift</h2>
        <div className="cta">Create New</div>
      </div>
      {scheduleList.scheduleList?.map((list) => (
        <div className="listContainer">
          <div className="titleView">
            <span>{list.timing}</span>
            <div className="editEmployeeShift">
              <img src={Pen} alt="img" />
              <img src={Plus} alt="img" />
            </div>
          </div>
          <div className="cardListContainer">
            {list.users?.map((user) => (
              <div className="card">
                <div className="innerCard">
                  <div className="img"></div>
                  <div className="cardDetail">
                    <span>{user.name}</span>
                    <div className="cardDetailChild">
                      <div
                        className="user"
                        style={{
                          background: user.background,
                          color: user.color,
                          border:
                            user.role === "Dishwasher"
                              ? "1px solid #5541D7"
                              : "",
                        }}
                      >
                        <span> {user.role}</span>
                      </div>
                      <div className="detailsText">Details</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={moreIcon} alt="img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
