import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  // WithOutCallback
  const validateWithOutCallback = (data) => {
    console.log(data);
  };
  useEffect(() => {
    withOutCallback.current++;
  }, [validateWithOutCallback]);

  // WithCallback
  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithOutCallback(data);
    validateWithCallback(data);
  }, [data]);

  return (
      <CardWrapper>
        <SmallTitle>Example</SmallTitle>
        <Divider/>
        <p>WithOutCallback: {withOutCallback.current}</p>
        <p>WithCallback: {withCallback.current}</p>
        <label htmlFor="email" className={"form-label"}>Email</label>
        <input id="email" name={"email"} type={"email"} className={"form-control"}
               value={data.email || ""} onChange={handleChange}/>
      </CardWrapper>
  );
};

export default UseCallBackExample;
