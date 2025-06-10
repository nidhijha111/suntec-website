import React from "react";
import "../../styles/support.scss";

export default function SupportForm() {
  return (
    <form className="form-wrapper-section">
      <div className="form-wrapper">
        <label>Name*</label>
        <input />
      </div>
      <div className="form-wrapper">
        <label> Mobile No *</label>
        <input />
      </div>
      <div className="form-wrapper"s>
        <label> Email*</label>
        <input />
      </div>
      <div className="form-wrapper" >
        <label> Subject*</label>
        <input />
      </div>
      <div className="form-wrapper">
        <label> Product</label>
        <input />
      </div>
      <div className="form-wrapper">
        <label> Comments</label>
        <textarea rows="4"></textarea>
      </div>
      <button className="submit_button">submit</button>
    </form>
  );
}
