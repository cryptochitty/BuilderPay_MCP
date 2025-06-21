import '/src/styles/blogcard.css'; // Assuming you have a CSS file for styling

const BlogCard = ({ image, title, description }) => (
    <div className="blog-card">
        <img src={image} alt={title} className="blog-card-image" />
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
    </div>
);

export default BlogCard;