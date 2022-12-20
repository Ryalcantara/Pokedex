import style from "./styles/topbar.module.css";
import Search from "./Search";

export default function Header({ setActivePokemon }) {
  return (
    <header className={style.header}>
      <div className={style.leading}>
        <img src="/logo.png" id="page-logo" className={style["page-logo"]} />
        <span id="page-brand" className={style["page-brand"]}>
          POKEDEX
        </span>
      </div>
      <div className="trailing">
        <Search setActivePokemon={setActivePokemon} />
      </div>
    </header>
  );
}
