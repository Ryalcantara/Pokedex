import { useEffect, useState, useCallback } from "react";
export default ({ data }) => {
  useEffect(() => {
    ///
  }, [data]);
  return (
    <>
      {data?.map((item, idx) => {
        if (item instanceof Array) {
          return (
            <div key={idx}>
              <div style={{ textAlign: "center" }}>evolves to</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {item.map((item) => {
                  return (
                    <RenderImage
                      key={item?.species?.name}
                      name={item?.species?.name}
                      url={item?.species?.url}
                    />
                  );
                })}
              </div>
            </div>
          );
        } else {
          return (
            <div
              style={{
                display: "grid",
                justifyItems: "center",
              }}
              key={idx}
            >
              <RenderImage
                name={item?.species?.name}
                url={item?.species?.url}
                key={item?.species?.name}
              />
            </div>
          );
        }
      })}
    </>
  );
};

function RenderImage({ name, url }) {
  const [fetched, setFetched] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) =>
        setFetched(res?.sprites?.other["official-artwork"]?.front_default)
      );
  }, [name, url]);
  return (
    <img src={fetched} title={name} alt={name} style={{ maxHeight: "200px" }} />
  );
}
