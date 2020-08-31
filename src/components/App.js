import React, { Component } from "react";
import logo from "../logo.svg";
import "../css/App.css";
import AddLesson from "./AddLesson";
import SearchLessons from "./SearchLessons";
import ListLessons from "./ListLessons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myName: "Buddy",
    };
  }

  render() {
    return (
      <main class="page bg-white" id="petratings">
        <div class="container">
          <div class="row">
            <div class="col-md-12 bg-white">
              <div class="container">
                <AddLesson />
                <SearchLessons />
                <ListLessons />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
