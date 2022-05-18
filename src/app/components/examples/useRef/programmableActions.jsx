import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();

  const getFocus = () => {
    console.log(inputRef.current.clientWidth);
    inputRef.current?.focus();
  };

  const changeWidth = () => {
    inputRef.current.style.width = "100px";
  };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">Программируемые действия и свойства</SmallTitle>
          <Divider />
          <label htmlFor="email" className={"form-label"}>Email</label>
          <input id="email" ref={inputRef} type={"email"} className={"form-control"}/>
          <button className={"btn btn-primary mt-2"} onClick={getFocus}>Focus input</button>
          <button className={"btn btn-success mt-2 ms-2"} onClick={changeWidth}>Change width</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
