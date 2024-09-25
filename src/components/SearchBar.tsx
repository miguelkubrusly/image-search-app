import "./SearchBar.css";
import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(searchTerm);
    setSearchTerm("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term and press Enter</label>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
