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
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  marginBottom: "10px",
                  color: "lightgray",
                }}
              >
                (Evolve To)
              </div>
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
    <div>
      <div className="evolution-item">
        <img
          src={fetched}
          alt={name}
          loading={"lazy"}
          className="evolution-item-image"
          placeholder="Loading Pokemon"
        />
        <div className="evolution-item-name" style={{ textAlign: "center" }}>
          {name}
        </div>
      </div>
    </div>
  );
}
