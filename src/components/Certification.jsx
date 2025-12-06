import { useState } from "react";
import "../Certification.css";

const certifications = [
  { title: "Full Stack Web Development", img: "/akc.jpeg", from: "AK Infopark", year: "2025" },
  { title: "Full Stack Web Development", img: "/novic.jpeg", from: "NoviTech R&D Private Limited", year: "2025" },
  { title: "Front-End Development", img: "/talentc.jpeg", from: "Talent Turbo Technologies Pvt. Ltd", year: "2025" },
  { title: "Introduction to HTML", img: "/htmlc.jpeg", from: "SoloLearn App", year: "2025" },
  { title: "Introduction to CSS", img: "/cssc.jpeg", from: "SoloLearn App", year: "2025" },
  { title: "Introduction to JavaScript", img: "/jsc.jpeg", from: "SoloLearn App", year: "2025" },
  { title: "Introduction to Java", img: "/javac.jpeg", from: "SoloLearn App", year: "2025" },
  { title: "ISRO-Inplant Trainee", img: "/isroc.jpeg", from: "ISRO Propulsion Complex", year: "2025" },
  { title: "Embedded Systems", img: "/checkc.jpeg", from: "Check.In Tek", year: "2024" },
  { title: "Toast Masters Presentation Mastery Level 1", img: "/tm1.jpeg", from: "SMCE Toastmasters Club", year: "2023" },
  { title: "Toast Masters Presentation Mastery Level 2", img: "/tm2.jpeg", from: "SMCE Toastmasters Club", year: "2023" },
];

const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

function Certification() {
  const slides = chunkArray(certifications, 4);

  const [openImg, setOpenImg] = useState(null);

  return (
    <section className="cert-section" id="certification">
      <h2 className="cert-title">Certifications</h2>

      <div id="certCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {slides.map((group, slideIndex) => (
            <div
              className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              key={slideIndex}
            >
              <div className="row justify-content-center g-4">

                {group.map((cert, index) => (
                  <div className="col-md-3" key={index}>
                    <div className="cert-card shadow-sm">
                      <div className="cert-img-wrapper">
                        <img
                          src={cert.img}
                          className="cert-img"
                          alt={cert.title}
                          onClick={() => setOpenImg(cert.img)}   
                          style={{ cursor: "pointer" }}
                        />
                      </div>

                      <div className="cert-info">
                        <h3 className="cert-name">{cert.title}</h3>
                        <p className="cert-from">{cert.from}</p>
                        <span className="cert-year">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#certCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#certCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {openImg && (
        <div className="cert-popup-overlay" onClick={() => setOpenImg(null)}>
          <img src={openImg} className="cert-popup-img" />
        </div>
      )}
    </section>
  );
}

export default Certification;
