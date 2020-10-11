import React, { FunctionComponent } from "react";
import Fab from "@material-ui/core/Fab";
import { GrDocumentPdf } from "react-icons/gr"


export const Export: FunctionComponent<{ languege: string }> = (props) => {
    return (
        <Fab color="primary"
            aria-label="add"
            style={{
                position: "fixed",
                bottom: "10px",
                left: "50px",
                backgroundColor: "#22A162",
            }}>
        
            <GrDocumentPdf size="2em" style={{color:"white"}} />
        </Fab>
    )
}