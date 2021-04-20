import Input from "../Inputs/Input";

const Course = ({ courses, DeleteItem, idx, handleCourse }) => {
  return (
    <div className="d-flex justify-content-between even-odd mb-4">
      <Input type="text" placeholder="Ex. Havard Institution" name="institution" lable="Institution Name" value={courses.institution} handleChange={handleCourse} idx={idx} />
      <Input type="text" placeholder="Ex. Web Design course" name="topic" lable="Training or course topic" value={courses.topic} handleChange={handleCourse} idx={idx} />
      <a className="delete" href="#c" onClick={() => DeleteItem(courses, idx)}>
        x
      </a>
    </div>
  );
};

export default Course;
