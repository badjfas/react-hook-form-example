import React from "react";
import { useForm } from "react-hook-form";
import useInput from "./hooks/useInput";
import { Input, Wrapper, AuthBox } from "./styles";

interface IApp {
  onSubmit: (_: any) => void;
}
const AppPresenter = ({ onSubmit }: IApp) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const emailInput = useInput();
  const pwdInput = useInput();
  return (
    <Wrapper>
      <AuthBox onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          type="email"
          ref={register({ required: true })}
          {...emailInput}
        />
        <Input
          name="password"
          type="password"
          ref={register({ required: true })}
          {...pwdInput}
        />

        <button>12345</button>
      </AuthBox>
    </Wrapper>
  );
};

export default AppPresenter;
