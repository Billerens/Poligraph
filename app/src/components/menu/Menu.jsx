import React from "react";
import style from "./style.module.scss";

class Menu extends React.Component {
  render() {
    return <div className={style.container}>{this.props.children}</div>;
  }
}

export default Menu;
