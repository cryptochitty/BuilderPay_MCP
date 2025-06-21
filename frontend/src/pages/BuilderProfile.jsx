import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import builders from 'C:/Chitty Babu/BuilderPayMCP_Project/backend/data/builders.json';

function BuilderProfile() {
  const { id } = useParams();
  const [builder, setBuilder] = useState(null);

  useEffect(() => {
    const found = builders.find(b => b.id === id);
    setBuilder(found);
  }, [id]);

  const donate = async () => {
    alert(`Send Celo or cUSD to ${builder.wallet}`);
  };

  if (!builder) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <img src={builder.image} alt={builder.name} className="w-64 h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{builder.name}</h1>
      <p className="mt-2">{builder.bio}</p>
      <p className="mt-2 font-mono text-sm">Wallet: {builder.wallet}</p>
      <button onClick={donate} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Donate</button>
    </div>
  );
}

export default BuilderProfile;