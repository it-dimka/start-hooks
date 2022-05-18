import React, { useState } from "react";
import Card from "../../common/Card";
import Subtitle from "../../common/typografy/subtitle";

const withFunctions = (Component) => (props) => {
  const isAuth = !!localStorage.getItem("user");
  const [state, setState] = useState(isAuth);

  const onLogin = () => {
    setState(true);
    localStorage.setItem("user", "UserName");
  };

  const onLogOut = () => {
    setState(false);
    localStorage.removeItem("user");
  };

  return (
      <Card>
        <Subtitle>SimpleComponent</Subtitle>
        <Component isAuth={state} onLogin={onLogin} onLogOut={onLogOut} {...props} />
      </Card>
  );
};

export default withFunctions;
