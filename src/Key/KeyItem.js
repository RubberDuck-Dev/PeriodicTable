import React from "react";
import styled from "styled-components";
import { Item } from "./style.js";

export const KeyItem = props => {
  //console.log(props);
  return (
    <Item category={props.category} col={props.col}>
      {props.category}
    </Item>
  );
};
