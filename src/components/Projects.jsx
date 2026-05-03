import "./projects.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A web application built with React and Node.js. More details coming soon.",
    tech: ["React", "Node.js", "CSS"],
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A full stack project exploring databases and REST APIs. More details coming soon.",
    tech: ["Python", "SQL", "REST API"],
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A command line tool built to automate repetitive tasks. More details coming soon.",
    tech: ["Python", "Bash"],
    link: "#"
  }
];

import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();
  return (
    <section className="projects reveal" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
            <a className="project-link" href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}