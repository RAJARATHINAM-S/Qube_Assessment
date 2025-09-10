import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import { routes } from './utils/routes';
import CollectionDetail from './pages/collectionDetail';
import AgoraMedCareLayout from './components/agora-med-care/Layout';
import AgoraMedCareDashboard from './components/agora-med-care/Dashboard';
import DoctorsPage from './components/agora-med-care/Doctors';
import AppointmentsPage from './components/agora-med-care/Appointments';

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Original Music App Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path={routes.collectionDetail} element={<CollectionDetail />} />
        
        {/* Agora-Med-Care Routes */}
        <Route path="/agora-med-care" element={<AgoraMedCareLayout />}>
          <Route path="dashboard" element={<AgoraMedCareDashboard />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="patients" element={<div className="p-4"><h2>Patients - Coming Soon</h2></div>} />
          <Route path="services" element={<div className="p-4"><h2>Services - Coming Soon</h2></div>} />
          <Route index element={<AgoraMedCareDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
