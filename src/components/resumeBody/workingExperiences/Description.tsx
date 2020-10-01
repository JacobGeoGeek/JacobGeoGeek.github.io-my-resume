import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  return (
    <div className="resume-timeline-item-desc">
      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
        {t("description")}
      </h4>
      <ul>{listDescriptions}</ul>
      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
        {t("technologieUsed")}
      </h4>
      <ul className="list-inline">{listStacks}</ul>
    </div>
  );
};
