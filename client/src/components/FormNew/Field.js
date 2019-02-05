import React from "react";

const FieldForm = ({ input, label, meta:{error, touched} }) => {
  return (
    <div>
      <label style={{marginTop:"3%"}}>{label}</label>
      <input {...input} />
     <div style={{color:"red"}}> {touched && error}</div>
    </div>
  );
};

export default FieldForm;
