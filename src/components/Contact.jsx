import "../Contact.css";

function Contact() {
  function showPopup() {
    alert("Message Sent Successfully!");
  }

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-wrapper">

        <form
          className="contact-form fade-left"
          action="https://formsubmit.co/joslinvarsha55@gmail.com"
          method="POST"
          onSubmit={showPopup}   
        >
          <h3>Let's Talk</h3>

          
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="hidden"
            name="_next"
            value={window.location.href}   
          />

          <div className="input-group">
            <input type="text" name="name" required placeholder=" " />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required placeholder=" " />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" rows="4" required placeholder=" "></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        <div className="contact-details fade-right">

          <div className="detail-card">
            <div>
              <h4>Email</h4>
              <p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joslinvarsha55@gmail.com"
                target="_blank" rel="noopener noreferrer">joslinvarsha55@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="detail-card">
            <div>
              <h4>Phone</h4>
               <a href="tel:+919940843790">+91 9940843790</a>
            </div>
          </div>

          <div className="detail-card">
  <div>
    <h4>Location</h4>
    <p>
      <a
        href="https://www.google.com/maps/place/Kanniyakumari,+Tamil+Nadu,+India"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vellichanthai,Kanniyakumari, Tamil Nadu, India
      </a>
    </p>
  </div>
</div>


          <div className="detail-card">
            <div>
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/joslin-varsha-v-19060629b"
                target="_blank"
              >
                Visit Profile
              </a>
            </div>
          </div>

          <div className="detail-card">
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/Joslin-varsha" target="_blank">View Repositories</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

