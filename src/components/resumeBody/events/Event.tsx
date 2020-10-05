import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { IEvent } from "../../../DTO/IEvent";

export const Event: FunctionComponent<IEvent> = (props) => {
  const { t } = useTranslation();

  const description = props.description.map((item, index) => <li key={index}>{item}</li>);

  return (
    <article className="position-relative pb-5">
      <div className="resume-timeline-item-header mb-2">
        <div className="d-flex flex-column flex-md-row">
          <h3 className="resume-position-title font-weight-bold mb-1">{props.title}</h3>
          <div className="resume-company-name ml-auto">{props.location.building + ", " + props.location.address}</div>
        </div>
        <div className="resume-position-time">{props.startDate + " - " + props.endDate}</div>
      </div>
      <div className="resume-timeline-item-desc">
        <h4 className="resume-timeline-item-desc-heading font-weight-bold">{t("description")}</h4>
        <ul>{description}</ul>
      </div>
    </article>
  );
};
