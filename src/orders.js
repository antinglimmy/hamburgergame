import orders from "./orders.json";
import Cheese from "./images/Cheese.png";
import Bun from "./images/TopBun.png";
import Tomato from "./images/Tomato.png";
import Lettuce from "./images/Lettuce.png";
import BottomBun from "./images/BottomBun.png";
import Bacon from "./images/Bacon.png";
import Plate from "./images/Plate.png";
import Pickles from "./images/Pickles.png";
import Patty from "./images/Patty.png";
import React from "react";
import "./App.css";

export const GenerateOrders = () => {
  let currentOrder = orders[Math.floor(Math.random() * orders.length)];
  return currentOrder;
};

class DisplayOrder extends React.Component {
  render() {
    let order = this.props.order;
    return order.map((item) => {
      if (item === "Cheese") {
        return (
          <div>
            <img src={Cheese} alt="Cheese" className="CheeseIcon" />
            <span>Cheese</span>
          </div>
        );
      } else if (item === "Bun") {
        return (
          <div>
            <img src={Bun} alt="Bun" className="BunIcon" />
            <span>Bun</span>
          </div>
        );
      } else if (item === "Pickles") {
        return (
          <div>
            <img src={Pickles} alt="Pickles" className="PicklesIcon" />
            <span>Pickles</span>
          </div>
        );
      } else if (item === "Patty") {
        return (
          <div>
            <img src={Patty} alt="Patty" className="PattyIcon" />
            <span>Patty</span>
          </div>
        );
      } else if (item === "Bacon") {
        return (
          <div>
            <img src={Bacon} alt="Bacon" className="BaconIcon" />
            <span>Bacon</span>
          </div>
        );
      } else if (item === "Lettuce") {
        return (
          <div>
            <img src={Lettuce} alt="Lettuce" className="LettuceIcon" />
            <span>Lettuce</span>
          </div>
        );
      } else if (item === "Tomato") {
        return (
          <div>
            <img src={Tomato} alt="Tomato" className="TomatoIcon" />
            <span>Tomato</span>
          </div>
        );
      } else if (item === "BottonBun") {
        return (
          <div>
            <img src={BottomBun} alt="BottomBun" className="BottomBun" />
            <span>BottomBun</span>
          </div>
        );
      }
    });
  }
}

export { DisplayOrder };
