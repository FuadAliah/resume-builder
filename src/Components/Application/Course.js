import Input from "../Inputs/Input";
import { Link } from "react-router-dom";

const Course = ({ courses, DeleteItem, idx, handleCourse }) => {
  return (
    <div className="d-flex justify-content-between even-odd mb-4">
      <Input type="text" placeholder="Ex. Havard Institution" name="institution" lable="Institution Name" value={courses.institution} handleChange={handleCourse} idx={idx} />
      <Input type="text" placeholder="Ex. Web Design course" name="topic" lable="Training or course topic" value={courses.topic} handleChange={handleCourse} idx={idx} />
      <Link to="/application" type="submit" className="delete" onClick={() => DeleteItem(courses, idx)} replace></Link>
    </div>
  );
};

export default Course;
