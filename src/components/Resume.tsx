import React, { FunctionComponent } from "react";
import { IResume } from "../DTO/IResume";
import { ResumeBody } from "./resumeBody/ResumeBody";
import { ResumeHeader } from "./resumeHeader/ResumeHeader";
import "../index.css";
import { ProgressBar } from "./progressBar/ProgressBar";

export const Resume: FunctionComponent<IResume> = (props) => {
    return (
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <ProgressBar />
          <ResumeHeader
            firstName={props.generalInformation.firstName}
            lastName={props.generalInformation.lastName}
            address={props.generalInformation.address}
            city={props.generalInformation.city}
            province={props.generalInformation.province}
            postalCode={props.generalInformation.postalCode}
            mobilePhone={props.generalInformation.mobilePhone}
            homePhone={props.generalInformation.homePhone}
            email={props.generalInformation.email}
            githubURL={props.generalInformation.githubURL}
          />
          <ResumeBody
            educations={props.educations}
            aboutMe={props.aboutMe}
            skills={props.skills}
            workingExperiences={props.workingExperiences}
            events={props.events}
          />
        </div>
      </article>
  );
};

