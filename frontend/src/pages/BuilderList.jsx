import React, { useEffect, useState } from "react";
import { getContract } from "../utils/contract";
import "../styles/builderlist.css";
import { useNavigate } from "react-router-dom";

const BuilderList = () => {
  const [builders, setBuilders] = useState([]);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleKnowMore = (builder) => {
    navigate(`/builder/${builder.username}`, { state: { builder } });
  };

  useEffect(() => {
    const fetchBuilders = async () => {
      try {
        const contract = await getContract();
        const allBuilders = await contract.getAllBuilders();
        setBuilders(allBuilders);
      } catch (err) {
        console.error("Error fetching builders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBuilders();
  }, []);

  if (loading) return <div className="loading">Loading builders...</div>;

  if (builders.length === 0)
    return <div className="no-builders">No builders found.</div>;

  return (
    <div className="builder-list-container">
      <h2 className="page-title">
        Meet the Minds Building Tomorrow’s{" "}
        <span>Decentralized World Today</span>
      </h2>
      <div className="builder-card-grid">
        {builders.map((builder, index) => {
          const imageSrc =
            builder.profileImageUri && builder.profileImageUri.trim() !== ""
              ? builder.profileImageUri
              : "https://imgcdn.stablediffusionweb.com/2024/10/17/7e7d0840-721f-4bd6-a823-668803318b7c.jpg";
          return (
            <div className="builder-card" key={index}>
              <div className="card-image-wrapper">
                <img
                  src={imageSrc}
                  alt={builder.name || "Builder"}
                  className="card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://imgcdn.stablediffusionweb.com/2024/10/17/7e7d0840-721f-4bd6-a823-668803318b7c.jpg";
                  }}
                />
                <div className="image-shadow"></div>
              </div>
              <div className="card-content">
                <h2 className="card-title">{builder.name}</h2>
                <p className="card-bio">
                  {builder.bio?.split(" ").slice(0, 10).join(" ")}
                  {builder.bio?.split(" ").length > 10 && "..."}
                </p>

                <button
                  className="knowmore"
                  onClick={() => handleKnowMore(builder)}
                >
                  Know More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuilderList;
