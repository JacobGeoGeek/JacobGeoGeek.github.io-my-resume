import React, { FunctionComponent } from "react";
import { Education } from "../../DTO/Education";
import { Skills } from "../../DTO/Skills";
import { WorkingExperience } from "../../DTO/WorkingExperience";
import { Event } from "../../DTO/Event";
import "../../index.css";
import { AboutMe } from "./AboutMe";
import { WorkingExperiences } from "./workingExperiences/WorkingExperiences";

interface ContentBody {
  educations: Array<Education>;
  aboutMe: Array<string>;
  skills: Skills;
  workingExperiences: Array<WorkingExperience>;
  events: Array<Event>;
}

export const ResumeBody: FunctionComponent<ContentBody> = (props) => {
  return (
    <div className="resume-body p-5">
      <AboutMe aboutMe={props.aboutMe} />
      <div className="row">
        <WorkingExperiences workingExperieces={props.workingExperiences} />
      </div>
    </div>
  );
};
