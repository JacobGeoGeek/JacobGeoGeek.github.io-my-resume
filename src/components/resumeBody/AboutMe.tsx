import React, { FunctionComponent } from "react";
import "../../index.css";

export const AboutMe: FunctionComponent<{ aboutMe: Array<string> }> = (
  props
) => {
  const listAboutMe = props.aboutMe.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <section className="resume-section summary-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
        About Me
      </h2>
      <div className="resume-section-content">
        <ul>{listAboutMe}</ul>
      </div>
    </section>
  );
};
