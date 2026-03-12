import React from 'react';
import { Mail, Phone, Calendar, MoreHorizontal, ShieldCheck } from 'lucide-react';

const Users = () => {
  const users = [
    {
      id: 1,
      name: 'Emma Wilson',
      email: 'emma.w@example.com',
      phone: '+44 7700 900077',
      totalBookings: 3,
      joinDate: 'Jan 12, 2024',
      avatar: 'https://i.pravatar.cc/150?u=emma',
    },
    {
      id: 2,
      name: 'Liam Neeson',
      email: 'liam.n@example.com',
      phone: '+33 6 12 34 56 78',
      totalBookings: 1,
      joinDate: 'Feb 05, 2024',
      avatar: 'https://i.pravatar.cc/150?u=liam',
    },
    {
      id: 3,
      name: 'Sophia Loren',
      email: 'sophia@example.com',
      phone: '+39 06 1234567',
      totalBookings: 5,
      joinDate: 'Dec 20, 2023',
      avatar: 'https://i.pravatar.cc/150?u=sophia',
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Directory</h1>
        <p className="text-sm text-slate-500">Manage all registered travelers on the platform</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase">
                <th className="px-6 py-4">User Information</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4 text-center">Bookings</th>
                <th className="px-6 py-4">Join Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{user.name}</h4>
                        <p className="text-xs text-slate-500 italic">Traveler</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Mail size={12} className="text-slate-400" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Phone size={12} className="text-slate-400" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                      {user.totalBookings}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                      <Calendar size={14} className="text-slate-400" />
                      {user.joinDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3 text-slate-400">
                      <button className="hover:text-blue-600 transition-colors"><ShieldCheck size={18} /></button>
                      <button className="hover:text-slate-900 transition-colors"><MoreHorizontal size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
