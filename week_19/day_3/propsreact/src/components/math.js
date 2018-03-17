import React from "react";

export const Math = props => {
    let value;

    switch(props.operator) {
        case "+": value = props.num1 + props.num2;
        break;
        case "-": value = props.num1 - props.num2;
        break;
        case "*": value = props.num1 * props.num2;
        break;
        case "/": value = props.num1 / props.num2;
        break;
        default: "Nothing to caculate";
    };
    return <span>{value}</span>
}