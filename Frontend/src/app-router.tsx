import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import { routes } from './utils/routes';
import CollectionDetail from './pages/collectionDetail';
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path={routes.collectionDetail} element={<CollectionDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
