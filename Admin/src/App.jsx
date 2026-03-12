import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tours from './pages/Tours';
import AddTour from './pages/AddTour';
import Bookings from './pages/Bookings';
import Users from './pages/Users';
import Reviews from './pages/Reviews';
import Media from './pages/Media';
import Settings from './pages/Settings';
import Login from './pages/Login';
import EditTour from './pages/EditTour';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const location = useLocation();

  // If not authenticated and not on login page, redirect to login
  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and on login page, redirect to dashboard
  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
      <Route
        path="*"
        element={
          <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
            <Sidebar onLogout={handleLogout} />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6 md:p-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tours" element={<Tours />} />
                  <Route path="/add-tour" element={<AddTour />} />
                  <Route path="/edit-tour/:id" element={<EditTour />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Dashboard />} />
                </Routes>
              </main>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
