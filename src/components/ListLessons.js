import React from "react";

const ListLessons = ({ lessons }) => {
  return lessons.map((item) => (
    <>
      <div>{item.studentName}</div>
      <div>{item.instrument}</div>
    </>
  ));
};

export default ListLessons;
