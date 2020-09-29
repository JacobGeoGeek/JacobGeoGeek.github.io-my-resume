import React, { FunctionComponent } from "react";
import "../../index.css";

export const Credit: FunctionComponent = () => {
  return (
    <footer className="footer text-center pt-2 pb-5">
      <small className="copyright">
        Resume template designed by{" "}
        <a
          href="http://themes.3rdwavemedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xiaoying Riley
        </a>
      </small>
    </footer>
  );
};
