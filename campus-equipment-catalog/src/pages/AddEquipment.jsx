import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const emptyForm = { name: "", category: "Presentation", location: "", condition: "Good", notes: "" };
 
export default function AddEquipment({ onAddEquipment }) {
  const [form, setForm] = useState(emptyForm);
  const navigate = useNavigate();
 
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }
 
  function handleSubmit(event) {
    event.preventDefault();
    onAddEquipment({ id: `EQ-${Date.now()}`, ...form, available: true });
    setForm(emptyForm);
    navigate("/equipment");
  }
 
  return (
    <section className="form-section">
      <div className="page-heading">
        <p className="eyebrow">Catalog contribution</p>
        <h1>Add equipment</h1>
        <p className="muted">New records are kept in React state for this session.</p>
      </div>
      <form className="form-card" onSubmit={handleSubmit}>
        <label>Equipment name<input name="name" value={form.name} onChange={handleChange} required /></label>
        <div className="form-grid">
          <label>Category<select name="category" value={form.category} onChange={handleChange}>
            <option>Presentation</option><option>Audio</option><option>Photography</option><option>Computing</option><option>Other</option>
          </select></label>
          <label>Condition<select name="condition" value={form.condition} onChange={handleChange}>
            <option>Excellent</option><option>Good</option><option>Fair</option><option>Needs repair</option>
          </select></label>
        </div>
        <label>Location<input name="location" value={form.location} onChange={handleChange} required /></label>
        <label>Notes<textarea name="notes" value={form.notes} onChange={handleChange} rows="4" /></label>
        <div className="actions">
          <button className="button" type="submit">Save equipment</button>
          <Link className="text-link" to="/equipment">Cancel</Link>
        </div>
      </form>
    </section>
  );
}