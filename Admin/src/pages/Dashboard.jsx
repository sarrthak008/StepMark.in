import React from 'react';
import { Users, Map, ClipboardList, Clock, TrendingUp, Star } from 'lucide-react';

const StatCard = ({ title, value, icon, color, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      {trend && (
        <p className={`text-xs mt-2 font-medium flex items-center gap-1 ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          <TrendingUp size={12} className={trend < 0 ? 'rotate-180' : ''} />
          {Math.abs(trend)}% from last month
        </p>
      )}
    </div>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      {icon}
    </div>
  </div>
);

const Dashboard = () => {
  const recentBookings = [
    { id: '#BK-1205', customer: 'John Doe', tour: 'Paris City Tour', date: 'Mar 15, 2024', status: 'Confirmed', amount: '$249' },
    { id: '#BK-1206', customer: 'Alice Smith', tour: 'Bali Beach Resort', date: 'Mar 18, 2024', status: 'Pending', amount: '$799' },
    { id: '#BK-1207', customer: 'Mike Johnson', tour: 'Swiss Alps Hiking', date: 'Mar 20, 2024', status: 'Cancelled', amount: '$1,200' },
    { id: '#BK-1208', customer: 'Sarah Brown', tour: 'Dubai Desert Safari', date: 'Mar 22, 2024', status: 'Confirmed', amount: '$150' },
  ];

  const recentReviews = [
    { id: 1, user: 'Robert Fox', tour: 'Paris City Tour', rating: 5, comment: 'Absolutely amazing experience! The guide was very knowledgeable.', date: '2 hours ago' },
    { id: 2, user: 'Jane Cooper', tour: 'Bali Beach Resort', rating: 4, comment: 'Great location and service. Highly recommended.', date: '5 hours ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Tours" 
          value="42" 
          icon={<Map className="text-blue-600" size={24} />} 
          color="bg-blue-50"
          trend={12}
        />
        <StatCard 
          title="Total Bookings" 
          value="1,280" 
          icon={<ClipboardList className="text-purple-600" size={24} />} 
          color="bg-purple-50"
          trend={8.5}
        />
        <StatCard 
          title="Total Users" 
          value="3,842" 
          icon={<Users className="text-orange-600" size={24} />} 
          color="bg-orange-50"
          trend={15}
        />
        <StatCard 
          title="Pending Requests" 
          value="15" 
          icon={<Clock className="text-rose-600" size={24} />} 
          color="bg-rose-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 text-lg">Recent Bookings</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase">
                  <th className="px-6 py-4">Booking ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Tour</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{booking.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{booking.customer}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{booking.tour}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        booking.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' :
                        booking.status === 'Pending' ? 'bg-amber-50 text-amber-600' :
                        'bg-rose-50 text-rose-600'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 text-lg">Recent Reviews</h3>
          </div>
          <div className="p-6 space-y-6 flex-1">
            {recentReviews.map((review) => (
              <div key={review.id} className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{review.user}</h4>
                    <p className="text-xs text-slate-500">{review.tour}</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">"{review.comment}"</p>
                <p className="text-[10px] text-slate-400 font-medium uppercase">{review.date}</p>
                {review.id !== recentReviews.length && <div className="border-t border-slate-50 pt-3" />}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-100">
            <button className="w-full py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
