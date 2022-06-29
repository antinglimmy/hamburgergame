import "./App.css";
import React from "react";
import { DisplayOrder, GenerateOrders } from "./orders.js";
import {
  BunClass,
  CheeseClass,
  LettuceClass,
  TomatoClass,
  BottomBunClass,
} from "./ingredientsclasses.js";
import CountDown from "./CountdownTimer";
import { button } from "@material-ui/core";
import Bun from "./images/TopBun.png";
import Tomato from "./images/Tomato.png";
import Lettuce from "./images/Lettuce.png";
import Cheese from "./images/Cheese.png";

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredient: "",
      selectedIngredients: [],
      order: GenerateOrders(),
      result: null,
      selectedIngredientsTally: {},
      topBunArray: [],
      bottomBunArray: [],
      lettuceArray: [],
      cheeseArray: [],
      tomatoArray: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkIngredients = this.checkIngredients.bind(this);
  }

  checkIngredients = () => {
    let selectedIngredientsTally = {};
    for (let i = 0; i < this.state.selectedIngredients.length; i++) {
      if (
        this.state.selectedIngredients[i] in this.state.selectedIngredientsTally
      ) {
        selectedIngredientsTally[this.state.selectedIngredients[i]] += 1;
      } else {
        selectedIngredientsTally[this.state.selectedIngredients[i]] = 1;
      }
    }

    let sortedSelectedIngredients = this.state.selectedIngredients.sort();
    for (let i = 0; i < this.state.order.length; i++) {
      if (!(sortedSelectedIngredients[i] === this.state.order[i])) {
        this.setState({ result: false });
      } else if (sortedSelectedIngredients[i] === this.state.order[i]) {
        this.setState({ result: true });
      } else {
        this.setState({ result: false });
      }
    }
    console.log(this.state);
  };

  handleClick = (event) => {
    let selectedIngredient2 = event.target.innerText;
    this.setState((state) => ({
      selectedIngredient: event.target.innerText,
      selectedIngredients: [...state.selectedIngredients, selectedIngredient2],
    }));
    if (selectedIngredient2 === "Bun") {
      this.setState((state) => ({
        topBunArray: [...state.topBunArray, "Bun"],
      }));
    } else if (selectedIngredient2 === "Cheese") {
      this.setState((state) => ({
        cheeseArray: [...state.cheeseArray, "Cheese"],
      }));
    } else if (selectedIngredient2 === "Lettuce") {
      this.setState((state) => ({
        lettuceArray: [...state.lettuceArray, "Lettuce"],
      }));
    } else if (selectedIngredient2 === "Tomato") {
      this.setState((state) => ({
        tomatoArray: [...state.tomatoArray, "Tomato"],
      }));
    } else if (selectedIngredient2 === "Bottom Bun") {
      this.setState((state) => ({
        bottomBunArray: [...state.bottomBunArray, "Bottom Bun"],
      }));
    }
    console.log(this.state);
  };

  resetChoices = () => {
    this.setState((state) => ({
      selectedIngredients: [],
      result: null,
      selectedIngredientsTally: {},
      topBunArray: [],
      bottomBunArray: [],
      tomatoArray: [],
      cheeseArray: [],
      lettuceArray: [],
    }));
  };

  render() {
    return (
      <div>
        <header>
          <h1 className="gameTitle">Burger Restaurant</h1>
          {/* <h3>Build me a {this.state.order}</h3> */}
          <h3>
            Build me a <DisplayOrder order={this.state.order} />
          </h3>
          <button onClick={this.handleClick}>
            Bun <img src={Bun} alt="Bun" className="BunIcon"></img>
          </button>
          <button onClick={this.handleClick}>
            Tomato <img src={Tomato} alt="Tomato" className="TomatoIcon"></img>
          </button>
          <button onClick={this.handleClick}>
            Lettuce <img src={Lettuce} alt="Lettuce" className="LettuceIcon" />
          </button>
          <button onClick={this.handleClick}>
            Cheese <img src={Cheese} alt="Cheese" className="CheeseIcon" />
          </button>
          <button onClick={this.resetChoices}>Reset</button>
        </header>

        {/* <table>
        <tbody>
          <tr>
      <th>Ingredient List</th>
    </tr>
      {this.state.selectedIngredients.map((d, index) => (
    <tr key={index}>
      <td>{d}</td>
        </tr>))}
        </tbody>
      </table> */}
        <div className="burger">
          {this.state.topBunArray.map((ingredient) => (
            <div>
              <BunClass />
              <BottomBunClass />
            </div>
          ))}
          {this.state.lettuceArray.map((ingredient) => (
            <LettuceClass />
          ))}
          {this.state.tomatoArray.map((ingredient) => (
            <TomatoClass />
          ))}
          {this.state.cheeseArray.map((ingredient) => (
            <CheeseClass />
          ))}
        </div>

        <button onClick={this.checkIngredients}>Tally Ingredients</button>
        {this.state.result === true && (
          <div> You have made the correct order!</div>
        )}
        {this.state.result === false && (
          <div> You have made the incorrect order, try again!</div>
        )}
        <CountDown seconds={15} />
      </div>
    );
  }
}

export default IngredientForm;
