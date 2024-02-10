import React from "react";
import $ from "jquery";

export default class App extends React.Component {
  componentDidMount() {
    $("<h1 />")
      .text("Hello world from JQuery")
      .css({
        textAlign: "center",
        color: "red",
      })
      .appendTo($("header"));
  }

  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />

        <div className="box">
          <h2 className="box-title">Box Title</h2>

          <p className="box-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            voluptates! Voluptatum quasi, numquam nobis iure suscipit enim
            dolore dolores aliquam?
          </p>
        </div>
      </React.Fragment>
    );
  }
}
