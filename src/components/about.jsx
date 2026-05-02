import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-card">
        <p className="about-text">
         I'm a fourth-year Computer Science student who builds clean, purposeful 
web applications. Outside of code, you'll find me lifting, rock climbing, 
or out on a trail somewhere. I'm drawn to the stories of people — 
the experiences that shape how we see the world — and I bring that same 
curiosity and drive to everything I build.
        </p>
        <div className="skills">
          <h3 className="skills-title">Arsenal</h3>
          <div className="skills-grid">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML & CSS</span>
            <span className="skill-tag">Git & GitHub</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Python</span>
          </div>
        </div>
      </div>
    </section>
  );
}