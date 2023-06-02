import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative ">
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Search for a country"
            className="block py-4 pl-12 bg-white  w-[420px]  outline-none text-lg rounded-md"
          />
          <GoSearch className="text-white text-2xl absolute top-4 left-2" />
        </div>
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
};

export default SearchBar;
