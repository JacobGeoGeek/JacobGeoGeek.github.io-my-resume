import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import "../../index.css";

export const Credit: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer text-center pt-2 pb-5">
      <small className="copyright">
        {t("credit") + " "}
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
