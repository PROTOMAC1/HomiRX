import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Propertie from './Pages/Properties/Properties/PropertiesPage';
import PropertieDetail from './Pages/Properties/PropertiesDetailsPage/PropertiesDetailsPage';
import AllCategorys from './Pages/Properties/AllCategorys/AllCategorys';
import Members from './Pages/Agents/Members/Members';
import AgentsPages from './Pages/Agents/Agents Pages/AgentsPages';
import AgentsProfile from './Pages/Agents/Agents Profile/AgentsProfile';
import ScrollToTop from './ScrollToTop';
import Pagepage from './Pages/Page/Pagepage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Propertie />} />
        <Route path='/propertiesdetails' element={<PropertieDetail />} />
        <Route path='/allcategorys' element={<AllCategorys />} />
        <Route path='/members' element={<Members />} />
        <Route path='/agentspages' element={<AgentsPages />} />
        <Route path='/agentsprofile' element={<AgentsProfile />} />
        <Route path='/pagepage' element={<Pagepage />} />
      </Routes>
    </Router>
  );
}

export default App;
