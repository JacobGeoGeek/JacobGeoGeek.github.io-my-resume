import React, { FunctionComponent } from "react";
import "../../../index.css";
import { useTranslation } from "react-i18next";

export const Summary: FunctionComponent<{ summary: string }> = (props) => {
  const { t } = useTranslation();
  return (
    <section className="resume-section summary-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{t("summary")}</h2>
      <div className="resume-section-content">
        <p>
          {props.summary}
        </p>
      </div>
    </section>
  );
};
