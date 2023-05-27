import React from "react";

export const SelectOption = ({ label, options }) => {
  return (
    <div className="form-option">
      <label htmlFor="">{label}</label>
      <select
        name={label.toLowerCase().replace(" ", "_")}
        id={label.toLowerCase().replace(" ", "_")}
      >
        <option disabled selected value>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase().replace(" ", "_")}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export const InputOption = ({ label, type }) => {
  return (
    <div className="form-option">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={label.toLowerCase().replace(" ", "_")}
        id={label.toLowerCase().replace(" ", "_")}
      />
    </div>
  );
};
