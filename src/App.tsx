import React from "react";
import MyDocument from "./components/page/MyDocument";
import "./App.css";
import { Credit } from "./components/page/Credit";
import { Language } from "./components/page/Language";

enum languages {
  EN = "EN",
  FR = "FR",
}

interface IAppState {
  language: languages;
  changeLanguage: () => void;
}

function getOppsiteLanguage(language: string): string {
  return language === languages.EN ? languages.FR : languages.EN;
}

export default class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    language: languages.FR,
    changeLanguage: () =>
      this.state.language === "EN"
        ? this.setState({ language: languages.FR })
        : this.setState({ language: languages.EN }),
  };

  public render() {
    return (
      <div>
        <MyDocument language={getOppsiteLanguage(this.state.language)} />
        <Credit />
        <Language
          language={this.state.language}
          changeLanguage={this.state.changeLanguage}
        />
      </div>
    );
  }
}
