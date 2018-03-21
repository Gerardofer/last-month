import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  selectPage = () => {
    if (this.state.currentPage === "About"){
      return <About />
    }
    else if (this.state.currentPage === "Blog"){
      return <Blog />
    }
    else if (this.state.currentPage === "Contact") {
      return <Contact />
    }
    else {
      return <Home />
    }
  }

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />

        {this.selectPage()}
        
      </div>
    );
  }
}

export default PortfolioContainer;
