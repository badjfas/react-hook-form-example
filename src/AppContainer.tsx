import React from "react";
import AppPresenter from "./AppPresenter";

interface ISubmit {
  email?: string;
  password?: string;
}
const AppContainer = () => {
  const onSubmit = (e: ISubmit) => {
    console.log(e);
  };
  return <AppPresenter onSubmit={onSubmit} />;
};

export default AppContainer;
