import { Scheme } from "./SchemeProvider";
import { useContext } from "react";
import Types from "./RenderTypes";
import Badge from "./Badge";
import style from "./styles/sprite.module.css";
///

export default function Sprite({ data }) {
  const scheme = useContext(Scheme);
  return (
    <div className={style["main-view"]}>
      <div className={style["banner"]}>
        <h1
          className={style["title"]}
          style={{
            color:
              scheme.scheme.color === "white" ||
              scheme.scheme.color === "yellow"
                ? "darkslategray"
                : "white",
          }}
        >
          {`#${data?.id}`} {data?.name}
        </h1>
      </div>
      <div className={style["image-wrapper"]}>
        <img src={data?.image} alt={data?.name} className={style.image} />
      </div>
      <div className={style["bottom-section"]}>
        <Types types={data?.types} />
        <Badge name="Experience" value={data?.experience} />
      </div>
    </div>
  );
}
