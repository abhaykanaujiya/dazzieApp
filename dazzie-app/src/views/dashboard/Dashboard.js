import React from 'react'
import Card from '../../components/cards/Card'
import "./dashboard.css"
import SearchBar from '../../components/search/SearchBar'
import Layout from '../../components/layout'
import Tabs from '../../components/tabs/Tabs'
const Dashboard = () => {

  return (
    <Layout>
      <div>
        <SearchBar />
        <Tabs />
      </div>
  
      
        <div className='dashboardContainer'>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((v,) => (


            <Card />


          ))}
        </div>

    </Layout>
  )
}

export default Dashboard;