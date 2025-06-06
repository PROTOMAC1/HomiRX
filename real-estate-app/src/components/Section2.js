import React from 'react';
import './Section2.css';
import { FaWarehouse, FaBuilding, FaHouseUser } from 'react-icons/fa';
import Commercial from './Images/cityscape.png';
import Warehouse from './Images/warehouse.png';
import Villa from './Images/home.png';

const Section2 = () => {
  return (
      <div className="section2">
        <div className="section2-heading">
          <h3>Property By Requirement</h3>
          <h1>Explore Apartment <span className="section2-heading-word">Types</span></h1>
        </div>
        <div className="section2-card">
          <div className="card-border">
            <div className="platform">
              <div className="icon-border"><i></i><FaBuilding className="ic-icon"/></div>
              <div className="card-words">
                <h4 className="card-name1">Commercial</h4>
                <h4 className="card-subname">6 Properties</h4>
              </div>
            </div>
          </div>
          <div className="card-border">
            <div className="platform">
              <div className="icon-border"><FaWarehouse className="ic-icon"/></div>
              <div className="card-words">
                <h4 className="card-name2">Warehouse</h4>
                <h4 className="card-subname">6 Properties</h4>
              </div>
            </div>
          </div>
          <div className="card-border">
            <div className="platform">
              <div className="icon-border"><FaHouseUser className="ic-icon"/></div>
              <div className="card-words">
                <h4 className="card-name3">Villa</h4>
                <h4 className="card-subname">6 Properties</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Section2;
