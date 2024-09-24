import React, { ChangeEvent, useState } from "react";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(searchTerm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
