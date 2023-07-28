import React from "react";
// import StatusCards from "../../components/analyticsStatusCard/StatusCards";
import Layout from "../../components/layout";
import Table from "../../components/table/Table";
import TableListData from "../../constants/jsons/items.json";
// import SoldItems from "../../components/soldItems/SoldItems";
// import soldItemsData from "../../constants/jsons/soldItemsData.json"
import SearchBar from "../../components/search/SearchBar";
import MoreIcon from "../../assets/icons/threedots.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import "./employee.css";

export default function Employee() {
  return (
    <Layout>
      <div className="employeeTitle">Customer</div>
      <div className="employeeSearchBarContainer">
        <SearchBar />

        <img src={FilterIcon} alt="image" />
        <img className="more" src={MoreIcon} alt="image" />
      </div>

      <div className="employeeTableContainer">
        <div>
          <Table data={TableListData} />
        </div>
      </div>
    </Layout>
  );
}
