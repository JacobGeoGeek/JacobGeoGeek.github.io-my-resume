import React from "react";
import "./App.css";
import { Credit } from "./components/page/Credit";
import { Language } from "./components/page/Language";
import { Export } from "./components/page/Export";
import { IResume } from "./DTO/IResume";
import { FactoryResume } from "./components/page/factory/FactoryResume";
import { Resume } from "./components/Resume";
import * as api from "./api/resumeApi";
import { MyDocument } from "./components/page/MyDocument";
import { languages } from "./i18n/languages";
import { getOppositeLanguage } from "./i18n/GetOppositeLanguage";

interface Resume {
  resumeData: IResume;
  language: languages;
  changeLanguage: () => void;
}

export default class App extends React.Component<{}, Resume> {
  private resumeFactory: FactoryResume;
  
  constructor(props={}) {
    super(props)
    this.resumeFactory = new FactoryResume();
    this.state = {
      resumeData: this.resumeFactory.initializeResume(),
      language: languages.FR,
      changeLanguage: () =>
      this.state.language === languages.EN
        ? this.setState({ language: languages.FR })
        : this.setState({ language: languages.EN })
    }
  }
  
  async componentDidMount() {
    const dataResume = await api.getResume(getOppositeLanguage(this.state.language));
    this.setState({ resumeData: this.resumeFactory.createResume(dataResume) });
  }
  
  async componentDidUpdate(prevProps:{},prevState: Resume) {
    if (this.state.language !== prevState.language) {
      const dataResume = await api.getResume(getOppositeLanguage(this.state.language));
      this.setState({ resumeData: this.resumeFactory.createResume(dataResume) });
    }
  }


  public render() {
    return (
      <div>
        <MyDocument resume={this.state.resumeData}/>
        <Credit />
        <Language language={this.state.language} changeLanguage={this.state.changeLanguage} />
        <Export pdfURL={this.state.resumeData.PDF}/>
      </div>
    );
  }
}
