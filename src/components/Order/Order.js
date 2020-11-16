import React from 'react';

import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];

    // same as the one in the burger
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span key={ig.name}
                     style={{textTransform: 'capitalize',
                     display: 'inline-block',
                     margin: '0 8px',
                     border: 'ipx solid #ccc',
                     padding: '5px'}}>
            amount {ig.name} {ig.amount}
        </span>
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;