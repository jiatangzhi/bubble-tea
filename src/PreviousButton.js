import React from "react";
export default function PreviousButton(props) {
  const previousPage = `#${props.link}`;
  return (
    <div className="PreviousButton">
      <a href={previousPage} title="Previous Menu">
        <i className="fa-solid fa-angle-left"></i>
      </a>
    </div>
  );
}
