import "../../Style/_input.scss";

const Input = props => {
  const { placeholder, type, full, id, lable, handleChange, value, date, required, name, idx } = props;

  const handleFocus = e => {
    if (date) {
      e.currentTarget.type = "date";
    }
  };

  const handleBlur = e => {
    if (date) {
      e.currentTarget.type = "text";
    }
  };

  return (
    <div className={`position-relative ${name === "company" ? "mb-4" : id === "skills" ? "mb-4 mt-5" : ""}`} style={{ width: full ? "100%" : "48.5%" }}>
      <label htmlFor={id} className={`form-label ${type === "checkbox" ? "checklabel form-check-label" : ""}`}>
        {lable}
      </label>
      <input
        type={type}
        className={`form-control ${type === "checkbox" ? "checkbox form-check-input" : ""}`}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={e => handleChange(e, idx)}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
      />
    </div>
  );
};

export default Input;
