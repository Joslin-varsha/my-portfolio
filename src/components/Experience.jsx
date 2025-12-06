import "../Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-grid">

        <div className="exp-card">
          <div className="exp-top">
            <img src="/ak.webp" alt="AK Infopark Logo" className="company-logo" />

            <div>
              <h3>Full Stack Development Training</h3>
              <h4 className="company">AK Infopark - Parvathipuram</h4>
              <p className="duration">Present</p>
            </div>
          </div>

          <ul>
            <li>Learning full-stack development including HTML, CSS, JavaScript, Bootstrap, and React.js.</li>
            <li>Developed projects such as a Web Calculator, To-Do App, and Amazon Clone.</li>
            <li>Understanding component-based architecture and reusable UI patterns.</li>
            <li>Started backend development using Python and Flask.</li>
            <li>Working with MySQL for database integration and data handling.</li>
          </ul>
        </div>

        <div className="exp-card">
          <div className="exp-top">
            <img src="/ak.webp" alt="AK Infopark Logo" className="company-logo" />

            <div>
              <h3>Full Stack Developer Intern</h3>
              <h4 className="company">AK Infopark - Parvathipuram</h4>
              <p className="duration">1 Month Internship</p>
            </div>
          </div>

          <ul>
            <li>Learned practical front-end skills using HTML, CSS, JavaScript, and Bootstrap.</li>
            <li>Created a complete Flipkart Frontend UI to practice layout techniques.</li>
            <li>Strengthened understanding of responsiveness and UI structuring.</li>
            <li>Improved confidence in design workflows.</li>
          </ul>
        </div>

        <div className="exp-card">
          <div className="exp-top">
            <img src="/tt.png" alt="Talent Turbo Logo" className="company-logo" />

            <div>
              <h3>Front-End Developer Intern</h3>
              <h4 className="company">Talent Turbo - Nagercoil</h4>
              <p className="duration">1 Week Internship</p>
            </div>
          </div>

          <ul>
            <li>Learned the fundamentals of HTML, CSS, and JavaScript.</li>
            <li>Created basic webpage structures and clean UI layouts.</li>
            <li>Gained understanding of responsive design principles.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
