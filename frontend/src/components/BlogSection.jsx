import "/src/styles/blogsection.css";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-section__header">
        <h1 className="blog-section__title">Latest Blogs</h1>
        <button className="blog-section__button">View All</button>
      </div>
      <div className="blog-section__cards">
        <BlogCard
          image="/src/assets/blogimg.png"
          title="The Future of Builder Support"
          description="Explore how decentralized platforms are transforming how we support builders worldwide."
        />
        <BlogCard
          image="/src/assets/blogimg.png"
          title="The Future of Builder Support"
          description="Explore how decentralized platforms are transforming how we support builders worldwide."
        />
        <BlogCard
          image="/src/assets/blogimg.png"
          title="The Future of Builder Support"
          description="Explore how decentralized platforms are transforming how we support builders worldwide."
        />
      </div>
    </div>
  );
};

export default BlogSection;
