import "../Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">

        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-items">

            <div className="skill-btn">
              <img src="/Html.webp" alt="html" />
              <span>HTML</span>
            </div>

            <div className="skill-btn">
              <img src="/css.webp" alt="css" />
              <span>CSS</span>
            </div>

            <div className="skill-btn">
              <img src="/js.webp" alt="js" />
              <span>JavaScript</span>
            </div>

            <div className="skill-btn">
              <img src="/Bs.webp" alt="bootstrap" />
              <span>Bootstrap</span>
            </div>

            <div className="skill-btn">
              <img src="/react.png" alt="react" />
              <span>React.js</span>
            </div>

          </div>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-items">

            <div className="skill-btn">
              <img src="/py.png" alt="python" />
              <span>Python</span>
            </div>

            <div className="skill-btn">
              <img src="/flask.webp" alt="flask" />
              <span>Flask</span>
            </div>

            <div className="skill-btn">
              <img src="/mysql.webp" alt="mysql" />
              <span>MySQL</span>
            </div>

          </div>
        </div>

        
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-items">

            <div className="skill-btn">
              <img src="/github.webp" alt="github" />
              <span>Github</span>
            </div>

            <div className="skill-btn">
              <img src="/vscode.webp" alt="vscode" />
              <span>VS Code</span>
            </div>

            <div className="skill-btn">
              <img src="/netlify.webp" alt="netlify" />
              <span>Netlify</span>
            </div>

            
            <div className="skill-btn">
              <img src="/postman.webp" alt="python" />
              <span>Postman</span>
            </div>

          </div>
        </div>

        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-items">

            <div className="skill-btn">
              <img src="/java.webp" alt="java" />
              <span>Java</span>
            </div>

            <div className="skill-btn">
              <img src="/py.png" alt="python" />
              <span>Python</span>
            </div>

            <div className="skill-btn">
              <img src="/js.webp" alt="js" />
              <span>JavaScript</span>
            </div>

          </div>
        </div>

        <div className="skill-category full-row">
          <h3>Soft Skills</h3>
          <div className="skill-items">

            <div className="skill-btn soft"><span>Teamwork</span></div>
            <div className="skill-btn soft"><span>Problem Solving</span></div>
            <div className="skill-btn soft"><span>Analytical Thinking</span></div>
            <div className="skill-btn soft"><span>Critical Thinking</span></div>
            <div className="skill-btn soft"><span>Leadership</span></div>
            <div className="skill-btn soft"><span>Time Management</span></div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;

