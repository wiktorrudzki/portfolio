import React from "react";
import Recaptcha from "react-recaptcha";
import { useLanguage } from "@hooks/useLanguage";

import pdfEN from "../../../assets/images/cv/CV_EN.pdf";
import pdfPl from "../../../assets/images/cv/CV_PL.pdf";

import { cvStyle } from "../styles/pdf.module.css";

const Pdf = () => {
  const { languageState } = useLanguage();

  const languages = {
    en: pdfEN,
    pl: pdfPl,
  };

  return (
    <>
      <embed
        src={languages[languageState.lang]}
        type="application/pdf"
        width="100%"
        className={cvStyle}
      />
      {/* make content refresh so cookies works properly */}
      <div style={{ display: "none" }}>
        <Recaptcha
          sitekey="6LdEJPwhAAAAAIwokcxZsfgHUnwCCy2NpIW0TFay"
          render="explicit"
          required
        />
      </div>
    </>
  );
};

export default Pdf;
