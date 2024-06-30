import css from "./SearchBox.module.css";

export default function SearchBox({ value, onType }) {
  const handleChange = (ev) => {
    onType(ev.target.value);
  };
  return (
    <div className={css.wrap}>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
