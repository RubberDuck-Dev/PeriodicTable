import styled from "styled-components";

export const Item = styled.ul`
  display: grid;
  grid-column: ${props => props.col};

  margin: 0px;
  padding: 0px;
  margin-left: -1px;
  margin-bottom: -1px;
  text-align: center;
  align-content: center;

  background-color: ${props => props.theme[props.category]};
  border: 1px solid black;
  text-align: center;
  font-size: 12px;

  @media only screen and (max-width: 600px) {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 18px;
  }
`;

Item.defaultProps = {
  theme: {}
};

export const KeyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
