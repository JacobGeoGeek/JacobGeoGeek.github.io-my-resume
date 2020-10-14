import React, { FunctionComponent } from "react";
import { IResume } from "../../DTO/IResume";
import "../../index.css";
import { Resume } from "../Resume";
import { ProgressBar } from "../progressBar/ProgressBar";

export const MyDocument: FunctionComponent<{ resume: IResume }> = (props) => {
    return (
      <div>
        {props.resume.aboutMe.length !== 0 ?
          <Resume aboutMe={props.resume.aboutMe}
            educations={props.resume.educations}
            events={props.resume.events}
            generalInformation={props.resume.generalInformation}
            skills={props.resume.skills} 
            workingExperiences={props.resume.workingExperiences}
            PDF={props.resume.PDF}
          />
          : <ProgressBar />}
      </div>
    );
}
