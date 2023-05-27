import React from "react";
import { forwardRef } from "react";


export const SelectOption = forwardRef(({ label, options }, ref) => {
  const selectId = label.toLowerCase().replace(" ", "_");

  return (
    <div className="form-option">
      <label htmlFor={selectId}>{label}</label>
      <select name={selectId} id={selectId} ref={ref}>
        <option disabled defaultValue="">
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export const InputOption = forwardRef(({ label, type }, ref) => {
  const inputId = label.toLowerCase().replace(" ", "_");

  return (
    <div className="form-option">
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        name={inputId}
        id={inputId}
        ref={ref}
      />
    </div>
  );
});


