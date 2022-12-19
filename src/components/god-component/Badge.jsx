const style = {
  container: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    borderRadius: "8px",
  },
  value: {
    padding: "8px",
    borderRadius: "0px 8px 8px 0px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  label: {
    padding: "8px",
  },
};

export default function Badge({ name, value }) {
  return (
    <div style={style.container}>
      <span style={style.label}>{name}</span>
      <span style={style.value}>{value}</span>
    </div>
  );
}
