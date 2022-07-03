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
import background from "./images/Background.png";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const theme = createTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
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
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkIngredients = this.checkIngredients.bind(this);
  }

  checkAndUpdateResult = () => {
    this.checkIngredients();
    this.updateResult();
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
        this.setState({ result: false });
      } else if (sortedSelectedIngredients[i] === this.state.order[i]) {
        this.setState({ result: true });
      } else {
        this.setState({ result: false });
      }
    }
  };

  updateResult = () => {
    if (this.state.result === true) {
      this.setState((state) => ({
        submitOrder: true,
        earnings: this.state.earnings + 5,
      }));
      console.log(this.state.earnings);
      console.log(this.state.result);
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
    }));
  };
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <ThemeProvider theme={theme}>
          <Typography component={"div"}>
            {/* <h3>Build me a {this.state.order}</h3> */}
            <h1 className="gameTitle">Burger Restaurant</h1>
            <div className="header">
              <CountDown seconds={15} submitOrder="true" />
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
              <button onClick={this.handleClick}>Bun</button>
              <button onClick={this.handleClick}>Tomato</button>
              <button onClick={this.handleClick}>Lettuce</button>
              <button onClick={this.handleClick}>Cheese</button>
              <button onClick={this.handleClick}>Bacon</button>
              <button onClick={this.handleClick}>Pickles</button>
              <button onClick={this.handleClick}>Patty</button>
            </div>
            <div className="otherGameButtons">
              <button onClick={this.resetChoices}>Reset Ingredients</button>
              <button onClick={this.nextOrder}>Next Order</button>
              <button onClick={this.checkAndUpdateResult}>Submit Order</button>
            </div>

            {this.state.submitOrder === true && (
              <div> You have made the correct order!</div>
            )}
            {this.state.submitOrder === false && (
              <div> You have made the incorrect order, try again!</div>
            )}
          </Typography>
        </ThemeProvider>
      </div>
    );
  }
}

export default IngredientForm;
