import React, { Component } from "react";
import style from "./style.module.scss";
import img1 from "../../images/sensors/photoplesmogram.jpg";
import img2 from "../../images/sensors/photoplesmogram2.jpg";

export default class HeartbeatInfo extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <h3 className={style.item}>Информация о датчиках сердцебиения</h3>
        </div>
        <div className={style.main}>
          <div className={style.mainLeft}>
            <p style={{ "text-indent": "25px", "text-align": "justify" }}>
              Датчик фотоплетизмограммы считывает показатели сердечно-сосудистой
              деятельности человека, а именно деятельность периферических
              кровеносных сосудов пальцев рук. В состоянии сильного
              эмоционального напряжения значительно изменяется количество крови
              в сосудах конечностей, что обеспечивает высокую информативность
              показателя.
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
