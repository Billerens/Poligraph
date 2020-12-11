import InfoButton from "../../components/infoButton/InfoButton";
import style from "./style.module.scss";

function Breath() {
  return <InfoButton navTo={"/breathInfo"} className={style.item} />;
}

export default Breath;
