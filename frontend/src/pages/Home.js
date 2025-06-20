import React, { useEffect, useState } from 'react';
import BuilderCard from '../components/BuilderCard';

function Home() {
  const [builders, setBuilders] = useState([]);

  useEffect(() => {
    fetch('https://builderpaymcp-backend.onrender.com/api/builders')
      .then(res => res.json())
      .then(data => setBuilders(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Support Builders Directly</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {builders.map(builder => (
          <BuilderCard key={builder.id} builder={builder} />
        ))}
      </div>
    </div>
  );
}

export default Home;