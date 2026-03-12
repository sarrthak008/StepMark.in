import React from 'react';
import { Star, Trash2, EyeOff, MapPin, User } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      userName: 'Robert Fox',
      tourName: 'Paris City Tour',
      rating: 5,
      comment: 'Absolutely amazing experience! The guide was very knowledgeable and the itinerary was perfect. The view from the Eiffel Tower was breathtaking.',
      date: 'Mar 10, 2024',
      avatar: 'https://i.pravatar.cc/150?u=robert',
    },
    {
      id: 2,
      userName: 'Jane Cooper',
      tourName: 'Bali Beach Resort',
      rating: 4,
      comment: 'Great location and service. The beach was beautiful. I wish the transportation from the airport was a bit faster, but overall a great trip.',
      date: 'Mar 08, 2024',
      avatar: 'https://i.pravatar.cc/150?u=jane',
    },
    {
      id: 3,
      userName: 'Cody Fisher',
      tourName: 'Swiss Alps Hiking',
      rating: 5,
      comment: 'The mountains were spectacular. Hiking trails were well-marked. A must-visit for nature lovers.',
      date: 'Mar 05, 2024',
      avatar: 'https://i.pravatar.cc/150?u=cody',
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Customer Reviews</h1>
        <p className="text-sm text-slate-500">Monitor and manage feedback from travelers</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.userName} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-50" />
                    <div>
                      <h4 className="font-bold text-slate-900">{review.userName}</h4>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                    <MapPin size={12} />
                    {review.tourName}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>
              </div>

              <div className="md:w-32 flex flex-row md:flex-col gap-2 pt-2 md:pt-0 justify-end md:justify-start">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors border border-slate-100">
                  <EyeOff size={16} />
                  <span className="md:hidden lg:inline">Hide</span>
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors border border-red-100">
                  <Trash2 size={16} />
                  <span className="md:hidden lg:inline">Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
