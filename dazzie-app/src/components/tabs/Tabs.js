import { React, useState } from 'react'
import "./tabs.css"
import tabData from "../../constants/jsons/categories.json"
import Card from '../cards/Card';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState();

  const handleTabClick = (id, idx) => {
    if (id === tabData.categories[idx].id) {
      console.log(id, idx);
      setActiveTab(id);
    }

  };

  return (
    <div className='tabsContainer'>
      {tabData.categories.map((value, idx) => (
        <div className={`${activeTab === value.id ? ' tabsList active ' : 'tabList'}`} key={value.id} onClick={() => handleTabClick(value.id, idx)}>
          {value.title}
        </div>
      ))}


      {/* <div className="tab_content"> */}
        
        {/* {activeTab === 1 && <div className="tab_panel">First tab content</div>} */}
      {/* </div> */}
    </div>
  );
};

export default Tabs;