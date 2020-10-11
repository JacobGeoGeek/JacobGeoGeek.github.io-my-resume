import React, { FunctionComponent } from "react";
import Fab from "@material-ui/core/Fab";
import { GoDesktopDownload } from "react-icons/go"
import { useTranslation } from "react-i18next";

export const Export: FunctionComponent<{ languege: string }> = (props) => {
    const { t } = useTranslation()
    
    return (
        <Fab color="primary"
            aria-label="add"
            style={{
                position: "fixed",
                bottom: "10px",
                left: "50px",
                backgroundColor: "#22A162",
            }}>
                
            <GoDesktopDownload size="2em" style={{color:"white"}} title={t("export")} />
        </Fab>
    )
}