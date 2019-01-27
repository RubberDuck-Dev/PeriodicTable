import React from "react";
import PeriodicTable from "./PeriodicTable/Table.js";
import { Key } from "./Key/Key.js";
import "./styles.css";

class App extends React.Component {

  componentDidMount(){
    
  }
  render() {
    return (
      <div style={{ width: "100%", display: "grid" }}>
        <PeriodicTable />
        <Key />
      </div>
    );
  }
}
export default App;
