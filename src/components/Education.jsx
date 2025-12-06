import '../Education.css';

function Education() {
  return (
    <section id="education" className="edu-section">

      <h2 className="edu-title">Education</h2>

      <div className="edu-cards">

        <div className="edu-card">
          <img src="/clg.webp" alt="College Logo" className="edu-img" />
          <h3>Stella Mary's College of Engineering</h3>
          <h6 className='text-secondary'>BE-ECE(2022-2026)</h6>
          <h4 className="cgpa">CGPA - 8.47</h4>
          <p className="edu-desc">
           I am currently pursuing my Bachelor of Engineering in Electronics and Communication (ECE).
           Along with my core ECE subjects, I developed a strong interest in software and web development.I learned programming, IoT basics, and started building websites.
          </p>
        </div>

       
        <div className="edu-card">
          <img src="/scl.webp" alt="School Logo" className="edu-img" />
          <h3>Babuji Memorial Higher Secondary School, Manavalakurichi</h3>
          <h6 className='text-secondary'>Class 12 - Maths Biology(2022)</h6>
          <h4 className="cgpa">Grade - 91%</h4>
          <p className="edu-desc">
            I completed my Class 12 in March 2022 with PCM (Physics, Chemistry, Mathematics)
            and Biology. I secured an overall 91%.
          </p>
        </div>

    
        <div className="edu-card">
          <img src="/scl.webp" alt="School Logo" className="edu-img" />
          <h3>Government High School,Vellichanthai</h3>
          <h6 className='text-secondary'>Class 10 - (2020)</h6>
          <h4 className="cgpa">Grade - 96%</h4>
          <p className="edu-desc">
            I completed my Class 10 in March 2020 with Science and Maths subjects,
            securing an overall 96%.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;
