import React, { FunctionComponent } from "react";
import { IWorkingExperience } from "../../../DTO/IWorkingExperience";
import "../../../index.css";
import { Description } from "./Description";
import { Position } from "./Position";

export const Work: FunctionComponent<{
  workingExperience: IWorkingExperience;
}> = (props) => {
  return (
    <article className="resume-timeline-item position-relative pb-5">
      <Position
        title={props.workingExperience.title}
        compagny={props.workingExperience.compagny}
        city={props.workingExperience.city}
        startMonth={props.workingExperience.startMonth}
        startYear={props.workingExperience.startYear}
        endMonth={props.workingExperience.endMonth}
        endYear={props.workingExperience.endYear}
      />
      <Description
        description={props.workingExperience.description}
        stacks={props.workingExperience.Stacks}
      />
    </article>
  );
};
