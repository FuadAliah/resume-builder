import { useState, useLayoutEffect } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import { Link } from "react-router-dom";

import { InternalHeader } from "../Header/Header";
import Course from "./Course";
import Job from "./Job";

import Input from "../Inputs/Input";
import File from "../Inputs/File";
import Select from "../Inputs/Select";
import Textarea from "../Inputs/Textarea";
import Language from "./Language";

import Countries from "../Fetch/countries.json";
import Marital from "../Fetch/marital.json";

import defImg from "../../images/profile.png";

import "react-web-tabs/dist/react-web-tabs.css";
import "./Application.scss";
import { TIPS } from "../Fetch/TipsData";

const Application = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [personal, setPersonal] = useState({
    image: "",
    defimg: defImg,
    first: "",
    last: "",
    country: "",
    region: "",
    email: "",
    phone: "",
    birthday: "",
    marital: "",
  });
  const [education, setEducation] = useState({ university: "", date: "", degree: "", field: "" });
  const [additional, setAdditional] = useState({ skills: "", objective: "", maxLength: 300 });

  const [languages, setLanguages] = useState([{ language: "", level: "" }]);
  const [courses, setCourses] = useState([{ institution: "", topic: "" }]);
  const [experiences, setExperiences] = useState([{ company: "", title: "", type: "", start: "", end: "", description: "", still: false }]);
  const [Tips, setTips] = useState({ experiencesTips: false, educationTips: false, skillsTips: false });

  const handleExperiencesTips = () => {
    setTips({ ...Tips, experiencesTips: !Tips.experiencesTips });
  };

  const handleEducationTips = () => {
    setTips({ ...Tips, educationTips: !Tips.educationTips });
  };

  const handleSkillsTips = () => {
    setTips({ ...Tips, skillsTips: !Tips.skillsTips });
  };

  const handleSelectStyle = e => {
    const { type } = e.target;
    if (type === "select-one") e.target.classList.add("changed");
  };

  const handlePersonal = e => {
    handleSelectStyle(e);
    setPersonal({ ...personal, [e.target.id]: e.target.value });
  };

  const handleProfileImage = e => {
    const reader = new FileReader();
    reader.onload = () => {
      let personalData = { ...personal };
      personalData.image = reader.result;
      setTimeout(() => setPersonal(personalData), 100);
    };
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const handleEducation = e => setEducation({ ...education, [e.target.id]: e.target.value });
  const handleAdditional = e => setAdditional({ ...additional, [e.target.id]: e.target.value });

  const handleLanguage = (e, index) => {
    handleSelectStyle(e);
    const { name, value } = e.target;
    const languagesList = [...languages];
    languagesList[index][name] = value;
    setLanguages(languagesList);
  };

  const handleCourse = (e, index) => {
    const { name, value } = e.target;
    const coursesList = [...courses];
    coursesList[index][name] = value;
    setCourses(coursesList);
  };

  const handleExperiences = (e, index) => {
    handleSelectStyle(e);
    const { name, value, type, checked } = e.target;
    const experiencesList = [...experiences];
    experiencesList[index][name] = type === "checkbox" ? checked : value;
    setExperiences(experiencesList);
  };

  const AddLanguage = () => setLanguages([...languages, { language: "", level: "" }]);

  const AddCourse = () => setCourses([...courses, { institution: "", topic: "" }]);

  const AddExperience = () => setExperiences([...experiences, { company: "", title: "", type: "", start: "", end: "", description: "", still: false }]);

  const DeleteItem = (item, idx) => {
    if (item.length > 1) item.splice(idx, 1);
  };

  const handlePersonalStorage = e => {
    e.preventDefault();
    setData({ ...data, personal });
    const currentTab = document.querySelector("[aria-selected='true']");
    currentTab.classList.add("done");
    currentTab.nextSibling.click();
  };

  const handleEducationStorage = e => {
    e.preventDefault();
    setData({ ...data, education, courses });
    const currentTab = document.querySelector("[aria-selected='true']");
    if (education.university) currentTab.classList.add("done");
    currentTab.nextSibling.click();
  };

  const handleExperienceStorage = e => {
    e.preventDefault();
    setData({ ...data, experiences });
    const currentTab = document.querySelector("[aria-selected='true']");
    if (experiences[0].company) currentTab.classList.add("done");
    currentTab.nextSibling.click();
  };

  const handleFinish = e => {
    e.preventDefault();
    setData({ ...data, languages, additional });
    const currentTab = document.querySelector("[aria-selected='true']");
    currentTab.classList.add("done");
    console.log(data);
    // window.location.pathname = "/data";
  };

  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [isLoading]);

  return (
    <>
      {!isLoading && (
        <>
          <InternalHeader />
          <div className="container mt-5">
            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
              <TabList className="me-4">
                <Tab tabFor="vertical-tab-one">Personal Information</Tab>
                <Tab tabFor="vertical-tab-two" disabled={!personal.first || !personal.last || !personal.email || !personal.phone || !personal.country || !personal.birthday || !personal.marital}>
                  Educational Information
                </Tab>
                <Tab tabFor="vertical-tab-three" disabled={!personal.first || !personal.last || !personal.email || !personal.phone || !personal.country || !personal.birthday || !personal.marital}>
                  Experience Information
                </Tab>
                <Tab tabFor="vertical-tab-four" disabled={!personal.first || !personal.last || !personal.email || !personal.phone || !personal.country || !personal.birthday || !personal.marital}>
                  Additional Information
                </Tab>
              </TabList>

              <TabPanel tabId="vertical-tab-one">
                <form onSubmit={handlePersonalStorage}>
                  <File type="file" id="image" lable="Upload your Image" personal={personal} handleChange={handlePersonal} handleProfileImage={handleProfileImage} full />
                  <div className="d-flex justify-content-between mb-4">
                    <Input type="text" placeholder="Enter Your First Name" id="first" lable="First Name" value={personal.first} handleChange={handlePersonal} required />
                    <Input type="text" placeholder="Enter Your Last Name" id="last" lable="Last Name" value={personal.last} handleChange={handlePersonal} required />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <Select data={Countries} placeholder="Select Country" id="country" lable="Country" value={personal.country} handleChange={handlePersonal} required />
                    <Input type="text" placeholder="Region" id="region" lable="Region" value={personal.region} handleChange={handlePersonal} required />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <Input type="email" placeholder="Enter your Email Address" id="email" lable="Email Adress" value={personal.email} handleChange={handlePersonal} required />
                    <Input type="number" placeholder="Enter your Phone Number" id="phone" lable="Phone Number" value={personal.phone} handleChange={handlePersonal} required />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <Input type="text" placeholder="Enter your Date of Birth" id="birthday" lable="Date of Birth" value={personal.birthday} handleChange={handlePersonal} date required />
                    <Select data={Marital} placeholder="Select Marital Status" id="marital" lable="Marital Status" value={personal.marital} handleChange={handlePersonal} required />
                  </div>
                  <input className="btn button-primary save fw-bold" type="submit" value="Save & Next" />
                </form>
              </TabPanel>

              <TabPanel tabId="vertical-tab-two">
                <div className="head mb-5 d-flex justify-content-between">
                  <div className="subject">
                    <p className="mb-2">Great, let’s work on your education</p>
                    <h6 className="m-0">We’ll take care of the formatting so it’s easy to find.</h6>
                  </div>
                  <div className="tips position-relative d-flex mt-2" onClick={handleEducationTips}>
                    TIPS
                    <div
                      className="tips-down"
                      style={{ visibility: `${Tips.educationTips ? "visible" : "hidden"}`, top: `${Tips.educationTips ? "2.7rem" : "3.5rem"}`, opacity: `${Tips.educationTips ? "1" : "0"}` }}>
                      <p className="mb-4">{TIPS.education.paragraph}</p>
                      <ul className="list-tips list-group">
                        {TIPS.education.keys.map((data, idx) => (
                          <li key={idx} className="ps-3 list-group">
                            {data}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleEducationStorage}>
                  <div className="d-flex justify-content-between mb-4">
                    <Input type="text" placeholder="Ex. Havard University" id="university" lable="University or Institution" value={education.university} handleChange={handleEducation} />
                    <Input type="text" placeholder="Enter your Graduation date" id="date" lable="Graduation date" value={education.date} handleChange={handleEducation} date />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <Input type="text" placeholder="Ex. Bachelor’s" id="degree" lable="Degree" value={education.degree} handleChange={handleEducation} />
                    <Input type="text" placeholder="Ex. Buisness" id="field" lable="Field of study" value={education.field} handleChange={handleEducation} />
                  </div>
                  <p className="title mb-4 mt-5">Courses and Trainings you attended</p>
                  <div>
                    {courses?.map((course, idx) => (
                      <Course key={idx} idx={idx} DeleteItem={DeleteItem} course={course} courses={courses} handleCourse={handleCourse} />
                    ))}
                  </div>
                  <Link to="/application" className="add" onClick={AddCourse} replace>
                    + Add Another Course
                  </Link>
                  <input className="btn button-primary save fw-bold" type="submit" value="Save & Next" />
                </form>
              </TabPanel>

              <TabPanel tabId="vertical-tab-three">
                <div className="head mb-5 d-flex justify-content-between">
                  <div className="subject">
                    <p className="mb-2">Tell us about your most recent job</p>
                    <h6 className="m-0">Start with your most recent job and continue in order until your first job.</h6>
                  </div>
                  <div className="tips position-relative d-flex mt-2" onClick={handleExperiencesTips}>
                    TIPS
                    <div
                      className="tips-down"
                      style={{ visibility: `${Tips.experiencesTips ? "visible" : "hidden"}`, top: `${Tips.experiencesTips ? "2.7rem" : "3.5rem"}`, opacity: `${Tips.experiencesTips ? "1" : "0"}` }}>
                      <p className="mb-4">{TIPS.experiences.paragraph}</p>
                      <ul className="list-tips list-group">
                        {TIPS.experiences.keys.map((data, idx) => (
                          <li key={idx} className="ps-3 list-group">
                            {data}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <form className="job" onSubmit={handleExperienceStorage}>
                  {experiences?.map((job, idx) => (
                    <Job key={idx} DeleteItem={DeleteItem} experiences={experiences} handleExperiences={handleExperiences} idx={idx} job={job} />
                  ))}
                  <Link to="/application" className="add-job" onClick={AddExperience} replace>
                    + Add Another Position
                  </Link>
                  <input className="btn button-primary save fw-bold" type="submit" value="Save & Next" />
                </form>
              </TabPanel>

              <TabPanel tabId="vertical-tab-four">
                <div className="head mb-5 d-flex justify-content-between">
                  <div className="subject">
                    <p className="mb-2">Next, let’s take care of your skills</p>
                    <h6 className="m-0">Add a few skills to show employers what you're good at!</h6>
                  </div>
                  <div className="tips position-relative d-flex mt-2" aria-details="experiences" onClick={handleSkillsTips}>
                    TIPS
                    <div
                      className="tips-down"
                      style={{ visibility: `${Tips.skillsTips ? "visible" : "hidden"}`, top: `${Tips.skillsTips ? "2.7rem" : "3.5rem"}`, opacity: `${Tips.skillsTips ? "1" : "0"}` }}>
                      <p className="mb-4">{TIPS.skills.paragraph}</p>
                      <ul className="list-tips list-group">
                        {TIPS.skills.keys.map((data, idx) => (
                          <li key={idx} className="ps-3 list-group">
                            {data}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleFinish}>
                  {languages?.map((language, idx) => (
                    <Language DeleteItem={DeleteItem} key={idx} idx={idx} language={language} languages={languages} handleLanguage={handleLanguage} />
                  ))}
                  <Link to="/application" className="add" onClick={AddLanguage} replace>
                    + Add Another Language
                  </Link>
                  <Input type="text" placeholder="Ex: HTML, JavaScript... etc" id="skills" lable="Skills" value={additional.skills} handleChange={handleAdditional} full />
                  <Textarea maxLength={additional.maxLength} id="objective" lable="Objective" value={additional.objective} handleChange={handleAdditional} />
                  <span className={`length position-absolute ${additional.maxLength - additional.objective.length < 10 ? "red" : ""}`}>
                    You have
                    {additional.maxLength - additional.objective.length < 10 ? `0${additional.maxLength - additional.objective.length}` : ` ${additional.maxLength - additional.objective.length} `}
                    of {additional.maxLength} characters remaining
                  </span>
                  <input className="btn button-primary finish fw-bold mt-4" type="submit" value="Finish" />
                </form>
              </TabPanel>
            </Tabs>
          </div>
        </>
      )}

      {isLoading && (
        <div className="loading d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Application;
