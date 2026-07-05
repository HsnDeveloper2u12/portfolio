import { useEffect } from "react";
import profile from "../assets/my.jpeg";

function Home() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Hassan_Ali_CV.pdf";
    link.download = "Muhammad_Hassan_Ali_CV.pdf";
    link.click();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home">
      <div className="home-left reveal reveal-left">
        <span className="eyebrow">Available for freelance & full-time roles</span>
        <h1>
          Hi, I am <span>Muhammad Hassan Ali</span>
        </h1>
        <h2>Full Stack Developer & AI Instructor</h2>
        <p>
I build polished, responsive web applications with a strong focus on thoughtful UX and seamless performance that feels premium from the very first interaction.
        </p>
        <div className="home-actions">
          <button className="home-btn primary" onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>

      <div className="home-right reveal reveal-right">
        <div className="home-card">
          <img src={profile} alt="Muhammad Hassan Ali" />
        </div>
      </div>
    </section>
  );
}

export default Home;