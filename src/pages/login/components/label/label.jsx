import React from "react";
import './label.css';

const Label = ({text}) =>{
  return(
<div className='label-css'>
  <label>{text}</label>
</div>
  )
};

export default Label;