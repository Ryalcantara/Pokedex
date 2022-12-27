import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Pokemon } from "../../Provider";
import { useState, useContext, useEffect, useCallback, useRef } from "react";
export default ({ moves }) => {
  const loadingRef = useRef(null);
  const visible = useIntersectionObserver(loadingRef);
  const pageSize = 10;
  const [limit, setLimit] = useState(pageSize);
  const [offset, setOffset] = useState(0);
  const [renderedItems, setRenderedItems] = useState(
    moves?.slice(offset, limit)
  );

  const paginate = useCallback(() => {
    setTimeout(() => {
      setRenderedItems([...renderedItems, ...moves?.slice(offset + 1, limit)]);
      setOffset(limit + 1);
      setLimit(limit + pageSize);
    }, 500);
  });

  useEffect(() => {
    if (visible) {
      paginate();
    }
  }, [moves, visible]);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {renderedItems?.map((item, idx) => {
          return (
            <RenderMoveItem
              key={item.move.name + idx}
              url={item.move.url}
              name={item.move.name}
            />
          );
        })}
        <span
          ref={loadingRef}
          style={{
            display: moves.length <= renderedItems.length ? "none" : " block",
          }}
        >
          Loading...
        </span>
      </div>
    </>
  );
};

function RenderMoveItem({ name, url }) {
  const { pokemon } = useContext(Pokemon);
  const [move, setMove] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const temp = {
          accuracy: res?.accuracy,
          power: res?.power,
          pp: res?.pp,
          priority: res?.priority,
          target: res?.target?.name,
          name: res?.name,
          description: res?.flavor_text_entries[2]?.flavor_text,
        };
        setMove(temp);
      });
  }, [name, url]);
  return (
    <div style={{}} className="move-details-item">
      <div style={{}} className="move-details-item-wrapper">
        <div className="move-details-header" style={{}}>
          <span style={{ textTransform: "capitalize" }}>{move?.name}</span>
          <span title="priority">{move?.priority}</span>
        </div>
        <hr />
        <div>{move?.description}</div>
        <hr />
        <div className="move-details-value">
          <span style={{ fontWeight: "bold" }}>Target</span>
          <span>{move?.target}</span>
        </div>
        <div className="move-details-value">
          <span style={{ fontWeight: "bold" }}>Power</span>{" "}
          <span>{move?.power}</span>
        </div>
        <div className="move-details-value">
          <span style={{ fontWeight: "bold" }}>PP</span>
          <span>{move?.pp}</span>
        </div>
        <div className="move-details-value">
          <span style={{ fontWeight: "bold" }}>Accuracy</span>
          <span>{move?.accuracy ? `${move?.accuracy}%` : 0}</span>
        </div>
      </div>
      {move ? null : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backdropFilter: "blur(15px)",
            borderRadius: "8px",
          }}
        >
          ...Loading...
        </div>
      )}
    </div>
  );
}
