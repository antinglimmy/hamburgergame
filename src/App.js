import "./App.css";
import React from "react";
import { DisplayOrder, GenerateOrders } from "./utils.js";
import {
  BunClass,
  Burger,
  CheeseClass,
  LettuceClass,
  TomatoClass,
  BottomBunClass,
} from "./burger.js";
// import Countdown from "react-countdown";
import CountDown from "./CountdownTimer";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredient: "",
      selectedIngredients: [],
      order: GenerateOrders(),
      // order: ["Bun", "Lettuce"],
      result: null,
      selectedIngredientsTally: {},
      topBunArray: [],
      bottomBunArray: [],
      lettuceArray: [],
      cheeseArray: [],
      tomatoArray: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.tallyIngredients = this.tallyIngredients.bind(this);
  }

  tallyIngredients = () => {
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
    const classes = useStyles();
    return (
      <div>
        <header>
          <h1 className="gameTitle">Burger Restaurant</h1>
          {/* <h3>Build me a {this.state.order}</h3> */}
          <h3>
            Build me a <DisplayOrder order={this.state.order} />
          </h3>
          <Button onClick={this.handleClick}>Bun</Button>
          <Button onClick={this.handleClick}>Tomato</Button>
          <Button onClick={this.handleClick}>Lettuce</Button>
          <Button onClick={this.handleClick}>Cheese</Button>
          <Button onClick={this.resetChoices}>Reset</Button>
          {/* <Button onClick={this.handleClick}>Bottom Bun</Button> */}
          {/* <Button className="BunButton">
            <img src={BottomBun} alt="Bottom Bun" onClick={this.handleClick} />
          </Button> */}
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
          <Burger selectedIngredients={this.state.selectedIngredients} />
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
          {/* {this.state.bottomBunArray.map((ingredient) => (
            <BottomBunClass />
          ))} */}
        </div>
        <Button onClick={this.tallyIngredients}>Tally Ingredients</Button>
        {this.state.result === true && (
          <div> You have made the correct order!</div>
        )}
        {this.state.result === false && (
          <div> You have made the incorrect order, try again!</div>
        )}

        {/* <Countdown
          date={Date.now() + 10000}
          intervalDelay={0}
          precision={3}
          renderer={(props) => <div>{props.total}</div>}
        /> */}
        <CountDown seconds={15} />
        <Button className={classes.root}>Hook</Button>
      </div>
    );
  }
}

export default IngredientForm;
