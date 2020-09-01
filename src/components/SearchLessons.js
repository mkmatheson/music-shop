import React from "react";

const SearchLessons = ({ orderBy, orderDir, changeOrder }) => {
  return (
    <div className="search-lessons row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="SearchLessons"
            type="text"
            className="form-control"
            aria-label="Search Lessons"
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button
                className={`sort-by dropdown-item ${
                  orderBy === "studentName" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => changeOrder("studentName", orderDir)}
              >
                Student Name
              </button>
              <button
                className={`sort-by dropdown-item ${
                  orderBy === "lessonDate" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => changeOrder("lessonDate", orderDir)}
              >
                Date
              </button>
              <button
                className={`sort-by dropdown-item ${
                  orderBy === "instrumentName" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => changeOrder("instrumentName", orderDir)}
              >
                Instrument
              </button>
              <div role="separator" className="dropdown-divider" />
              <button
                className={`sort-by dropdown-item ${
                  orderDir === "asc" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => changeOrder(orderBy, "asc")}
              >
                Asc
              </button>
              <button
                className={`sort-by dropdown-item ${
                  orderDir === "desc" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => changeOrder(orderBy, "desc")}
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLessons;
