import React from "react";
import { ThemeProvider } from "styled-components";
import { ElementsData } from "../ElementsData.js";
import { Element } from "./Element.js";
import { ToolTip } from "./ToolTip.js";
import { Container } from "./style.js";

class PeriodicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedElement: null
    };
  }

  handleClick = e => {
    //console.log(e.target.parentNode.id);
    const elem = e.target.parentNode.id;
    this.setState({ clickedElement: elem });
  };

  closeToolTip = e => {
    this.setState({ clickedElement: null });
  };

  render() {
    return (
      <Container>
        {this.state.clickedElement && (
          <ToolTip
            elem={this.state.clickedElement}
            closeToolTip={e => this.closeToolTip(e)}
          />
        )}
        {ElementsData.elements.map((element, idx) => {
          return (
            <ThemeProvider
              idx={idx}
              theme={ElementsData.theme}
              key={element.number}
            >
              <Element element={element} onClick={e => this.handleClick(e)} />
            </ThemeProvider>
          );
        })}
      </Container>
    );
  }
}

export default PeriodicTable;
