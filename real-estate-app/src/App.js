import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Propertie from './Pages/Properties/PropertiesPage';
import PropertieDetail from './Pages/PropertiesDetailsPage/PropertiesDetailsPage';
import AllCategorys from './Pages/AllCategorys/AllCategorys';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Propertie />} />
        <Route path='/propertiesdetails' element={<PropertieDetail />} />
        <Route path='/allcategorys' element={<AllCategorys />} />
      </Routes>
    </Router>
  );
}

export default App;
