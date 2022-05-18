import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return isAuth
      ? <button className={"btn btn-success"} onClick={onLogOut}>LogOut</button>
      : <button className={"btn btn-primary"} onClick={onLogin}>Login</button>;
};

SimpleComponent.propTypes = {
  isAuth: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func
};

export default SimpleComponent;
