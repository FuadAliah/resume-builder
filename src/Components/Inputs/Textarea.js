const Textarea = props => {
  const { id, value, lable, handleChange, maxLength, name, idx } = props;

  return (
    <div>
      <label htmlFor={id} className="form-label">
        {lable}
      </label>
      <textarea maxLength={maxLength} className="form-control" id={id} name={name} rows="5" value={value} onChange={e => handleChange(e, idx)} idx={idx} />
    </div>
  );
};

export default Textarea;
