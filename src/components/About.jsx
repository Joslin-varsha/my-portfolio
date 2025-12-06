import "../About.css";

function About() {
  return (
    <div className="home-container">
      <section className="home-section" id="about">
        <div className="home-text">
          <h3>Hello, I'm</h3>
          <h1>Joslin Varsha</h1>
          <h4>Full Stack Web Developer</h4>
          <p>
            Aspiring full-stack developer skilled in front-end development and learning back-end with Python. Passionate about building clean, responsive, and user-friendly web applications. Eager to apply my skills to real projects and grow as a developer.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a className="btn-outline" href="/JOSLIN VARSHA.Resume1.pdf" download="JOSLIN VARSHA.Resume1.pdf" >Download CV</a>
          </div>
        </div>

        <div className="home-image">
  <img src="/portfolio61.png" alt="Joslin Varsha" />
</div>
      </section>
    </div>
  );
}

export default About;
