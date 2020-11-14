import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state ={
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1]  //preceding plus converts to number
            }

        }
        this.setState({ ingredients: ingredients, totalPrice: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        const CONTACT_DATA = '/contact-data';
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + CONTACT_DATA}
                       render={(props) => (
                           <ContactData
                               ingredient={this.state.ingredients}
                               price={this.state.totalPrice}
                               {...props} //we could have used withRouter instead of this
                           />
                           )}/>
                {/*
                 we are using the above as opposed to this so that we can pass data around
                <Route path={this.props.match.path + CONTACT_DATA} component={ContactData}/>
                */}
            </div>
        );
    }

    //remember Checkout was defined as a route hence has access to the location, match, history

}

export default Checkout;