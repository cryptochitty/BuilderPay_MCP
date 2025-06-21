import '/src/styles/Footer.css'; // Assuming you have a CSS file for styles

const Footer = () => {
    return (
    
        <div className="footer">
            <div className='ctasection'>
                <h2 className='cta-title'>Every Dream Starts With a Supporter</h2>
                <button className='footer-btn'>Explore Builders</button>
            </div>
            <p className="footer__text">
                &copy; {new Date().getFullYear()} BuilderPay. All rights reserved.
            </p>
        
        </div>
);
}

export default Footer;