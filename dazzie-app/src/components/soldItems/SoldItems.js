import React from "react";
import "./soldItems.css";
import UpIcon from "../../assets/up.png";
const SoldItems = ({ data }) => {
  const isDropDownOpen = false;
  return (
    <div className="soldItemContainer">
      <div className="itemSoldFilter">
        <div className="itemSoldFilterTitle">Item Sold</div>
        <div className="filterSection">
          <div className="textBox">
            <span>Best Seller</span>
            <img src={UpIcon} />
          </div>
          {isDropDownOpen && (
            <div className="filteredListContainer">
              <div className="filteredListText">Top Rated</div>
              <div className="filteredListText">Most Purchased</div>
              <div className="filteredListText">Three Rated</div>
              <div className="filteredListText">Four Rated</div>
            </div>
          )}
        </div>
      </div>
      <div className="filteredItemListContainer">
        {data.sold_Items.map((v, idx) => (
          <div className="filteredItemList">
            <div className="itemImage">
             
            </div>
            <div className="filteredItemName">{v.name}</div>
            <div className="filteredItemTotalItem">{v.total_item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoldItems;
