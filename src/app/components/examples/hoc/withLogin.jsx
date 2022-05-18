import React from "react";
import Subtitle from "../../common/typografy/subtitle";

const withLogin = (Components) => (props) => {
  const isLogin = localStorage.getItem("auth");
  return (
      <>
        {isLogin ? <Components {...props} /> : <Subtitle>Auth</Subtitle>}
      </>
  );
};

export default withLogin;
