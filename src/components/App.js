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
      myLessons: [],
      lastIndex: 0,
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const lessons = result.map((item) => {
          item.lessonId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myLessons: lessons,
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddLesson />
                <SearchLessons />
                <ListLessons lessons={this.state.myLessons} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
