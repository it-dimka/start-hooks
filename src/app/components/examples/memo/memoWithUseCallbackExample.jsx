import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render button");
  });
  return <button className={"btn btn-primary"} onClick={onLogOut}>LogOut</button>;
};

LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};

// В сочетании с useCallback позволяет избавиться от перерендера LogOutButton
// const MemoizedLogOutButton = React.memo(LogOutButton);

// функция сверки (как альтернитива методу сверки React)
function areEqual(prevState, nextState) {
  // if (prevState.onLogOut !== nextState.onLogOut) return false;
  // return true;
  return prevState.onLogOut === nextState.onLogOut;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);

  return (
      <>
        <button className={"btn btn-primary me-4"} onClick={() => setState(!state)}>initiate rerender</button>
        <MemoizedLogOutButton onLogOut={handleLogOut} />
      </>
  );
};

export default MemoWithUseCallbackExample;
