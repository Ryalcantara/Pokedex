import { createContext, useState, useEffect } from "react";
import "./styles/styles.css";

export const Scheme = createContext({ scheme: "#d2cecb", setScheme: () => {} });
function SchemeProvider(props) {
  const [scheme, setScheme] = useState({
    color: "#d2cecb",
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
      <div className="body-tint">{props.children}</div>
    </Scheme.Provider>
  );
}

export default SchemeProvider;
