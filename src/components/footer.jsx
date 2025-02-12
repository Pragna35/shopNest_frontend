import "../styles/footer.css"

const Footer = () => {
    return (
        <>
        <div className="footer-container d-flex justify-content-between align-items-center mt-4">
            <div className="footer-logo d-flex align-items-center">
                <img src="/shopping-bag-logo.avif" alt="logo" />
                <h3>ShopNest</h3>
            </div>

       <div className="icon-container d-flex gap-3 ">
       <div className="social-icon">
            <i class="ri-twitter-line"></i>
            </div>
            <div className="social-icon">
            <i class="ri-instagram-line"></i>
            </div>
            <div className="social-icon">
            <i class="ri-facebook-line"></i>
            </div>
            <div className="social-icon">
            <i class="ri-google-line"></i>
            </div>
       </div>
           
        </div>
      
        </>
    )
}

export default Footer;