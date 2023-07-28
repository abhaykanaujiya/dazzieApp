import React from 'react'
import "./table.css"
const Table = ({ data, heading }) =>{
  return (
    <div className='tableWrapper' >
      <div className='tableTitle'>{heading}</div>
      <table width={"100%"} className='table-container'>
        <tr className='table-header'>
          <th>No</th>
          <th style={{width:"333px"}}>Item</th>
          <th>Quantity</th>
          <th>Revenue</th>
          <th>Net Profit</th>
        </tr>

      {data.table_Items?.map((v,idx)=>(
        
          <tr className='tableList'>
          <td>{idx < 9 ? `0${idx + 1}` : idx+1}</td>
          <td style={{ width: "333px" }}>{v.item }</td>
          <td>{ v.quanlity}</td>
          <td>{v.revenue}</td>
          <td>${v.netProfit }</td>
          </tr>
        
      ))}
      </table>
    </div>
  )
}

export default Table
