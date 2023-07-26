import { React, useState } from 'react'
import "./tabs.css"
import tabData from "../../constants/jsons/categories.json"
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id, idx) => {
    if (id === tabData.categories[idx].id) {
      console.log(id,idx);
      setActiveTab(id);
    } 

  };

  return (
    <div className='tabsContainer'>
      {tabData.categories.map((value, idx) => (
        <div className="tabsList" key={value.id}>
          <div className={activeTab===value.id? 'active' : ''} onClick={() => handleTabClick(value.id,idx)}>{value.title}</div>
        </div>
      ))}


      {/* <div className="tab_content">
        {activeTab === 1 && <div className="tab_panel">First tab content</div>}
      </div> */}
    </div>
  );
};

export default Tabs;