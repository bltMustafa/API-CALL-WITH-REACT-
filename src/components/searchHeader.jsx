import { useState } from "react";

function SearchHeader({ search }) {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const divStyle = {
    border: "1px solid lightgray",
    padding: "10px",
    borderRadius: "5px",
  };

  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (e) => {
    search(valueInput);
      e.preventDefault();
    };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={divStyle}>
      <form onSubmit={handleFormSubmit} style={formStyle}>
        <label> Ne Arıyorsunuz ? </label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
