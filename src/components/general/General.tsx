import React, { FunctionComponent } from "react";
import { IGeneralInformation } from "../../DTO/IGeneralInformation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faGithub);

export const General: FunctionComponent<IGeneralInformation> = (props) => {
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
            <div className="title mb-3">Full Stack Developer</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={"mailto:" + props.email}>
                  <FontAwesomeIcon
                    className="fa-fw mr-2"
                    icon={["far", "envelope"]}
                    transform="grow-3"
                  />
                  {props.email}
                </a>
              </li>
              <li className="mb-2">
                <a href="test">
                  <FontAwesomeIcon
                    className="fa-fw mr-2"
                    icon={["far", "envelope"]}
                    transform="grow-3"
                  />
                  {props.homePhone}
                </a>
              </li>
              <li>
                <a href="test">
                  <FontAwesomeIcon
                    className="fa-fw mr-2"
                    icon={["far", "envelope"]}
                    transform="grow-3"
                  />
                  {props.mobilePhone}
                </a>
              </li>
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              <li className="mb-3">
                <a href={props.githubURL}>
                  <span className="fa-container text-center mr-2">
                    <FontAwesomeIcon
                      className="fa-fw"
                      icon={["fab", "github"]}
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
