import React from "react";
import { FaPlus } from "react-icons/fa";

class AddLesson extends React.Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      instrumentName: "",
      lessonDate: "",
      lessonTime: "",
      lessonNotes: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    //prevents page reload
    e.preventDefault();
    let tempLesson = {
      studentName: this.state.studentName,
      instrumentName: this.state.instrumentName,
      lessonDate: this.state.lessonDate,
      lessonTime: this.state.lessonTime,
      lessonNotes: this.state.lessonNotes,
    };

    this.props.addLesson(tempLesson);

    this.setState({
      studentName: "",
      instrumentName: "",
      lessonDate: "",
      lessonTime: "",
      lessonNotes: "",
    });

    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div
        className={`card textcenter mt-3 ${
          this.props.formDisplay ? "" : "add-lesson"
        }`}
      >
        <div
          className="lesson-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus />
          &nbsp; Add Lesson
        </div>

        <div className="card-body">
          <form id="lessonForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="studentName"
                readOnly
              >
                Student Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  placeholder="Student's Name"
                  value={this.state.studentName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="instrument"
              >
                Instrument
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="instrument"
                  placeholder="Instrument"
                  value={this.state.instrumentName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="lessonDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="lessonDate"
                  id="lessonDate"
                  value={this.state.lessonDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="lessonTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="lessonTime"
                  id="lessonTime"
                  value={this.state.lessonTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="lessonNotes">
                Lesson Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="lessonNotes"
                  id="lessonNotes"
                  placeholder="Lesson Notes"
                  value={this.state.lessonNotes}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Lesson
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddLesson;
