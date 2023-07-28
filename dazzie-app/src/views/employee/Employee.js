
import React from "react";
import StatusCards from "../../components/analyticsStatusCard/StatusCards";
import Layout from "../../components/layout";
import Table from "../../components/table/Table";
import TableListData from "../../constants/jsons/items.json";
import SoldItems from "../../components/soldItems/SoldItems";
import soldItemsData from "../../constants/jsons/soldItemsData.json"

export default function Employee() {
  return (
    <Layout>
      Customer
      {/* <StatusCards /> */}
      <div className="analyticsWrapper">
          <Table data={TableListData} />
        {/* <SoldItems data={soldItemsData} /> */}
      </div>
    </Layout>
  );
}


