import React from "react";
import styled from "styled-components";
import { Item } from "./style.js";

// const Item = styled.ul`
//   display: grid;
//   grid-column: ${props => props.col};

//   margin: 0px;
//   padding: 0px;
//   margin-left: -1px;
//   margin-bottom: -1px;
//   text-align: center;
//   align-content: center;

//   background-color: ${props => props.theme[props.category]};
//   border: 1px solid black;
//   text-align: center;
//   font-size: 12px;

//   @media only screen and (max-width: 600px) {
//     padding-top: 5px;
//     padding-bottom: 5px;
//     font-size: 18px;
//   }
// `;

// Item.defaultProps = {
//   theme: {}
// };

export const KeyItem = props => {
  //console.log(props);
  return (
    <Item category={props.category} col={props.col}>
      {props.category}
    </Item>
  );
};
