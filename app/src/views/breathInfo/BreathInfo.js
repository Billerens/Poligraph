import React, { Component } from "react";
import style from "./style.module.scss";
import img1 from "../../images/sensors/breath.jpg";

export default class BreathInfo extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <h3 className={style.item}>Информация о датчиках дыхания</h3>
        </div>
        <div className={style.main}>
          <div className={style.mainLeft}>
            <p style={{ "text-indent": "25px", "text-align": "justify" }}>
              Датчик дыхания предназначен для съема и регистрации показателей
              верхнего (грудного) и нижнего (брюшного) дыхания. Регистрируют
              величину, частоту и амплитуду грудного, брюшного и диафрагмального
              дыхания человека. Имеет высокую информативность, точность в виду
              двухпозиционной фиксации и невысокую стоимость.
            </p>
          </div>
          <div className={style.mainRight}>
            <img src={img1} alt="lol" className={style.image} />
            <p />
          </div>
        </div>
      </div>
    );
  }
}
