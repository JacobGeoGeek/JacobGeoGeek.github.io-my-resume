import React, { FunctionComponent } from "react";
import "../../../index.css";

export const Languages: FunctionComponent<{ languages: Array<string> }> = (
  props
) => {
  const listLanguages = props.languages.map((item, index) => (
    <li className="mb-2" key={index}>
      <span className="resume-lang-name font-weight-bold">{item} </span>
    </li>
  ));
  return <ul className="list-unstyled resume-lang-list">{listLanguages}</ul>;
};
