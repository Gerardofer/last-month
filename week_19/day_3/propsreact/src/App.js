import React from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friendCard from "./components/friendCard";
import SpongeBobCard from "./components/SpongeBobCard/SpongeBobCard";


const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard />
  </Wrapper>
);

export default App;

// Still inside of src/App.js, use the first friend object in the friends JSON file to pass the following props down to your rendered FriendCard component.

// name

// image

// occupation

// location

// Modify the FriendCard component so that it accepts and renders all of the passed props in place of the currently hard coded values. Once complete, check your browser to make sure the first FriendCard is still being properly rendered.

// Inside of src/App.js, render another FriendCard component for the second and third piece of friend data. Pass down the appropriate JSON data for each as props. If successful, you should see each friend being rendered to the browser, utilizing the same same FriendCard component three times.

// Hints
// Check out React’s documentation on components & props
