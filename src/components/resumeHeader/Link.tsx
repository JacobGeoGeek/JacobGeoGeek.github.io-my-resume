import React, { FunctionComponent } from "react";
import { IconType } from "react-icons";
import "../../index.css";

interface ILink {
  title: string;
  URL: string;
  icon: IconType;
}

export const Link: FunctionComponent<ILink> = (props) => {
  const Icon: IconType = props.icon;

  return (
    <li className="mb-3">
      <a href={props.URL}>
        <span className="fa-container text-center mr-2">
          <Icon className="fa-fw" size="1.5em" title={props.title} />
        </span>
        {props.URL}
      </a>
    </li>
  );
};
