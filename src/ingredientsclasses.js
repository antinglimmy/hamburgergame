import React from "react";
import Bun from "./images/TopBun.png";
import Tomato from "./images/Tomato.png";
import Lettuce from "./images/Lettuce.png";
import Cheese from "./images/Cheese.png";
import BottomBun from "./images/BottomBun.png";
import Bacon from "./images/Bacon.png";
import Plate from "./images/Plate.png";
import Pickles from "./images/Pickles.png";
import Patty from "./images/Patty.png";

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
class BaconClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Bacon} alt="Bacon" className="Bacon" />
      </div>
    );
  }
}
class PicklesClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Pickles} alt="Pickles" className="Pickles" />
      </div>
    );
  }
}
class PattyClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Patty} alt="Patty" className="Patty" />
      </div>
    );
  }
}
class PlateClass extends React.Component {
  render() {
    return (
      <div>
        <img src={Plate} alt="Plate" className="Plate" />
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

export {
  CheeseClass,
  BunClass,
  TomatoClass,
  LettuceClass,
  BottomBunClass,
  PicklesClass,
  PattyClass,
  PlateClass,
  BaconClass,
};
