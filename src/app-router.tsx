import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/album/:id" element={<AlbumDetails />} /> */}
    </Routes>
  );
}

export default AppRouter;
