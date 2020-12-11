import React, { Component } from "react";
import style from "./style.module.scss";
import img1 from "../../images/sensors/skin.jpg";
import img2 from "../../images/sensors/skin2.jpg";

export default class SkinInfo extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <h3 className={style.item}>Информация о датчиках кожи</h3>
        </div>
        <div className={style.main}>
          <div className={style.mainLeft}>
            <p style={{ "text-indent": "25px", "text-align": "justify" }}>
              Датчик кожно-гальванической реакции (КГР) используется для
              измерения величины и амплитуды кожно-гальванической реакции
              человека. Данный датчик измеряет электрическое сопротивление кожи,
              которое резко изменяется с усилением потоотделения при волнении
              человека. Один из наиболее чувствительных, информативных и
              легкодоступных датчиков.
            </p>
          </div>
          <div className={style.mainRight}>
            <img src={img1} alt="lol" className={style.image} />
            <p />
            <img src={img2} alt="lol" className={style.image} />
            <p />
          </div>
        </div>
      </div>
    );
  }
}
