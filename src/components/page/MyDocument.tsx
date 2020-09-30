import React from "react";
import { IResume } from "../../DTO/IResume";
import * as api from "../../api/resumeApi";
import { General } from "../general/General";
import "../../index.css";
import { ResumeBody } from "../resumeBody/ResumeBody";
import { FactoryResume } from "./factory/FactoryResume";

interface ILanguage {
  language: string;
}

export default class MyDocument extends React.Component<ILanguage, IResume> {
  private resumeFactory: FactoryResume;

  constructor(props: ILanguage) {
    super(props);
    this.resumeFactory = new FactoryResume();
    this.state = this.resumeFactory.createEmptyResume();
  }

  async componentDidMount() {
    const dataResume = await api.getResume(this.props.language);
    console.log(dataResume);
    this.setState(
      this.resumeFactory.createEmptyResume(
        dataResume.aboutMe,
        dataResume.education,
        dataResume.generalInformation,
        dataResume.events,
        dataResume.skills,
        dataResume.workingExperience
      )
    );
  }

  async componentDidUpdate(prevProps: ILanguage) {
    if (this.props.language !== prevProps.language) {
      const dataResume = await api.getResume(this.props.language);

      this.setState(
        this.resumeFactory.createEmptyResume(
          dataResume.aboutMe,
          dataResume.education,
          dataResume.generalInformation,
          dataResume.events,
          dataResume.skills,
          dataResume.workingExperience
        )
      );
    }
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
