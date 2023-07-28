import React from "react";
import StatusCards from "../../components/analyticsStatusCard/StatusCards";
import Layout from "../../components/layout";
import "./analytics.css";
import Table from "../../components/table/Table";
import TableListData from "../../constants/jsons/items.json";
import SoldItems from "../../components/soldItems/SoldItems";
import soldItemsData from "../../constants/jsons/soldItemsData.json"

export default function Analytics() {
  return (
    <Layout>
      <StatusCards />
      <div className="analyticsWrapper">
        <div className="analyticsTableContainer">
          <Table data={TableListData} heading={"Latest Order"} />
        </div>
        <SoldItems data={soldItemsData } />
      </div>
    </Layout>
  );
}
