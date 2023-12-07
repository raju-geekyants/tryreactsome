import React from "react";
import "./RightPane.css";

const RightPane = (props) => {
  return (
    <div className="right-pane">
      <div className="signup-form">
        <div className="form--header">
          <h2 className="form--heading">Sign up for exclusive access.</h2>
          <div className="form--input-holder">
            <input
              type="text"
              placeholder="Your email address"
              className="form--input"
            />
            <button className="form--submit">Get started</button>
          </div>
        </div>

        <p className="form--description">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default RightPane;
