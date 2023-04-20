import React from "react";
import Card from "../Card";
import Player from "../Player";
import './styles.css';

const Hastag = ()=>(
 
    <Card>
      <ul className="hastag">
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>

        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>

        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>
      </ul>
     </Card>

);

export default Hastag;