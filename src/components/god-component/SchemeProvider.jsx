import { createContext, useState, useEffect } from "react";

export const Scheme = createContext({ scheme: "#d2cecb", setScheme: () => {} });
function SchemeProvider(props) {
  const [scheme, setScheme] = useState({
    color: "#d2cecb",
    pokemonName: "nothing",
  });

  function standardize_color(color) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = color;
    return ctx.fillStyle;
  }

  useEffect(() => {
    document.body.style.backgroundColor = scheme.color;
  }, [scheme]);
  return (
    <Scheme.Provider value={{ scheme, setScheme }}>
      <div
        style={{
          height: "inherit",
          width: "inherit",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        {props.children}
      </div>
    </Scheme.Provider>
  );
}

export default SchemeProvider;
