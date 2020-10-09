import React, {Component} from "react";

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

//note btnType(referenced from Button UI) used here conforms to the exact naming used in Button.module.css file

class OrderSummary extends Component {

    //This could be a functional component, doesn't have to be a class
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey =>{
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;