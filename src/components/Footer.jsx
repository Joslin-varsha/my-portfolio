import "../Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">

              <div className="footer-brand">
          <h1 className="brand-name">Joslin Varsha</h1>
          <p className="brand-desc">
            Frontend Developer crafting elegant, responsive and high-performance digital experiences.
          </p>
        </div>

        <div className="footer-columns">

          <div className="footer-column">
            <h3>Navigate</h3>
            <a href="#about">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certification">Certificates</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Social</h3>
            <a href="https://www.linkedin.com/in/joslin-varsha-v-19060629b"
                target="_blank">LinkedIn</a>
            <a href="https://github.com/Joslin-varsha" target="_blank">GitHub</a>
            <a href="" target="_blank">Portfolio</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joslinvarsha55@gmail.com"
                target="_blank" rel="noopener noreferrer">joslinvarsha55@gmail.com</a>
              </p>
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
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Joslin Varsha — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
