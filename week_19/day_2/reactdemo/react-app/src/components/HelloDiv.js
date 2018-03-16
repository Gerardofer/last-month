import React from "react";

const HelloDiv = () => ( 
    <React.Fragment>
        <div>
            <h1>My name is Gerardo!</h1>
            <h3>Things I like are:</h3>
        </div>
            
        <div>
            <ul>
                <p>Coding</p>
                <p>Aikido</p>
                <p>Learning</p>
            </ul>
        </div> 
        </React.Fragment>
)


export default HelloDiv;



// ```In this activity, we will render a list of JSX elements inside of a div.

// Instructions
// Replace the src folder of your React app with src. Stop the dev server if it is already running. Start the app in dev mode by running yarn start.

// Using the code in the HelloDiv.js file as a starting point, update the HelloDiv function so that it returns the following JSX:

// A heading tag introducing yourself, e.g., <h1>Hello! My name is <insert name here></h1>.

// An unordered list containing at least 3 things you like (these can be anything).

// Hints
// You will need to import the React library.

// Reference the previous HelloReact activity if you get stuck with any syntax.

// If you're trying to render multiple JSX tags from a single component, you should enclose all of the JSX tags within a single parent tag, such as a div.```
// Message Input

// Message #activities