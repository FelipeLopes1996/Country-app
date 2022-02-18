import React from "react";
import * as Styles from "./styles";

export const SelectFilter = ({
  reference = null,
  type,
  onSelectChange,
  value,
  placeholder,
}) => {
  const selectRef = React.useRef(reference);

  const handleChange = () => {
    const value = selectRef.current.value;

    if (onSelectChange) {
      onSelectChange(value);
    }
  };

  return (
    <Styles.WrapperSelect>
      <select ref={selectRef} value={value} onChange={handleChange}>
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="All">All</option>
        <option value="Europe">Europe</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </Styles.WrapperSelect>
  );
};
