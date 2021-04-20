import "../../Style/_file.scss";

const File = props => {
  const { personal, placeholder, handleProfileImage, type, full, id, handleChange, name } = props;

  return (
    <div className="position-relative file-container d-flex" style={{ width: full ? "100%" : "48.5%" }}>
      <input type={type} className="form-control file" id={id} name={name} placeholder={placeholder} onChange={handleProfileImage} />
      <div className="d-flex align-items-end" onChange={handleChange}>
        <div className="file-upload">
          <img className="profile-img" src={personal.image ? personal.image : personal.defimg} accept="images/*" alt="" />
        </div>
        <div className="ms-4 mt-4 d-flex flex-column">
          <button className={`btn mt-1 ${personal.image ? "button-change" : "button-upload"}`}>{personal.image ? "Change Image" : "Upload Image"}</button>
          <span className="mt-3">Upload your .png or .jpg image, Max 2MB </span>
        </div>
      </div>
    </div>
  );
};

export default File;
