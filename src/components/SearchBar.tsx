import { useState } from "react";
import { FormEvent } from "react";

function SearchBar({ onSubmit }: any) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();

    onSubmit(searchTerm);
  };

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
