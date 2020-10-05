import React, { FunctionComponent } from "react";
import { IconType } from "react-icons";
import "../../index.css";

interface IContact {
  title: string;
  value: string;
  icon: IconType;
  isEMail: boolean;
}

export const Contact: FunctionComponent<IContact> = (props) => {
  const Icon: IconType = props.icon;

  return (
    <li className="mb-2">
      <a href={props.isEMail ? "mailto:" + props.value : "#"}>
        <Icon className="fa-fw mr-2" size="1.2em" title={props.title} />
        {props.value}
      </a>
    </li>
  );
};
