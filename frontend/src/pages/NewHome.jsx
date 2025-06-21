import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";

const NewHome = () => (
  <>
    <HeroSection />
    <useScrollReveal />
    <div className="nums">
      <div className="num">
        <h2 className="num__title">Step 1</h2>
        <p className="num__desc">Explore Builder Profiles</p>
      </div>
      <div className="num">
        <h2 className="num__title">Step 2</h2>
        <p className="num__desc">Read Their Story</p>
      </div>
      <div className="num">
        <h2 className="num__title">Step 3</h2>
        <p className="num__desc">Choose Donation Amount</p>
      </div>
      <div className="num">
        <h2 className="num__title">Step 4</h2>
        <p className="num__desc">Send Crypto Instantly</p>
      </div>
    </div>
    <div className="about">
      <img src="/src/assets/about.png" alt="About Us" className="about__img" />
      <div className="about__text">
        <h2 className="reveal-heading">
          We Believe in Builders. We Power Their Vision Globally.
        </h2>

        <p className="desc">
          We’re a community-driven platform connecting builders to supporters
          through transparent, crypto-based donations. We don’t rank or
          gatekeep—we just help real people build real things with your support.
        </p>
      </div>
    </div>
    <Testimonials />
    <BlogSection />
    <Footer />
  </>
);

export default NewHome;
