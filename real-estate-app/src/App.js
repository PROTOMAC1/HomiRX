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
import Pagepage from './Pages/Page/Testimonial/Pagepage';
import EventPage from './Pages/Page/EventPage/EventPage';
import OurPartner from './Pages/Page/OurPartner/OurPartner';
import ShopPage from './Pages/Page/ShopPage/ShopPage';
import Contect from './Pages/Contect/Contect';

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
        <Route path='/eventpage' element={<EventPage />} />
        <Route path='/ourpartner' element={<OurPartner />} />
        <Route path='/shoppage' element={<ShopPage />} />
        <Route path='/contect' element={<Contect />} />
      </Routes>
    </Router>
  );
}

export default App;