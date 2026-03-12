import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  PlusCircle, 
  ClipboardList, 
  Users, 
  Star, 
  Image as ImageIcon, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { title: 'Tours', icon: <Map size={20} />, path: '/tours' },
    { title: 'Add Tour', icon: <PlusCircle size={20} />, path: '/add-tour' },
    { title: 'Bookings', icon: <ClipboardList size={20} />, path: '/bookings' },
    { title: 'Users', icon: <Users size={20} />, path: '/users' },
    { title: 'Reviews', icon: <Star size={20} />, path: '/reviews' },
    { title: 'Media', icon: <ImageIcon size={20} />, path: '/media' },
    { title: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-slate-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <Map className="text-blue-600" />
          StepMark
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
            `}
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button 
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
