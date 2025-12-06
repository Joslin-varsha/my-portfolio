import "../Projects.css";

const Projects = () => {

  const mainProjects = [
    {
      title: "Web Calculator App",
      description:
        "Built an interactive calculator using JavaScript with real-time calculations and smooth UI.",
      img: "/calculator.png",   
      tools: ["HTML", "CSS", "JavaScript","Bootstrap"],
      link: "https://joslin-varsha.github.io/Calculator-project/",
    },
    {
      title: "To-Do Web App",
      description:
        "Created a To-Do application using React with add, delete, complete features using React Hooks.",
      img: "/todo.png",
      tools: ["HTML", "CSS", "JavaScript","Bootstrap"],
      link: "https://joslin-varsha.github.io/To-do-App/",
    },
  ];


  const practiceProjects = [
    {
      title: "Flipkart UI Clone",
      description:
        "Practiced UI development by creating a Flipkart homepage design using HTML, CSS & Bootstrap.",
      img: "/flipkart.png",
      tools: ["HTML", "CSS", "Bootstrap","JavaScript"],
      link: "https://ornate-cobbler-917a73.netlify.app/",
    },
    {
      title: "Amazon UI Clone",
      description:
        "Learning-based Amazon UI clone using React, focusing on layout, product display, and banners.",
      img: "/amazon.png",
      tools: ["React", "HTML", "CSS", "Bootstrap","JavaScript"],
      link: "https://vocal-twilight-97f267.netlify.app/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      
     <h2 className="project-title">My Projects</h2>

      <div className="projects-container">
        {mainProjects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <img src={project.img} alt={project.title} className="project-img" />

            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            
            <div className="tools-used">
              {project.tools.map((tool, i) => (
                <span className="tool-badge" key={i}>{tool}</span>
              ))}
            </div>

            <a href={project.link} className="project-btn" target="_blank" rel="noreferrer">
              View Project
            </a>
          
          </div>
        ))}
      </div>


      <h2 className="practice-title">Practice Projects</h2>

      <div className="projects-container">
        {practiceProjects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <img src={project.img} alt={project.title} className="project-img" />

            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tools-used">
              {project.tools.map((tool, i) => (
                <span className="tool-badge" key={i}>{tool}</span>
              ))}
            </div>

            <a href={project.link} className="project-btn" target="_blank" rel="noreferrer">
              View Practice
            </a>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
