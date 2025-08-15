import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import salmaPhoto from "../assets/sallo.jpeg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <section className="logo-section">
        <Link to="/">
          <img
            src={salmaPhoto}
            alt="Portfolio Logo"
            className="logo-img"
          />
        </Link>
        <h1 className="logo-title">Salma Siddique</h1>
      </section>

      <section className="nav-section">
        <ul className="nav-links">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/skills">🛠 Skills</Link></li>
          <li><Link to="/projects">📁 Projects</Link></li>
          <li><Link to="/about">👩‍💻 About</Link></li>
          <li><Link to="/contact">📞 Contact</Link></li>
        </ul>
      </section>
      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen);
        }}
      >
        {isOpen ? '❌' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
