import React from "react";
import {
  ElementBox,
  ElementName,
  ElementNumber,
  ElementMass
} from "./style.js";

export const Element = props => {
  const element = props.element;
  return (
    <ElementBox
      key={element.number}
      row={element.ypos}
      col={element.xpos}
      id={element.number}
      category={element.category}
      onClick={e => props.onClick(e)}
    >
      <ElementName>{element.symbol}</ElementName>
      <ElementNumber>{element.number}</ElementNumber>
      <ElementMass>{element.atomic_mass.toFixed(3)}</ElementMass>
    </ElementBox>
  );
};
