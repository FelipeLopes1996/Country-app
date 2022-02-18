import React from "react";
import * as Styles from "./styles";

export const InputSearch = ({
  reference = null,
  type,
  onInputChange,
  value,
  placeholder,
}) => {
  const inputRef = React.useRef(reference);

  const handleChange = () => {
    const value = inputRef.current.value;

    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <Styles.WrapperInput>
      <input
        ref={inputRef}
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </Styles.WrapperInput>
  );
};
