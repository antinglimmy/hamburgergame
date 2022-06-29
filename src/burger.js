import React from "react";
import Bun from "./images/TopBun.png";
import Tomato from "./images/Tomato.png";
import Lettuce from "./images/Lettuce.png";
import Cheese from "./images/Cheese.png";
import BottomBun from "./images/BottomBun.png";
import "./App.css";
// import { GenerateOrders } from "./utils";

class CheeseClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Cheese} alt="cheese" className="Cheese" />
      </div>
    );
  }
}
class BunClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Bun} alt="Bun" className="Bun" />
      </div>
    );
  }
}
class TomatoClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Tomato} alt="Tomato" className="Tomato" />
      </div>
    );
  }
}
class LettuceClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Lettuce} alt="Lettuce" className="Lettuce" />
      </div>
    );
  }
}
class BottomBunClass extends React.Component {
  render() {
    return (
      <div>
        <img src={BottomBun} alt="BottomBun" className="BottomBun" />
      </div>
    );
  }
}

class Burger extends React.Component {
  render() {
    const selectedIngredients = this.props.selectedIngredients;
    return (
      <div>
        <div> My burger</div>
        {/* {selectedIngredients.map((ingredient) => (
          <CheeseClass />
        ))} */}
      </div>
    );
  }
}

export {
  Burger,
  CheeseClass,
  BunClass,
  TomatoClass,
  LettuceClass,
  BottomBunClass,
};
