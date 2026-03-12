import React, { useState } from 'react';
import { Check, X, Phone, User, Calendar, MapPin, AlertCircle } from 'lucide-react';

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: 'Alex Johnson',
      phone: '+1 234 567 890',
      tour: 'Paris City Tour',
      date: 'Mar 15, 2024',
      persons: 2,
      status: 'Pending',
    },
    {
      id: 2,
      customer: 'Sarah Connor',
      phone: '+1 987 654 321',
      tour: 'Bali Beach Escape',
      date: 'Apr 05, 2024',
      persons: 4,
      status: 'Confirmed',
    },
    {
      id: 3,
      customer: 'John Wick',
      phone: '+1 555 000 999',
      tour: 'Swiss Alps Hiking',
      date: 'May 10, 2024',
      persons: 1,
      status: 'Cancelled',
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setBookings(prevBookings => 
      prevBookings.map(booking => 
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Pending': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Cancelled': return 'bg-rose-50 text-rose-600 border-rose-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Bookings</h1>
          <p className="text-sm text-slate-500">View and handle all customer tour reservations</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 shadow-sm animate-pulse">
          <AlertCircle size={14} />
          Click actions to update status
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Tour details</th>
                <th className="px-6 py-4">Reservation</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {booking.customer.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 leading-none mb-1.5">{booking.customer}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Phone size={12} />
                          {booking.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700 leading-none mb-1.5 uppercase tracking-wide">
                      <MapPin size={14} className="text-blue-500" />
                      {booking.tour}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User size={12} /> {booking.persons} Persons
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-1.5 text-sm text-slate-700 font-medium">
                      <Calendar size={14} className="text-slate-400" />
                      {booking.date}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${getStatusColor(booking.status)} transition-all duration-300`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleStatusChange(booking.id, 'Confirmed')}
                        className={`p-1.5 rounded-lg border border-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm ${booking.status === 'Confirmed' ? 'bg-emerald-600 text-white' : 'bg-white'}`}
                        title="Confirm Booking"
                      >
                        <Check size={18} />
                      </button>
                      <button 
                        onClick={() => handleStatusChange(booking.id, 'Cancelled')}
                        className={`p-1.5 rounded-lg border border-rose-100 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm ${booking.status === 'Cancelled' ? 'bg-rose-600 text-white' : 'bg-white'}`}
                        title="Cancel Booking"
                      >
                        <X size={18} />
                      </button>
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

export default Bookings;
