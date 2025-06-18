import React from 'react';

const TriggerMarketing = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md shadow-lg text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">🔥 Promo Spesial!</h2>
        <p className="mb-4 text-gray-600">Nikmati diskon 50% untuk semua layanan catering bulan ini!</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default TriggerMarketing;
