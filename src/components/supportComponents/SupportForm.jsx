import React, { useState } from "react";
import "../../styles/support.scss";

export default function SupportForm() {
  const [selectQueryValue, setSelectQueryValue] = useState();
  const [prodctType, setProductType] = useState("");
  return (
    <form className="form-wrapper-section">
      <div className="form-wrapper">
        <label>Name*</label>
        <input placeholder="Name your Enter" />
      </div>
      <div className="form-wrapper">
        <label> Mobile No *</label>
        <input placeholder="Enter your Mobile No." />
      </div>
      <div className="form-wrapper">
        <label> Email*</label>
        <input placeholder="Enter your Email Address" />
      </div>
      <div className="form-wrapper">
        <label> Subject*</label>
        <select
          placeholder="Select query"
          onChange={(e) => {setSelectQueryValue(e.target.value);
            setProductType('');
          }}
        >
          <option value={""}>Select query</option>
          <option value={"Product query"}> Product query</option>
          <option value={"Renewals"}>Renewals</option>
          <option value={"Claims"}>Claims</option>
          <option value={"Grievance"}>Grievance</option>
          <option value={"Others"}>Others</option>
        </select>
      </div>
      <div className="form-wrapper">
        <label> Product</label>
        <select
          placeholder="Select Product type"
          value={prodctType}
          disabled={selectQueryValue !== "Product query"}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option>Select Product type</option>
          <option>Road Insurance</option>
          <option> Marine Insurance</option>
          <option> Aviation Insurance</option>
          <option> Home Insurance</option>
          <option>Business Insurance</option>
          <option> Travel Insurance</option>
          <option> Health Insurance</option>
          <option>Personal Accident Insurance</option>
          <option> Public Liability Insurance</option>
          <option>Fidelity Guarantee Insurance</option>
          <option> Cyber Crime Insurance</option>
          <option>Life Insurance </option>
        </select>
      </div>
      <div className="form-wrapper">
        <label> Comments</label>
        <textarea rows="7"></textarea>
      </div>
      <button className="submit_button">submit</button>
    </form>
  );
}
