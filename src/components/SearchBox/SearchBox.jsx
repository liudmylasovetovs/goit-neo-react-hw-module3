import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <label className={styles.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default SearchBox;