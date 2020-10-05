import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ISkills } from "../../../DTO/ISkills";
import "../../../index.css";
import { Languages } from "./Languages";
import { SkillSets } from "./SkillSets";

export const Skills: FunctionComponent<ISkills> = (props) => {
  const geomaticsSkills: Array<string> = props.technical.geomatics.CAD.concat(
    props.technical.geomatics.GIS,
    props.technical.geomatics.other
  );

  const { t } = useTranslation();

  return (
    <div>
      <section className="resume-section skills-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{t("skills")}</h2>
        <div className="resume-section-content">
          <SkillSets title={"Office"} skills={props.technical.office} />
          <SkillSets title={t("geomatics")} skills={geomaticsSkills} />
          <SkillSets title={t("programming")} skills={props.technical.computerScience.programmingLanguages} />
          <SkillSets title={t("framework")} skills={props.technical.computerScience.frameworks} />
          <SkillSets title={t("tools")} skills={props.technical.computerScience.tools} />
        </div>
      </section>
      <section className="resume-section skills-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{t("languages")}</h2>
        <div className="resume-section-content">
          <Languages languages={props.languages} />
        </div>
      </section>
    </div>
  );
};
