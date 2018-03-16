import React from "react";

const name = "Gerardo";
const numLetter = []
const letterCount = numLetter.push(name.split(''));
const opinions = ["is Great", "is powerful", "is Fun!!"];

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {numLetter.length} letters</h2>
        <h2>I think React {opinions.forEach((opinion) => {return opinion})}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
