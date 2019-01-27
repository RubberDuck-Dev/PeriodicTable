import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: 1fr;
`;

export const ElementBox = styled.ul`
  display: grid;
  grid-row: ${props => props.row};
  grid-column: ${props => props.col};
  grid-template-rows: 1fr 1fr 1fr;

  margin: 0px;
  padding: 0px;
  margin-left: -1px;
  margin-bottom: -1px;

  list-style-type: none;
  background-color: ${props => props.theme[props.category]};
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;

  &:hover {
    filter: brightness(85%);
  }
`;

ElementBox.defaultProps = {
  theme: {}
};

export const ElementName = styled.li`
  font-weight: bold;
  @media only screen and (max-width: 600px) and (orientation: landscape) {
    font-size: 30px;
  }
`;
export const ElementNumber = styled.li``;
export const ElementMass = styled.li`
  font-size: 10px;
`;

export const ToolTipBox = styled.div`
  grid-column: 3 / span 10;
  grid-row: 1 / span 3;
  display: inline-grid;

  border: 1px solid black;
  border-raius: 5px;
  margin-bottom: -1px;
  margin-left: -1px;

  @media only screen and (max-width: 600px) {
    display: block;

    position: absolute;
    top: 20%;
    left: 0%;

    font-size: 24px;
    width: 200vw;
    z-index: 100;
    background-color: white;
  }
`;

export const Header = styled.a`
  font-size: 26px;
  grid-column: 1 / span 2;
  grid-row: 1;

  padding-left: 5px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;

export const Number = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;

export const Summary = styled.div`
  color: #adadad;
  grid-row: 1 / span 2;
  grid-row: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: block;
  line-height: 1em;
  max-height: 4em;
  margin-right: 5px;

  padding-left: 5px;
  padding-top: 5px;

  @media only screen and (max-width: 600px) {
    display: block;
    line-height: 1em;
    max-height: 10em;

    padding-left: 10px;
    padding-top: 10px;

    margin-right: 50px;
    margin-left: 50px;
  }
`;

export const DetailTable = styled.div`
  display:grid;
  grid-column:3 /span 2;
  grid-row 2 / span 3;
  grid-template-columns: 1fr 1fr;
  margin-right: 5px;
  margin-bottom: 5px;

    @media only screen and (max-width: 600px) {
    display:block;
    margin-top:25px;
}

`;

export const DetailCategory = styled.div`
  font-size: 12px;
  grid-column: 1;
  grid-row: 2;
  padding-left: 5px;
  color: #adadad;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    padding-left: 10p;
    padding-top: 10px;
  }
`;

export const DetailTableRow = styled.div`
  grid-column: 1 / span 2;

  margin-bttom: -1px;
  margin-right: -1px;

  padding-left: 5px;

  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: nowrap;
`;

export const Close = styled.div`
  grid-column: 4;
  grim-row: 1;
  padding-left: 5px;
  padding-right: 5px;
  padding-bttom: 1px;

  border: 1px solid #dbdbdb;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    text-align: center;
    background-color: #e04e4e;

    margin-top: 25px;
    margin-left: 25px;
    margin-right: 50px;
  }
`;
