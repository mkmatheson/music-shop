import React, { Component } from "react";
import logo from "../logo.svg";
import "../css/App.css";
import AddLesson from "./AddLesson";
import SearchLessons from "./SearchLessons";
import ListLessons from "./ListLessons";

import { without } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myLessons: [],
      formDisplay: true,
      lastIndex: 0,
    };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addLesson = this.addLesson.bind(this);
  }

  addLesson(lesson) {
    let tempLessons = this.state.myLessons;
    lesson.lessonId = this.state.lastIndex;
    tempLessons.unshift(lesson);
    this.setState({
      myLessons: tempLessons,
      lastIndex: this.state.lastIndex + 1,
    });
  }

  deleteLesson(lesson) {
    let tempLessons = this.state.myLessons;
    tempLessons = without(tempLessons, lesson);
    console.log(tempLessons);

    this.setState({
      myLessons: tempLessons,
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
    });
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
                <AddLesson
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addLesson={this.addLesson}
                />
                <SearchLessons />
                <ListLessons
                  lessons={this.state.myLessons}
                  deleteLesson={this.deleteLesson}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
