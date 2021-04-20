import "../../Style/_select.scss";

const Select = ({ data, placeholder, id, full, handleChange, lable, name, required, idx }) => {
  return (
    <div className="d-flex flex-column" style={{ width: full ? "100%" : "48.5%" }}>
      <span className="form-label">{lable}</span>
      <select required={required} className="form-select" id={id} name={name} aria-label="Default select example" onChange={e => handleChange(e, idx)}>
        <option hidden value="">
          {placeholder}
        </option>
        {data &&
          data.map(option => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
