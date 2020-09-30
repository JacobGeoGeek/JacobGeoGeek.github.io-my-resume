import React, { FunctionComponent } from "react";
import { IGeneralInformation } from "../../DTO/IGeneralInformation";
import "../../index.css";
import { FaRegEnvelope, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export const ResumeHeader: FunctionComponent<IGeneralInformation> = (props) => {
  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="media flex-column flex-md-row">
        <img
          className="mr-3 img-fluid picture mx-auto"
          src="https://i.picsum.photos/id/501/480/480.jpg?hmac=8g-6-RpnvXpl1PmFBp-mJhkQa64DR7cxGJzJCXvxv6k"
          alt="profile"
        />
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase">
              {props.firstName + " " + props.lastName}
            </h1>
            <div className="title mb-3">
              Graduated Full stack developer student
            </div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={"mailto:" + props.email}>
                  <FaRegEnvelope
                    className="fa-fw mr-2"
                    size="1.2em"
                    title="Email"
                  />

                  {props.email}
                </a>
              </li>
              <li className="mb-2">
                <FaPhoneAlt
                  className="fa-fw mr-2"
                  size="1.2em"
                  title="Home phone"
                />
                <a href="test">{props.homePhone}</a>
              </li>
              <li>
                <FaMobileAlt
                  className="fa-fw mr-2"
                  size="1.2em"
                  title="Mobile phone"
                />
                <a href="test">{props.mobilePhone}</a>
              </li>
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              <li className="mb-3">
                <a href={props.githubURL}>
                  <span className="fa-container text-center mr-2">
                    <DiGithubBadge
                      className="fa-fw"
                      size="1.5em"
                      title="Github"
                    />
                  </span>
                  {props.githubURL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
