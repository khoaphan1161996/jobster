import React from "react";

const FormRow = ({ handleChange, value, type, name, labeltText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labeltText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
