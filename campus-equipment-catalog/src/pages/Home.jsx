import { Link } from "react-router-dom";
 
export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Shared campus resources</p>
      <h1>Find the equipment your next project needs.</h1>
      <p className="hero-copy">Browse the catalog, view item details, or add a resource for other campus teams.</p>
      <div className="actions">
        <Link className="button" to="/equipment">Browse equipment</Link>
        <Link className="button button-light" to="/add-equipment">Add an item</Link>
      </div>
    </section>
  );
}
