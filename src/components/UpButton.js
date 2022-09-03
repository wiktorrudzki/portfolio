import * as React from "react";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "./Layout";
import { upButton, upIcon } from "../styles/up-button.module.css";

const UpButton = () => {
  const [darkMode] = React.useContext(ThemeContext);

  //UP-BUTTON STYLES
  const styles = darkMode
    ? {
        button: upButton,
        icon: upIcon,
      }
    : {
        button: upButton,
        icon: upIcon,
      };

  return (
    <button className={styles.button}>
      <FontAwesomeIcon className={styles.icon} icon={faCircleUp} />
    </button>
  );
};

export default UpButton;
