import React from "react";
import { ElementsData } from "../ElementsData.js";
import {
  ToolTipBox,
  Header,
  Number,
  Summary,
  DetailTable,
  DetailCategory,
  DetailTableRow,
  Close
} from "./style.js";

export const ToolTip = props => {
  //console.log(Elements.elements[props.elem]);

  const element = ElementsData.elements[props.elem - 1];

  return (
    <ToolTipBox>
      <Header href={element.source}>{element.name}</Header>
      <DetailCategory>{element.category.toUpperCase()}</DetailCategory>

      <Number>#{element.number}</Number>

      <Summary>{element.summary}</Summary>

      <DetailTable>
        <DetailTableRow>
          Atom Mass: {element.atomic_mass.toFixed(3)}g/mol
        </DetailTableRow>
        <DetailTableRow>
          Density: {element.density}"g/cm<sup>3</sup>
        </DetailTableRow>
        <DetailTableRow>
          Boil Point: {element.boil}
          {element.boil ? "K" : ""}
        </DetailTableRow>
        <DetailTableRow>
          Melt Point: {element.melt}
          {element.melt ? "K" : ""}
        </DetailTableRow>
        <DetailTableRow>
          Molar Heat: {element.molar_heat}
          {element.molar_heat ? "mol/K" : ""}
        </DetailTableRow>
        <DetailTableRow>
          Electronegativity: {element.electronegativity}pu
        </DetailTableRow>
      </DetailTable>
      <Close onClick={e => props.closeToolTip(e)}>x</Close>
    </ToolTipBox>
  );
};
