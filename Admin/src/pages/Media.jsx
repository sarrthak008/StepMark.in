import React from 'react';
import { Upload, Grid, List, Search, MoreVertical, FileText, Image as ImageIcon, Film } from 'lucide-react';

const Media = () => {
  const files = [
    { id: 1, name: 'paris_eiffel.jpg', type: 'image', size: '1.2 MB', date: 'Mar 10, 2024', preview: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=200&h=200&fit=crop' },
    { id: 2, name: 'bali_resort.jpg', type: 'image', size: '2.5 MB', date: 'Mar 08, 2024', preview: 'https://images.unsplash.com/photo-1544918877-464a133f746d?w=200&h=200&fit=crop' },
    { id: 3, name: 'swiss_promo.mp4', type: 'video', size: '45.0 MB', date: 'Mar 05, 2024', preview: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop' },
    { id: 4, name: 'tour_terms.pdf', type: 'document', size: '150 KB', date: 'Mar 01, 2024', preview: null },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Library</h1>
          <p className="text-sm text-slate-500">Upload and manage tour assets and documents</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium inline-flex items-center gap-2 transition-all">
          <Upload size={20} />
          Upload Files
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search media..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
          <button className="p-2 text-blue-600 bg-blue-50 rounded-lg"><Grid size={18} /></button>
          <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg"><List size={18} /></button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {files.map((file) => (
          <div key={file.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center">
              {file.preview ? (
                <img src={file.preview} alt={file.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="text-slate-300">
                  <FileText size={48} />
                </div>
              )}
              {file.type === 'video' && <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white"><Film size={24} /></div>}
            </div>
            <div className="p-3 flex items-start justify-between">
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-slate-800 truncate">{file.name}</p>
                <p className="text-[10px] text-slate-400 mt-0.5 uppercase font-medium">{file.size} • {file.date}</p>
              </div>
              <button className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
