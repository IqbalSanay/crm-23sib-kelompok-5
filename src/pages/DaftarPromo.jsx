import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DaftarPromo = () => {
  const { state } = useLocation();
  const promo = state?.promoBaru;

  const awalExpired = new Date(promo?.selesai) < new Date();
  const [isExpired, setIsExpired] = useState(awalExpired);

  if (!promo) return <p className="p-6 text-red-600">Tidak ada data promo yang dikirim.</p>;

  const handleStart = () => setIsExpired(false);
  const handleStop = () => setIsExpired(true);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Promo Disimpan</h2>

      <div className="bg-white rounded-lg shadow flex justify-between items-center p-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg">{promo.namaPromo}</h3>
          <p className="text-sm text-gray-600">{promo.deskripsi}</p>
        </div>

        <div className="text-center mx-6">
          <p className="font-semibold">15,569</p>
          <p className="text-xs text-gray-500">Today Spend</p>
        </div>

        <div className="text-center mx-6">
          <p className="font-semibold text-blue-700">+2</p>
          <p className="text-xs text-gray-500">Sessions</p>
        </div>

        <div>
          <span className={`px-3 py-1 rounded text-sm font-semibold ${isExpired ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {isExpired ? 'Expired' : 'On Going'}
          </span>
        </div>

        <div className="flex gap-2 mx-6">
          <button onClick={handleStart} className="bg-gray-200 hover:bg-green-200 p-2 rounded" title="Start">▶️</button>
          <button onClick={handleStop} className="bg-gray-200 hover:bg-red-200 p-2 rounded" title="Stop">⏹️</button>
        </div>
      </div>
    </div>
  );
};

export default DaftarPromo;
