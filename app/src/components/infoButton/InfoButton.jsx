import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class InfoButton extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <NavLink className={style.button} to={this.props.navTo}>
          <FontAwesomeIcon icon={faInfoCircle} className={style.icon} />
          <span className={style.text}>Info</span>
        </NavLink>
      </div>
    );
  }
}

export default InfoButton;
