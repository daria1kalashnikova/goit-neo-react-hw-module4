import style from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputElement = form.querySelector("input");
    const query = inputElement.value;

    if (query.trim()) {
      form.reset();
      return onSubmit(query.toLowerCase());
    } else {
      toast.error("Please enter a search query");
    }
  }

  return (
    <header className={style["search-bar"]}>
      <form className={style["search-form"]} onSubmit={handleSubmit}>
        <input
          className={style["search-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
