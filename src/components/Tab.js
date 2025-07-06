import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PublicTab from './PublicTab';
import AdminTab from './AdminTab';

const Tabs = () => {
  return (
    <div className="tabs-container">
      <nav className="tabs-navigation">
        <Link to="/" className="tab-link">Publik</Link>
        <Link to="/admin" className="tab-link">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PublicTab />} />
        <Route path="/admin" element={<AdminTab />} />
      </Routes>
    </div>
  );
};

export default Tabs;
