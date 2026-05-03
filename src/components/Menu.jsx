import "./menu.css";

export default function Menu() {
  return (
    <nav className="menu">
      <a className="menu-btn" href="#about">About Me</a>
      <a className="menu-btn" href="#projects">Projects</a>
      <a className="menu-btn" href="#contact">Contact</a>
    </nav>
  );
}