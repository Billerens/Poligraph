import React, { Component } from "react";
import style from "./style.module.scss";
import img1 from "../../images/sensors/muscle.jpg";
import img2 from "../../images/sensors/muscle2.jpg";

export default class MusclesInfo extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <h3 className={style.item}>Информация о датчиках мышц</h3>
        </div>
        <div className={style.main}>
          <div className={style.mainLeft}>
            <p style={{ "text-indent": "25px", "text-align": "justify" }}>
              Весьма чувствительный датчик контроля двигательной активности
              человека устанавливается на сидения или под ножки стула,
              обеспечивает регистрацию минимальных перемещений и движений
              человека и снимает число моторных движений в минуту как показатель
              активности центральной нервной системы.
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
