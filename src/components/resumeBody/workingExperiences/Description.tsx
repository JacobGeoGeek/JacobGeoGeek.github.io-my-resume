import React, { FunctionComponent } from "react";
import "../../../index.css";

export const Description: FunctionComponent<{
  description: Array<string>;
  stacks: Array<string>;
}> = (props) => {
  const listDescriptions = props.description.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const listStacks = props.stacks.map((item, index) => (
    <li key={index} className="list-inline-item">
      <span className="badge badge-primary badge-pill">{item}</span>
    </li>
  ));
  return (
    <div className="resume-timeline-item-desc">
      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
        Description
      </h4>
      <ul>{listDescriptions}</ul>
      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
        Technologies used:
      </h4>
      <ul className="list-inline">{listStacks}</ul>
    </div>
  );
};
