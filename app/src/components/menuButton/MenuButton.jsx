import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <NavLink
          className={style.button}
          activeClassName={style.active}
          to={this.props.navTo}
        >
          <FontAwesomeIcon icon={this.props.icon} className={style.icon} />
          <span className={style.text}>{this.props.name}</span>
        </NavLink>
      </div>
    );
  }
}

export default Menu;
