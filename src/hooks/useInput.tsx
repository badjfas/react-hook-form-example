import React, { ChangeEvent, useState } from "react";
import { Input } from "../styles";

const useInput = () => {
  const [value, setValue] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useInput;
