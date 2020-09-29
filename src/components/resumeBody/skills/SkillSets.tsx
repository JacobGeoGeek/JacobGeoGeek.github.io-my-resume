import React, { FunctionComponent } from "react";
import "../../../index.css";

export const SkillSets: FunctionComponent<{
  title: string;
  skills: Array<string>;
}> = (props) => {
  const itemSkills = props.skills.map((item, index) => (
    <li className="list-inline-item" key={index}>
      <span className="badge badge-light">{item}</span>
    </li>
  ));
  return (
    <div className="resume-skill-item">
      <h4 className="resume-skills-cat font-weight-bold">{props.title}</h4>
      <ul className="list-inline">{itemSkills}</ul>
    </div>
  );
};
