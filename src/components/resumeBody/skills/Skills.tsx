import React, { FunctionComponent } from "react";
import { ISkills } from "../../../DTO/ISkills";
import "../../../index.css";
import { Languages } from "./Languages";
import { SkillSets } from "./SkillSets";

export const Skills: FunctionComponent<ISkills> = (props) => {
  const geomaticsSkills: Array<string> = props.technical.geomatics.CAD.concat(
    props.technical.geomatics.GIS,
    props.technical.geomatics.other
  );
  return (
    <div>
      <section className="resume-section skills-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
          Skills & Tools
        </h2>
        <div className="resume-section-content">
          <SkillSets title={"Office"} skills={props.technical.office} />
          <SkillSets title={"Geomatics"} skills={geomaticsSkills} />
          <SkillSets
            title={"Programming"}
            skills={props.technical.computerScience.programmingLanguages}
          />
          <SkillSets
            title={"Framework"}
            skills={props.technical.computerScience.frameworks}
          />
          <SkillSets
            title={"Tools"}
            skills={props.technical.computerScience.tools}
          />
        </div>
      </section>
      <section className="resume-section skills-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
          Languages
        </h2>
        <div className="resume-section-content">
          <Languages languages={props.languages} />
        </div>
      </section>
    </div>
  );
};
