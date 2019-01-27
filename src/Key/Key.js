import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ElementsData } from "../ElementsData.js";
import { KeyItem } from "./KeyItem.js";
import { KeyContainer } from "./style.js";

export const Key = props => {
  const DistinctCategories = [
    ...new Set(ElementsData.elements.map(elem => elem.category))
  ];

  return (
    <KeyContainer>
      {DistinctCategories.map((category, idx) => {
        return (
          <ThemeProvider theme={ElementsData.theme} key={idx}>
            <KeyItem col={idx + 1} category={category} />
          </ThemeProvider>
        );
      })}
    </KeyContainer>
  );
};
