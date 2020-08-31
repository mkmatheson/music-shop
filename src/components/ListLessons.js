import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

const ListLessons = ({ lessons, deleteLesson }) => {
  return lessons.map((item) => (
    <div key={item.lessonId} className="lesson-list item-list mb-3">
      <div className="student-item col media py-3">
        <div className="mr-3">
          <button
            onClick={() => deleteLesson(item)}
            className="student-delete btn btn-sm btn-danger"
          >
            <FaTimes />
          </button>
        </div>

        <div className="student-info media-body">
          <div className="student-head d-flex">
            <span className="student-name">{item.studentName}</span>
            <span className="lesson-date ml-auto">
              <Moment
                date={item.lessonDate}
                parse="YYYY-MM-dd hh:mm"
                format="MMM-D h:mma"
              ></Moment>
            </span>
          </div>

          <div className="instrument-name">
            <span className="label-item">Instrument: </span>
            <span>{item.instrument}</span>
          </div>
          <div className="lesson-notes">{item.studentNotes}</div>
        </div>
      </div>
    </div>
  ));
};

export default ListLessons;
