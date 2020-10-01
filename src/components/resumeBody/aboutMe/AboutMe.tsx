import React, { FunctionComponent } from "react";
import "../../../index.css";
import { useTranslation } from "react-i18next";

export const AboutMe: FunctionComponent<{ aboutMe: Array<string> }> = (
  props
) => {
  const { t } = useTranslation();
  return (
    <section className="resume-section summary-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
        {t("aboutMe")}
      </h2>
      <div className="resume-section-content">
        <p>
          {t("introduction") + ": "}
          {props.aboutMe.join(" - ")}
        </p>
      </div>
    </section>
  );
};
