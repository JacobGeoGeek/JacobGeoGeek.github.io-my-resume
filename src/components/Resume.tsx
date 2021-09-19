import React, { FunctionComponent } from "react";
import { IResume } from "../DTO/IResume";
import { ResumeBody } from "./resumeBody/ResumeBody";
import { ResumeHeader } from "./resumeHeader/ResumeHeader";
import "../index.css";

export const Resume: FunctionComponent<IResume> = (props) => {
    return (
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <ResumeHeader
            firstName={props.generalInformation.firstName}
            lastName={props.generalInformation.lastName}
            address={props.generalInformation.address}
            city={props.generalInformation.city}
            province={props.generalInformation.province}
            postalCode={props.generalInformation.postalCode}
            mobilePhone={props.generalInformation.mobilePhone}
            email={props.generalInformation.email}
            githubURL={props.generalInformation.githubURL}
            linkedinUrl={props.generalInformation.linkedinUrl}
          />
          <ResumeBody
            educations={props.educations}
            summary={props.summary}
            skills={props.skills}
            workingExperiences={props.workingExperiences}
            events={props.events}
          />
        </div>
      </article>
  );
};

