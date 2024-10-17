import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <label className={styles.searchBox}>
      Find contacts by name
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={onFilter}
        placeholder="Search contacts..."
      />
    </label>
  );
}

export default SearchBox;