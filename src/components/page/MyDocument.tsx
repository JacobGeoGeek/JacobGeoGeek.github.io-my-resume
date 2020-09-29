import React from "react";
import { IResume } from "../../DTO/IResume";
import * as api from "../../api/resumeApi";
import { General } from "../general/General";
import "../../index.css";
import { ResumeBody } from "../resumeBody/ResumeBody";

export default class MyDocument extends React.Component<{}, IResume> {
  state: IResume = {
    aboutMe: [],
    educations: [],
    generalInformation: {
      address: "",
      city: "",
      email: "",
      firstName: "",
      githubURL: "",
      homePhone: "",
      lastName: "",
      mobilePhone: "",
      postalCode: "",
      province: "",
    },
    events: [],
    skills: {
      languages: [],
      technical: {
        office: [],
        computerScience: {
          frameworks: [],
          programmingLanguages: [],
          tools: [],
        },
        geomatics: { CAD: [], GIS: [], other: [] },
      },
    },
    workingExperiences: [],
  };

  async componentDidMount() {
    const dataResume = await api.getResume("EN");

    this.setState({
      generalInformation: dataResume.generalInformation,
      educations: dataResume.education,
      aboutMe: dataResume.aboutMe,
      skills: dataResume.skills,
      workingExperiences: dataResume.workingExperience,
      events: dataResume.events,
    });
  }

  public render() {
    return (
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <General
            firstName={this.state.generalInformation.firstName}
            lastName={this.state.generalInformation.lastName}
            address={this.state.generalInformation.address}
            city={this.state.generalInformation.city}
            province={this.state.generalInformation.province}
            postalCode={this.state.generalInformation.postalCode}
            mobilePhone={this.state.generalInformation.mobilePhone}
            homePhone={this.state.generalInformation.homePhone}
            email={this.state.generalInformation.email}
            githubURL={this.state.generalInformation.githubURL}
          />
          <ResumeBody
            educations={this.state.educations}
            aboutMe={this.state.aboutMe}
            skills={this.state.skills}
            workingExperiences={this.state.workingExperiences}
            events={this.state.events}
          />
        </div>
      </article>
    );
  }
}
