import React from 'react';
import './Section2.css';
import { FaWarehouse, FaBuilding, FaHouseUser } from 'react-icons/fa';

const Section2 = () => {

  const Platform = [
      {
        iborder: <FaBuilding className='ic-icon'/>,
        cname: 'Commercial',
        csubname: '6 Properties'
      },
      {
        iborder: <FaWarehouse className='ic-icon'/>,
        cname: 'Warehouse',
        csubname: '6 Properties'
      },
      {
        iborder: <FaHouseUser className='ic-icon'/>,
        cname: 'Villa',
        csubname: '6 Properties'
      }
  ];

  return (
      <div className="section2">
        <div className="section2-heading">
          <h3>Property By Requirement</h3>
          <h1>Explore Apartment <span className="section2-heading-word">Types</span></h1>
        </div>
        <div className="section2-card">
          <div className="card-border">
            {Platform.map((cards, index) => (
              <div key={index} className="platform">
                <div className="icon-border">{cards.iborder}</div>
                <div className="card-words">
                  <h4 className="card-name1">{cards.cname}</h4>
                  <h4 className="card-subname">{cards.csubname}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Section2;
