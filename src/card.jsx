import React from "react";

export default function card(props) {
  return (
    <div className="card col-md-5 mt-md-5 ms-md-5">
      <h5 className="pt-md-3 pb-md-2 ps-md-1 pe-md-1">
        Question {props.id} : {props.question}
      </h5>
      <h5 className="pb-md-2">Answer : {props.answer}</h5>
    </div>
  );
}
