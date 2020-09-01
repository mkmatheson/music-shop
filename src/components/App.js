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
      orderBy: "studentName",
      orderDir: "asc",
      queryText: "",
      lastIndex: 0,
    };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addLesson = this.addLesson.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchLessons = this.searchLessons.bind(this);
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

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  searchLessons(query) {
    this.setState({ queryText: query });
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
    let order;
    let filteredLessons = this.state.myLessons;
    this.state.orderDir === "asc" ? (order = 1) : (order = -1); //return asc or desc

    filteredLessons = filteredLessons
      .sort((a, b) => {
        console.log(a[this.state.orderBy]);
        return a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
          ? -1 * order //multiplying by order var lets me reverse the sort
          : 1 * order;
      })
      .filter((eachItem) => {
        return (
          eachItem["studentName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["lessonDate"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["instrumentName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["studentNotes"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });
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
                <SearchLessons
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchLessons={this.searchLessons}
                />
                <ListLessons
                  lessons={filteredLessons}
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
