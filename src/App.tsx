import React from "react";
import MyDocument from "./components/page/MyDocument";
import "./App.css";
import { Credit } from "./components/page/Credit";
import { Language } from "./components/page/Language";
import i18n from "./i18n/i18n";
import { Export } from "./components/page/Export";

enum languages {
  EN = "EN",
  FR = "FR",
}

interface ILanguage {
  language: languages;
  changeLanguage: () => void;
}

const getOppsiteLanguage = (language: string): string => {
  if (language === languages.EN) {
    i18n.changeLanguage(languages.FR);
    return languages.FR;
  }

  i18n.changeLanguage(languages.EN);
  return languages.EN;
};

export default class App extends React.Component<{}, ILanguage> {
  state: ILanguage = {
    language: languages.FR,
    changeLanguage: () =>
      this.state.language === languages.EN
        ? this.setState({ language: languages.FR })
        : this.setState({ language: languages.EN }),
  };

  public render() {
    return (
      <div>
        <MyDocument language={getOppsiteLanguage(this.state.language)} />
        <Credit />
        <Language language={this.state.language} changeLanguage={this.state.changeLanguage} />
        <Export languege={getOppsiteLanguage(this.state.language)} />
      </div>
    );
  }
}
