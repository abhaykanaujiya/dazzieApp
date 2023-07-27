import React from 'react'
import StatusCards from '../../components/analyticsStatusCard/StatusCards'
import Layout from '../../components/layout'
import "./analytics.css"
export default function Analytics() {
  return (
    <Layout>
      <div className='wrapper'>
        {[1, 2, 3, 4].map((v, idx) => (
        
            <StatusCards />
        
        ))}

      </div>
    </Layout>
  )
}
