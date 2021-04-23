import { Link } from "react-router-dom";

import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import Textarea from "../Inputs/Textarea";

import EmpType from "../Fetch/emp-type.json";

const Job = ({ job, handleExperiences, idx, DeleteItem, experiences }) => {
  return (
    <div className="mb-4 even-odd">
      <Input type="text" placeholder="Ex: Microsoft" name="company" lable="Company Name" value={job.company} handleChange={handleExperiences} idx={idx} full />
      <div className="d-flex justify-content-between mb-4">
        <Input type="text" placeholder="Ex: Retail Sales Manager" name="title" lable="Title" value={job.title} handleChange={handleExperiences} idx={idx} />
        <Select data={EmpType} placeholder="Select your Contract Type" name="type" lable="Employment type" value={job.type} handleChange={handleExperiences} idx={idx} />
      </div>
      <div className="d-flex justify-content-between position-relative mb-4">
        <div className="form-check still position-absolute">
          <Input className="form-check-input" checkbox lable="I still work here" type="checkbox" name="still" id={`still-${idx}`} value={job.still} handleChange={handleExperiences} idx={idx} />
        </div>
        <Input type="text" placeholder="Enter Start Date" name="start" lable="Start Date" value={job.start} handleChange={handleExperiences} idx={idx} date />
        {!job.still && <Input type="text" placeholder="Enter End Date" name="end" lable="End Date" value={job.end} handleChange={handleExperiences} idx={idx} date />}
        {job.still && (
          <div className="present d-flex flex-column align-item-center">
            <span>End Date</span>
            <span className="pre">Present</span>
          </div>
        )}
      </div>
      <Textarea name="description" lable="Description" value={job.description} handleChange={handleExperiences} idx={idx} />
      <Link to="/application" type="submit" className="delete" onClick={() => DeleteItem(experiences, idx)} replace></Link>
    </div>
  );
};

export default Job;
