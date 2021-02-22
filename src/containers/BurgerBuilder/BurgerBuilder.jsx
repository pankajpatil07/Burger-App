import { Component } from "react";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES ={
    salad:0.5,
    bacon :0.47,
    meat : 1.3,
    cheese :0.4
}; 
class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad :0,
            bacon :0,
            cheese:0,
            meat:0 
        },
        totalPrice:4
    }

    addIngredientHandler = (type) => {
        const oldCount =this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngrediendts = {
            ...this.state.ingredients
        };
        updateIngrediendts[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice, ingredients : updateIngrediendts});

    }

    removedIngredientHandler = (type) => {
        const oldCount =this.state.ingredients[type];
        if (oldCount <=0 ){
            return 0;
        }
        const updateCount = oldCount - 1;
        const updateIngrediendts = {
            ...this.state.ingredients
        };
        updateIngrediendts[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice, ingredients : updateIngrediendts});

    }

    render(){
        return(
            <>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removedIngredientHandler}
                />
            </>
        );
    }
}

export default BurgerBuilder;