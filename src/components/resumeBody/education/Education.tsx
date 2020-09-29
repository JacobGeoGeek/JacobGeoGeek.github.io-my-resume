import React, { FunctionComponent } from "react";
import { IEducation } from "../../../DTO/IEducation";
import "../../../index.css";

export const Education: FunctionComponent<{ education: Array<IEducation> }> = (
  props
) => {
  const listEducation = props.education.map((item, index) => (
    <li className="mb-2" key={index}>
      <div className="resume-degree font-weight-bold">{item.degree}</div>
      <div className="resume-degree-org">
        {item.schoolName + ",  " + item.city}
      </div>
      <div className="resume-degree-time">
        {item.startYear + " - " + item.endYear}
      </div>
    </li>
  ));
  return (
    <section className="resume-section education-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
        Education
      </h2>
      <div className="resume-section-content">
        <ul className="list-unstyled">{listEducation}</ul>
      </div>
    </section>
  );
};
