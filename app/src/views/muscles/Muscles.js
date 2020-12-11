import InfoButton from "../../components/infoButton/InfoButton";
import style from "./style.module.scss";

function Muscles() {
  return <InfoButton navTo={"/musclesInfo"} className={style.item} />;
}

export default Muscles;
