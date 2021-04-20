import "../../Style/_A4.scss";

const PersonalInformation = localStorage.getItem("PersonalInformation");
const ExperienceInformation = localStorage.getItem("ExperienceInformation");
const EducationInformation = localStorage.getItem("EducationInformation");
const AdditionalInformation = localStorage.getItem("AdditionalInformation");
const LanguageInformation = localStorage.getItem("LanguageInformation");

const Data = () => {
  const { first, last, country, region, email, phone, birthday, marital } = JSON.parse(PersonalInformation);
  const { company, title, type, start, end, description, still } = JSON.parse(ExperienceInformation);
  const { university, date, degree, field } = JSON.parse(EducationInformation);
  const { skills, objective } = JSON.parse(AdditionalInformation);
  const Languages = JSON.parse(LanguageInformation)

  const dateFormatted = date => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let splited = date.split("-");
    let year = splited[0];
    let month = months[splited[1].slice(1) - 1];
    let day = splited[2];
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="resume-page">
      <div className="container">
        <div className="data">
          <div className="as-ratio">
            <div className="paper">
              <div className="header">
                <div className="left d-flex flex-column">
                  <p className="username mb-0">
                    {first} {last}
                  </p>
                  <p className="position mb-0">{title}</p>
                </div>
                <div className="right d-flex flex-column">
                  <ul className="basic-information">
                    <li>
                      <span className="fw-bold">Location:</span> {country}, {region}
                    </li>
                    <li>
                      <span className="fw-bold">Phone No.:</span> {phone}
                    </li>
                    <li>
                      <span className="fw-bold">Email Address:</span> <a href="mailto: {email}">{email}</a>
                    </li>
                    <li>
                      <span className="fw-bold">Birthday:</span> {dateFormatted(birthday)}
                    </li>
                    <li>
                      <span className="fw-bold">Marital Status:</span> {marital}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-body">
                {/* Work Experience */}
                {ExperienceInformation && (
                  <div className="section left">
                    <p className="section-title">Work Experiences</p>
                    <div className="horizontal-card">
                      <div className="right mt-1">
                        <p className="text-secondary mb-0 fs-6">
                          {dateFormatted(start)} - {still ? "Present" : dateFormatted(end)}
                        </p>
                        <div className="fs-4 my-2">
                          <span>
                            {title} at {company}
                          </span>
                          <span className="text-secondary"> / {type}</span>
                        </div>
                        <p className="m-0">{description?.replace(/([!・])/gi, " ")}</p>
                      </div>
                    </div>
                  </div>
                )}
                {AdditionalInformation && (
                  <div className="section right">
                    <p className="section-title">Professional Skills</p>
                    <div className="horizontal-card fs-4">
                      <p className="mb-5">{skills}</p>
                    </div>
                  </div>
                )}
                {EducationInformation && (
                  <div className="section left">
                    <p className="section-title">Education</p>
                    <div className="horizontal-card">
                      <div className="left d-flex flex-column">
                        <p className="mb-1 fs-6 text-secondary">{dateFormatted(date)}</p>
                        <p className="mb-1 fs-3">{university}</p>
                        <p className="m-0 fs-5">
                          {degree} in {field}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {AdditionalInformation && (
                  <div className="section left">
                    <div className="horizontal-card fs-4">
                      <p className="mb-5 section-title">Objective</p>
                      <p className="mb-0">{objective?.replace(/([!・])/gi, " ")}</p>
                    </div>
                  </div>
                )}
                <div className="section left">
                  <p className="section-title">Languages</p>
                  <div className="d-flex">
                    {Languages &&
                      Languages.map((lang, idx) => (
                        <div key={idx} className="language fs-4">
                          <p className="mb-2">{lang.language}</p>
                          <p className="mb-0 text-secondary fs-5">{lang.level}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
