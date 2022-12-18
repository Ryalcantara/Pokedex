export default function _({
  result,
  next,
  previous,
  currentPokemon,
  setCurrentPokemon,
}) {
  return (
    <div>
      <button onClick={() => previous()}>Previous</button>
      {result?.map((item) => (
        <li
          key={item.url}
          onClick={() => setCurrentPokemon({ name: item.name, url: item.url })} //change active pokemon
          style={{
            color: item.name === currentPokemon.name ? "red" : "inherit", //emulate active state
            cursor: "pointer",
          }}
        >
          {item.name}
        </li>
      ))}
      <button onClick={() => next()}>Next</button>
    </div>
  );
}
