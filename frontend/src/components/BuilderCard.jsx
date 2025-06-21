import React from 'react';
import { Link } from 'react-router-dom';

function BuilderCard({ builder }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={builder.image} alt={builder.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{builder.name}</h2>
      <p>{builder.project}</p>
      <Link to={`/builder/${builder.id}`} className="text-blue-500 mt-2 inline-block">View Profile</Link>
    </div>
  );
}

export default BuilderCard;