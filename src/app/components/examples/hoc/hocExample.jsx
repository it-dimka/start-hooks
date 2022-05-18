import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";

const HOCExample = () => {
  const ComponentsWithAuth = withLogin(Component);
  const ComponentsWithPropsStyles = withPropsStyles(Component);
  const ComponentComposed = withPropsStyles(ComponentsWithAuth);
  return (
      <>
        <CardWrapper>
          <SmallTitle>1. Обычный компонент</SmallTitle>
          <Divider/>
          <Component/>
        </CardWrapper>
        <CardWrapper>
          <SmallTitle>2. Функциональный HOC</SmallTitle>
          <Divider />
          <ComponentsWithAuth/>
        </CardWrapper>
        <CardWrapper>
          <SmallTitle>3. HOC With Styles and Props</SmallTitle>
          <Divider />
          <ComponentsWithPropsStyles />
        </CardWrapper>
        <CardWrapper>
          <SmallTitle>4. Composed HOC</SmallTitle>
          <Divider />
          <ComponentComposed />
        </CardWrapper>
      </>
  );
};

export default HOCExample;
