import { Link } from "react-router-dom";
 
export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">Campus Gear</Link>
      <nav aria-label="Main navigation" className="nav-links">
        <Link to="/equipment">Browse equipment</Link>
        <Link className="button button-small" to="/add-equipment">Add equipment</Link>
      </nav>
    </header>
  );
}
