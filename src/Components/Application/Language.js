import { Link } from "react-router-dom";
import Select from "../Inputs/Select";

import Languages from "../Fetch/langs.json";
import Level from "../Fetch/level.json";

const Language = ({ language, languages, DeleteItem, idx, handleLanguage }) => {
  return (
    <div className="d-flex justify-content-between even-odd mb-4">
      <Select data={Languages} placeholder="Choose Language" name="language" lable="Language" required value={language.language} handleChange={handleLanguage} idx={idx} />
      <Select data={Level} placeholder="Choose Level" name="level" lable="Level" required value={language.level} handleChange={handleLanguage} idx={idx} />
      <Link to="/application" className="delete" href="#c" onClick={() => DeleteItem(languages, idx)} replace></Link>
    </div>
  );
};

export default Language;
