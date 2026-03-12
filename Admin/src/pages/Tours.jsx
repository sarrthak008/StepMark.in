import React from 'react';
import { Plus, Edit2, Trash2, Calendar, MapPin, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tours = () => {
  const tours = [
    {
      id: 1,
      name: 'Paris Romance Tour',
      location: 'Paris, France',
      price: '$599',
      duration: '4 Days',
      availableDates: 'Mar 15 - Mar 19',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      name: 'Bali Tropical Escape',
      location: 'Bali, Indonesia',
      price: '$899',
      duration: '7 Days',
      availableDates: 'Apr 05 - Apr 12',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      name: 'Swiss Alps Hiking',
      location: 'Interlaken, Switzerland',
      price: '$1200',
      duration: '5 Days',
      availableDates: 'May 10 - May 15',
      image: 'https://images.unsplash.com/photo-1531366930003-8a39a759082d?w=400&h=250&fit=crop',
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tour Packages</h1>
          <p className="text-sm text-slate-500">Manage and oversee all travel packages</p>
        </div>
        <Link 
          to="/add-tour"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium inline-flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
        >
          <Plus size={20} />
          Add New Tour
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase">
                <th className="px-6 py-4">Tour Details</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Dates</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tours.map((tour) => (
                <tr key={tour.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={tour.image} alt={tour.name} className="w-16 h-12 rounded-lg object-cover" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{tour.name}</h4>
                        <p className="text-xs text-slate-500">ID: #TR-100{tour.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                      <MapPin size={14} className="text-slate-400" />
                      {tour.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-semibold text-slate-900 text-sm">
                      <DollarSign size={14} className="text-slate-400" />
                      {tour.price.replace('$', '')}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-slate-400" />
                      {tour.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-400" />
                      {tour.availableDates}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <Link 
                        to={`/edit-tour/${tour.id}`}
                        className="p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <button className="p-2 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                        <Trash2 size={18} />
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

export default Tours;
