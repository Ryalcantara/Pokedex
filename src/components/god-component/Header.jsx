import style from "./styles/topbar.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.leading}>
        <img src="/logo.png" id="page-logo" className={style["page-logo"]} />
        <span id="page-brand" className={style["page-brand"]}>
          POKEDEX
        </span>
      </div>
      <div className="trailing">{/**SEARCH BAR */}</div>
    </header>
  );
}
