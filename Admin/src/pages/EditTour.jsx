import React, { useState, useEffect } from 'react';
import { Upload, X, ArrowLeft, Loader2, Save } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    duration: '',
    availableDates: '',
    seats: '',
    description: ''
  });

  useEffect(() => {
    // Simulate fetching tour data by ID
    setTimeout(() => {
      // Mock data based on the ID (matching Tours.jsx dummy data)
      const mockTours = {
        '1': { name: 'Paris Romance Tour', location: 'Paris, France', price: '599', duration: '4 Days', availableDates: 'Mar 15 - Mar 19', seats: '20', description: 'Experience the city of lights with your loved one.' },
        '2': { name: 'Bali Tropical Escape', location: 'Bali, Indonesia', price: '899', duration: '7 Days', availableDates: 'Apr 05 - Apr 12', seats: '15', description: 'Relax in the tropical paradise of Bali.' },
        '3': { name: 'Swiss Alps Hiking', location: 'Interlaken, Switzerland', price: '1200', duration: '5 Days', availableDates: 'May 10 - May 15', seats: '10', description: 'Breathtaking views and adventurous trails.' }
      };

      const tour = mockTours[id] || mockTours['1'];
      setFormData(tour);
      setFetching(false);
    }, 800);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API update call
    setTimeout(() => {
      setLoading(false);
      navigate('/tours');
    }, 1500);
  };

  if (fetching) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/tours" className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Tour Package</h1>
          <p className="text-sm text-slate-500">Update the details for #TR-100{id}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 lg:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Tour Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Location</label>
              <input 
                type="text" 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Price ($)</label>
              <input 
                type="number" 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Duration</label>
              <input 
                type="text" 
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Available Dates</label>
              <input 
                type="text" 
                value={formData.availableDates}
                onChange={(e) => setFormData({...formData, availableDates: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Total Seats</label>
              <input 
                type="number" 
                value={formData.seats}
                onChange={(e) => setFormData({...formData, seats: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2 lg:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Description</label>
              <textarea 
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link 
            to="/tours"
            className="px-8 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </Link>
          <button 
            type="submit"
            disabled={loading}
            className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : (
              <>
                <Save size={20} />
                Update Tour
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTour;
