import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

const ListLessons = ({ lessons, deleteLesson, updateInfo }) => {
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
            <span
              className="student-name"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateInfo("studentName", e.target.innerText, item.lessonId)
              }
            >
              {item.studentName}
            </span>
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
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateInfo("instrumentName", e.target.innerText, item.lessonId)
              }
            >
              {item.instrumentName}
            </span>
          </div>
          <div
            className="lesson-notes"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              updateInfo("studentNotes", e.target.innerText, item.lessonId)
            }
          >
            {item.studentNotes}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ListLessons;
