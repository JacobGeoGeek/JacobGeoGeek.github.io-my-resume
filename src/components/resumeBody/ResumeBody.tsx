import React, { FunctionComponent } from "react";
import { IEducation } from "../../DTO/IEducation";
import { ISkills } from "../../DTO/ISkills";
import { IWorkingExperience } from "../../DTO/IWorkingExperience";
import { IEvent } from "../../DTO/IEvent";
import { AboutMe } from "./aboutMe/AboutMe";
import { WorkingExperiences } from "./workingExperiences/WorkingExperiences";
import { Skills } from "./skills/Skills";
import { Education } from "./education/Education";
import "../../index.css";
import { Events } from "./events/Events";

interface ContentBody {
  educations: Array<IEducation>;
  aboutMe: Array<string>;
  skills: ISkills;
  workingExperiences: Array<IWorkingExperience>;
  events: Array<IEvent>;
}

export const ResumeBody: FunctionComponent<ContentBody> = (props) => {
  return (
    <div className="resume-body p-5">
      <AboutMe aboutMe={props.aboutMe} />
      <div className="row">
        <div className="col-lg-9">
          <WorkingExperiences workingExperieces={props.workingExperiences} />
          <Events events={props.events} />
        </div>
        <div className="col-lg-3">
          <Skills languages={props.skills.languages} technical={props.skills.technical} />
          <Education education={props.educations} />
        </div>
      </div>
    </div>
  );
};
