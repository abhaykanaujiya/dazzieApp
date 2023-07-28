import React from "react";
import StatusCards from "../../components/analyticsStatusCard/StatusCards";
import Layout from "../../components/layout";
import Table from "../../components/table/Table";
import TableListData from "../../constants/jsons/items.json";
import SoldItems from "../../components/soldItems/SoldItems";
import soldItemsData from "../../constants/jsons/soldItemsData.json"

export default function Coupon() {
  return (
    <Layout>
      <StatusCards />
      <div className="analyticsWrapper">
        <div className="analyticsTableContainer">
          <Table data={TableListData} />
        </div>
        <SoldItems data={soldItemsData} />
      </div>
    </Layout>
  );
}


