import React, { FunctionComponent } from "react";
import { IGeneralInformation } from "../../DTO/IGeneralInformation";
import "../../index.css";
import { FaRegEnvelope, FaMobileAlt } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { Contact } from "./Contact";
import { Link } from "./Link";
import profile from "./photos/profile-picture.jpg"
export const ResumeHeader: FunctionComponent<IGeneralInformation> = (props) => {
  const { t } = useTranslation();

  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="media flex-column flex-md-row">
        <img
          className="mr-3 img-fluid picture mx-auto"
          src={profile}
          alt="profile"
        />
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase">{props.firstName + " " + props.lastName}</h1>
            <div className="title mb-3">{t("title")}</div>
            <ul className="list-unstyled">
              <Contact icon={FaRegEnvelope} title={t("email")} value={props.email} isEMail={true} />
              <Contact icon={FaMobileAlt} title={t("mobilePhone")} value={props.mobilePhone} isEMail={false} />
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              <Link icon={DiGithubBadge} title="Github" URL={props.githubURL} />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
