import { useState, useEffect, useCallback } from "react";
import TypeBuild from "../Types";

export default ({ data, species }) => {
  const [info, setInfo] = useState();
  const init = useCallback(
    async (data, species) => {
      const location_area =
        data?.location_area_encounters &&
        (await (await fetch(data?.location_area_encounters)).json());

      const parsedData = {
        id: data?.id,
        name: data?.name,
        height: data?.height,
        weight: data?.weight,
        description:
          species?.flavor_text_entries &&
          species?.flavor_text_entries?.find(
            (key) => key.language?.name === "en"
          )?.flavor_text,
        type: data?.types && data?.types?.map((item) => item.type.name),
        species: {
          shape: species?.shape?.name,
          habitat: species?.habitat?.name,
          egg_groups:
            species?.egg_groups && species.egg_groups.map((item) => item.name),
          varieties:
            species?.varieties && species.varieties.map((item) => item.pokemon),
          gender_rate: species?.gender_rate,
          capture_rate: species?.capture_rate,
        },
        abilities:
          data?.abilities && data.abilities.map((item) => item.ability.name),
        baby: species?.is_baby,
        legendary: species?.is_legendary,
        mythical: species?.is_mythical,
        growth: species?.growth_rate?.name,
        location_area,
      };
      setInfo(parsedData);
    },
    [data, species]
  );

  useEffect(() => {
    init(data, species);
  }, [data, species]);

  return (
    <div style={{ position: "relative" }}>
      <BuildItem name="ID">#{info?.id}</BuildItem>
      <BuildItem name="Name">{info?.name}</BuildItem>
      <BuildItem name="Description">{info?.description}</BuildItem>
      <BuildItem name="Type">{info?.type?.join(",")}</BuildItem>
      <BuildItem name="Height">
        {info?.height && info?.height / 10} m. (
        {info?.height && (info?.height / 3.048).toFixed(2)} ft.)
      </BuildItem>
      <BuildItem name="Weight">
        {info?.weight && info?.weight / 10} kg. (
        {info?.weight && (info?.weight / 4.536).toFixed(2)} lb.)
      </BuildItem>
      <br />
      <h5>SPECIES</h5>
      <BuildItem name="Habitat">{info?.species?.habitat}</BuildItem>
      <BuildItem name="Shape">{info?.species?.shape}</BuildItem>
      <BuildItem name="Egg Group">
        {info?.species?.egg_groups?.join(",")}
      </BuildItem>
      <BuildItem name="Capture Rate">
        {info?.species?.capture_rate &&
          ((info?.species?.capture_rate / 255) * 100).toFixed(1)}
        % Chance
      </BuildItem>
      <BuildItem name="Location">
        {info?.location_area?.length > 0
          ? info?.location_area
              ?.map((item) => item.location_area.name)
              ?.join(",")
          : "N/A"}
      </BuildItem>
      <BuildItem name="Varieties">
        {info?.species?.varieties?.map((item) => item.name)?.join(",")}
      </BuildItem>
      <BuildItem name="Baby">{info?.baby ? "YES" : "NO"}</BuildItem>
      <BuildItem name="Mythical">{info?.mythical ? "YES" : "NO"}</BuildItem>
      <BuildItem name="Legendary">{info?.legendary ? "YES" : "NO"}</BuildItem>
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

function BuildItem(props) {
  return (
    <div className="info-wrapper">
      <span className="info-wrapper-label">{props.name}</span>
      <span className="info-wrapper-data">{props.children}</span>
    </div>
  );
}
