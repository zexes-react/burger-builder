import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ( props ) => {
   //Remember we are getting an object of key-value pairs from BurgerBuilder
    //we are converting it to an array of BurgerBuilder
    //* for each key in object, Note remember this can take (key, index) pair too
    //# spread the value(int) as an array length
    //$ for each index in Array now we ignore the element(_) but use the index(i)
    //we build the <burgerIngredient/> with //key = salad2 unique key
    // to get all the inner arrays as one single array we use reduce... to see inner arrays, comment out reduce
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => { //*
            return [...Array(props.ingredients[igKey])] //#
                .map((_, i)=>{ //$
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    console.log(transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
  return(
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
      </div>
  );
};

export default burger;