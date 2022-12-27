import { useState, useEffect, useCallback, useMemo } from "react";

export default ({ data, species }) => {
  const [info, setInfo] = useState({});
  const init = useCallback(
    async (data, species) => {
      const statstemplate = {
        experience: data?.base_experience,
        happiness: species?.base_happiness,
        capture: species?.capture_rate,
        stats:
          data?.stats &&
          data.stats.map((item) => ({
            name: item.stat.name,
            value: item.base_stat,
          })),
      };
      setInfo(statstemplate);
    },
    [data, species]
  );

  useEffect(() => {
    init(data, species);
  }, [data, species]);

  return (
    <div style={{ width: "inherit", position: "relative" }}>
      <BuildStat
        name={"HP"}
        value={info?.stats?.find((key) => key.name === "hp")?.value}
        maxValue={252}
      />
      <BuildStat
        name={"Attack"}
        value={info?.stats?.find((key) => key.name === "attack")?.value}
        maxValue={252}
      />
      <BuildStat
        name={"Defence"}
        value={info?.stats?.find((key) => key.name === "defense")?.value}
        maxValue={252}
      />
      <BuildStat
        name={"Sp. Attack"}
        value={info?.stats?.find((key) => key.name === "special-attack")?.value}
        maxValue={252}
      />
      <BuildStat
        name={"Sp. Defence"}
        value={
          info?.stats?.find((key) => key.name === "special-defense")?.value
        }
        maxValue={252}
      />
      <BuildStat
        name={"Speed"}
        value={info?.stats?.find((key) => key.name === "speed")?.value}
        maxValue={252}
      />
      {!info ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(15px)",
            display: "grid",
            placeItems: "center",
          }}
        >
          ...Loading....
        </div>
      ) : null}
    </div>
  );
};

function BuildStat({ name, value, maxValue }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(((value / maxValue) * 100).toFixed(1));
  }, [name, value, maxValue]);

  const getColor = (calc) => {
    if (calc < 40 && calc > 0) {
      return "orangered";
    } else if (calc < 60 && calc > 40) {
      return "orange";
    } else if (calc < 100 && calc > 60) {
      return "green";
    }
  };

  return (
    <div
      className="stat-item"
      style={{
        display: "grid",
        gap: "10px",
        alignItems: "flex-start",
        gridTemplateColumns: "25% 5% 1fr",
        width: "100%",
        height: "auto",
        padding: "10px 0",
      }}
    >
      <div className="stat-name">{name}</div>
      <div className="stat-data">{value}</div>
      <div className="stat-progress-wrapper">
        <div
          className="stat-progress-wrapper-progress"
          style={{
            backgroundColor: getColor(percentage),
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
