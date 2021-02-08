import React, { FunctionComponent } from "react";
import "../../../index.css";
import { useTranslation } from "react-i18next";

interface JobPosition {
  title: string;
  compagny: string;
  city: string;
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
}

function formatPosition(present: string, startMonth: string, startYear: number, endMonth?: string, endYear?: number) {
  if (endMonth && endYear) {
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }

  return `${startMonth} ${startYear} - ${present}`;
}

export const Position: FunctionComponent<JobPosition> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="resume-timeline-item-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <h3 className="resume-position-title font-weight-bold mb-1">{props.title}</h3>
        <div className="resume-company-name ml-auto">{props.compagny + ", " + props.city}</div>
      </div>
      <div className="resume-position-time">{formatPosition(t("present"), props.startMonth, props.startYear, props.endMonth, props.endYear)}</div>
    </div>
  );
};
