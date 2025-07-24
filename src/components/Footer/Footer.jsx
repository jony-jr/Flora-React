import floralogo from '../../assets/Images/flora_logo.webp'
import './Footer.css'
export default function Footer() {
  return (
    <>
      <footer>
        <section className='footer-sec-one bg-danger-subtle'>
          <div className="container  p-5">
            <div className="row g-3 g-md-5">
              <div className="col-md-4">
                <div className="">
                  <h4>About Us</h4>
                  <p>We are passionate about flowers and providing the best quality,Your one-stop shop for beautiful flowers.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <h4>Why we are special?</h4>
                  <ul>
                    <li>We care about environment.</li>
                    <li>We are trusted by hundreds of clients.</li>
                    <li>Social media loves us!</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <h4>Opening Hours</h4>
                  <ul>
                    <li>Monday - Friday: 9 AM - 6 PM</li>
                    <li>Saturday: 10 AM - 4 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='footer-sec-two'>
          <div className="container p-5  ">
            <figure className='d-flex justify-content-center align-items-center flex-column'>
              <img className='user-select-none' src={floralogo} alt="FLora Logo" />
              <figcaption className='user-select-none'>&copy; 2025 Ahmed Wael. All rights reserved.</figcaption>
            </figure>
            <div className=" d-flex justify-content-center align-items-end gap-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
