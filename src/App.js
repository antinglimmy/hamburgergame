import "./App.css";
import React from "react";
import { DisplayOrder, GenerateOrders } from "./orders.js";
import {
  BunClass,
  CheeseClass,
  LettuceClass,
  TomatoClass,
  BottomBunClass,
  PattyClass,
  PicklesClass,
  BaconClass,
  PlateClass,
} from "./ingredientsclasses.js";
import CountDown from "./CountdownTimer";
import Button from "@mui/material/Button";
import Bun from "./images/TopBun.png";
import Tomato from "./images/Tomato.png";
import Lettuce from "./images/Lettuce.png";
import Cheese from "./images/Cheese.png";
import background from "./images/background4.jpg";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import logo from "./images/logo2.png";

const theme = createTheme({
  typography: {
    fontFamily: ["Chewy", "cursive"].join(","),
  },
});

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
      baconArray: [],
      picklesArray: [],
      pattyArray: [],
      plateArray: [],
      timeLeft: 15,
      submitOrder: null,
      earnings: 0,
      nextOrder: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkIngredients = this.checkIngredients.bind(this);
  }

  checkAndUpdateResult = () => {
    this.checkIngredients();
    console.log(this.state);
  };
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
        this.setState({ result: false }, () => this.updateResult());
      } else if (sortedSelectedIngredients[i] === this.state.order[i]) {
        this.setState({ result: true }, () => this.updateResult());
      } else {
        this.setState({ result: false }, () => this.updateResult());
      }
    }
  };

  updateResult = () => {
    if (this.state.result === true) {
      console.log("I happen");
      this.setState((state) => ({
        submitOrder: true,
        nextOrder: null,
        earnings: this.state.earnings + 5,
      }));
      console.log(this.state.submitOrder);
      console.log(this.state.result);
    } else {
      this.setState((state) => ({
        submitOrder: false,
      }));
    }
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
    } else if (selectedIngredient2 === "Pickles") {
      this.setState((state) => ({
        picklesArray: [...state.picklesArray, "Pickles"],
      }));
    } else if (selectedIngredient2 === "Patty") {
      this.setState((state) => ({
        pattyArray: [...state.pattyArray, "Patty"],
      }));
    } else if (selectedIngredient2 === "Bacon") {
      this.setState((state) => ({
        baconArray: [...state.baconArray, "Bacon"],
      }));
    }
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
      baconArray: [],
      picklesArray: [],
      pattyArray: [],
      plateArray: [],
    }));
  };

  nextOrder = () => {
    this.setState((state) => ({
      order: GenerateOrders(),
      selectedIngredients: [],
      result: null,
      selectedIngredientsTally: {},
      topBunArray: [],
      bottomBunArray: [],
      tomatoArray: [],
      cheeseArray: [],
      lettuceArray: [],
      baconArray: [],
      picklesArray: [],
      pattyArray: [],
      plateArray: [],
      timeLeft: 15,
      submitOrder: null,
      nextOrder: true,
    }));
  };
  render() {
    return (
      <div className="background">
        <ThemeProvider theme={theme}>
          <Typography component={"div"}>
            {/* <h3>Build me a {this.state.order}</h3> */}
            <div className="gameTitle">
              {" "}
              <img src={logo} alt="logo" className="logo"></img> Burger
              Restaurant
            </div>
            <div className="header">
              <CountDown seconds={15} nextOrder={this.state.nextOrder} />
              <p className="earnings">
                <MonetizationOnIcon />
                {this.state.earnings}
              </p>
            </div>

            {/* <h3>Build me a {this.state.order}</h3> */}
            <div className="ordersAndBurger">
              <div className="orders">
                Build me a <DisplayOrder order={this.state.order} />
              </div>
              <div className="burger">
                {this.state.topBunArray.map((ingredient) => (
                  <div>
                    <BunClass />
                    <BottomBunClass />
                    {/* <PlateClass /> */}
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
                {this.state.pattyArray.map((ingredient) => (
                  <PattyClass />
                ))}
                {this.state.baconArray.map((ingredient) => (
                  <BaconClass />
                ))}
                {this.state.picklesArray.map((ingredient) => (
                  <PicklesClass />
                ))}
              </div>
            </div>
            <div className="ingredients">
              {/* <Button> New button</Button> */}
              <button onClick={this.handleClick} className="ingredientButton">
                Bun
              </button>
              <button onClick={this.handleClick} className="ingredientButton">
                Tomato
              </button>
              <button onClick={this.handleClick} className="ingredientButton">
                Lettuce
              </button>
              <button onClick={this.handleClick} className="ingredientButton">
                Cheese
              </button>
              <button onClick={this.handleClick} className="ingredientButton">
                Bacon
              </button>
              <button onClick={this.handleClick} className="ingredientButton">
                Pickles
              </button>
              <button onClick={this.handleClick} className="ingredientButton">
                Patty
              </button>
            </div>
            <div className="otherGameButtons">
              <button onClick={this.resetChoices} className="ingredientButton">
                Reset Ingredients
              </button>
              <button onClick={this.nextOrder} className="ingredientButton">
                Next Order
              </button>
              <button
                onClick={this.checkAndUpdateResult}
                className="ingredientButton"
              >
                Submit Order
              </button>
            </div>

            {this.state.submitOrder === true && (
              <div className="result"> You have made the correct order!</div>
            )}
            {this.state.submitOrder === false && (
              <div className="result">
                {" "}
                You have made the incorrect order, try again!
              </div>
            )}
            {this.state.submitOrder === null && (
              <div className="result"> Preparing the order...</div>
            )}
          </Typography>
        </ThemeProvider>
      </div>
    );
  }
}

export default IngredientForm;
