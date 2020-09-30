import React, { FunctionComponent } from "react";

import Fab from "@material-ui/core/Fab";

interface ILanguage {
  language: string;
  changeLanguage: () => void;
}

export const Language: FunctionComponent<ILanguage> = (props) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "50px",
        backgroundColor: "#22A162",
      }}
      onClick={props.changeLanguage}
    >
      {props.language}
    </Fab>
  );
};
