import InfoButton from "../../components/infoButton/InfoButton";
import style from "./style.module.scss";

function Skin() {
  return <InfoButton navTo={"/skinInfo"} className={style.item} />;
}

export default Skin;
