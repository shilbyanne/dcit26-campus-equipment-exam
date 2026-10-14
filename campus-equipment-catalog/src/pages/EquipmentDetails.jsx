import { Link, useParams } from "react-router-dom";
 
export default function EquipmentDetails({ equipment }) {
  const { id } = useParams();
  const item = equipment.find((entry) => entry.id === id);
 
  if (!item) {
    return (
      <section className="page-heading">
        <h1>Equipment not found</h1>
        <p className="muted">No catalog item matches this ID.</p>
        <Link className="text-link" to="/equipment">← Back to equipment</Link>
      </section>
    );
  }
 
  return (
    <article className="detail-card">
      <p className="eyebrow">{item.category} · {item.id}</p>
      <h1>{item.name}</h1>
      <dl className="detail-list">
        <div><dt>Location</dt><dd>{item.location}</dd></div>
        <div><dt>Condition</dt><dd>{item.condition}</dd></div>
        <div><dt>Availability</dt><dd>{item.available ? "Available" : "In use"}</dd></div>
        <div><dt>Notes</dt><dd>{item.notes || "No additional notes."}</dd></div>
      </dl>
      <Link className="text-link" to="/equipment">← Back to equipment</Link>
    </article>
  );
}
