import React from "react";

import pdf from "../../../assets/images/cv/Wiktor_Rudzki_11k2_L04.pdf";

import { cvStyle } from "../styles/pdf.module.css"

const Pdf = () => (
    <embed
      src={pdf}
      type="application/pdf"
      width="100%"
      className={cvStyle}
    />
);

export default Pdf;
