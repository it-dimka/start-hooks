import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";

const CloneElementExample = () => {
  const field = <TextField label={"email"} name={"email"}/>;
  const handleChange = (target) => {
    console.log("change: ", target);
  };
  return (
      <CardWrapper>
        <SmallTitle>Пример</SmallTitle>
        {field}
        {React.cloneElement(field, { label: "clone email", onChange: handleChange })}
      </CardWrapper>
  );
};

export default CloneElementExample;
