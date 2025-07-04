import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../styles/builderdetail.css";

const BuilderDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = useParams();

  const builder = location.state?.builder;

  if (!builder) {
    return (
      <div className="builder-detail">
        <p>No builder data available. Go back to the list.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  return (
    <div className="builder-detail">
      <h1 className="page-title">
        The Journey of <span>{builder.name}:</span> Crafting the Future of
        Decentralization
      </h1>

      <div className="builder-image-wrapper">
        <img
          src={
            builder.profileImageUri ||
            "https://imgcdn.stablediffusionweb.com/2024/10/17/7e7d0840-721f-4bd6-a823-668803318b7c.jpg"
          }
          alt={builder.name}
          className="builder-image"
        ></img>
        <div className="builder-details">
          <p>{builder.bio || "No bio provided"}</p>
          <div className="builder-username">
            <p>{builder.skills}</p>
          </div>
        </div>
      </div>
      <div className="builder-socials">
        <h4>Discover Who {builder.name} Really Is</h4>
        <div className="social-links">
            <div className="single-social">
                <h6>GitHub Link:</h6>
                <a href={builder.github} target="_blank" rel="noopener noreferrer">{builder.github}</a>
            </div>
            <div className="single-social">
                <h6>Twitter/X Link:</h6>
                <a href={builder.github} target="_blank" rel="noopener noreferrer">{builder.github}</a>
            </div>
            <div className="single-social">
                <h6>Website Link:</h6>
                <a href={builder.github} target="_blank" rel="noopener noreferrer">{builder.github}</a>
            </div>
            <div className="single-social">
                <h6>GitHub Link:</h6>
                <a href={builder.github} target="_blank" rel="noopener noreferrer">{builder.github}</a>
            </div>
        </div>
      </div>
    
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
    </div>
  );
};

export default BuilderDetail;
