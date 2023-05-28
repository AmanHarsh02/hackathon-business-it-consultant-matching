import React from "react";
import { forwardRef } from "react";
import "./ClientRequestForm.css";

export const SelectOption = forwardRef(({ label, options }, ref) => {
  // const selectId = label.toLowerCase().replace(" ", "_");

  return (
    <div >
   
      <select className="input-field"   ref={ref}>
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
 
  return (
    <div >

      <input
        type={type}
        ref={ref}
        className="input-field"
      />
    </div>
  );
});


