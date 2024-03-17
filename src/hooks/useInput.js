import { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return [value, handleValueChange, setValue];
};

export default useInput;
