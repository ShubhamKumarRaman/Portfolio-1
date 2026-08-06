import "./SectionTitle.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title-wrapper">
      <h2 className="section-title">{title}</h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;