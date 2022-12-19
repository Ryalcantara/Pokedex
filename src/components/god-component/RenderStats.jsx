import { Scheme } from "./SchemeProvider";
import { useContext } from "react";
import Badge from "./Badge";
import style from "./styles/stats.module.css";
///
export default function Stats({ data }) {
  const scheme = useContext(Scheme);
  return (
    <div className={style.wrapper}>
      <div
        className={style.divider}
        style={{
          backgroundColor:
            scheme.scheme.color === "white" || scheme.scheme.color === "yellow"
              ? "darkslategray"
              : "white",
        }}
      />
      <div className={style.content}>
        <h2
          className={style.title}
          style={{
            color:
              scheme.scheme.color === "white" ||
              scheme.scheme.color === "yellow"
                ? "darkslategray"
                : "white",
          }}
        >
          STATS
        </h2>
        <div className={style.items}>
          {data.stats.map((item) => {
            return <Badge name={item.name} value={item.stat} key={item.name} />;
          })}
        </div>
        <hr />
        <div className={style.items}>
          <Badge name={"height"} value={data.physical.height} />
          <Badge name={"weight"} value={data.physical.weight} />
        </div>
        <hr />
        <div className={style.items}>
          {data.abilities.map((item) => {
            return (
              <Badge name={"Ability"} value={item.ability} key={item.ability} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
