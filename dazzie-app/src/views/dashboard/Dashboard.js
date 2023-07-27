import { React, useEffect, useState } from 'react'
import data from "../../constants/jsons/categories.json"
import Card from '../../components/cards/Card'
import "./dashboard.css"
import SearchBar from '../../components/search/SearchBar'
import Layout from '../../components/layout'
import Tabs from '../../components/tabs/Tabs'
import { Route, Router } from 'react-router-dom'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState("");


  return (
    <Layout>
      <div>
        <SearchBar />
        <Tabs />
      </div>


      <div className='dashboardContainer'>

        {[1,2,3,4,5,6,7,8,9].map((value) => (
          <Card value={value}  />


        ))}
      </div>

    </Layout>
  )
}

export default Dashboard;