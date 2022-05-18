import React, { useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
  return (n && n >= 0) ? n * factorial(n - 1) : 1;
}

function renderFactorial(n) {
  console.log("Render Factorial");
  return factorial(n);
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const [otherState, setOtherState] = useState(false);
  // благодаря useMemo при изменении otherState не происходит повторное вычисление factorial()
  const fact = useMemo(() => renderFactorial(value), [value]);
  const buttonColor = otherState ? "primary" : "success";

  const handleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setValue(prevState => prevState - 1);
  };

  const handleClick = () => {
    setOtherState(prevState => !prevState);
  };

  return (
      <>
        <CardWrapper>
          <SmallTitle>Кэширование сложных вычислений</SmallTitle>
          <Divider />
          <p>value: {value}</p>
          <p>factorial: {fact}</p>
          <button className={"btn btn-success me-4"} onClick={handleDecrement}>Decrement</button>
          <button className={"btn btn-primary"} onClick={handleIncrement}>Increment</button>
        </CardWrapper>
        <CardWrapper>
          <SmallTitle>Зависимость от сторонних setState</SmallTitle>
          <Divider />
          <button className={"btn btn-" + buttonColor} onClick={handleClick}>Change Color</button>
        </CardWrapper>
      </>
  );
};

export default ComplexCalculateExample;
