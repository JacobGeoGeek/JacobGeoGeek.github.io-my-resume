import React from "react";
import { IResume } from "../../DTO/IResume";
import * as api from "../../api/resumeApi";
import "../../index.css";
import { FactoryResume } from "./factory/FactoryResume";
import { Resume } from "../Resume";
import { ProgressBar } from "../progressBar/ProgressBar";


interface ILanguage {
  language: string;
}

export default class MyDocument extends React.Component<ILanguage, IResume> {
  private resumeFactory: FactoryResume;

  constructor(props: ILanguage) {
    super(props);
    this.resumeFactory = new FactoryResume();
    this.state = this.resumeFactory.initializeResume();
  }

  async componentDidMount() {
    const dataResume = await api.getResume(this.props.language);
    this.setState(this.resumeFactory.createResume(dataResume));
  }

  async componentDidUpdate(prevProps: ILanguage) {
    if (this.props.language !== prevProps.language) {
      const dataResume = await api.getResume(this.props.language);
      this.setState(this.resumeFactory.createResume(dataResume));
    }
  }

  public render() {
    return (
      <div>
        {this.state ?
          <Resume aboutMe={this.state.aboutMe}
            educations={this.state.educations}
            events={this.state.events}
            generalInformation={this.state.generalInformation}
            skills={this.state.skills} 
            workingExperiences={this.state.workingExperiences}
          />
          : <ProgressBar />}
      </div>
    );
  }
}
