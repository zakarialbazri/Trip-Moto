import React from "react";
import { GrLocation } from "react-icons/gr";
import "./form.css";

function SearchForm() {
  return (
   

<div className="cardDiv container">
  <div className="destinationInput">
    <label htmlFor="city">Enter Trip destination:</label>
    <div className="input">
      <input type="text" placeholder="Enter City here"  onChange={handleDestinationChange} />
      <GrLocation className="icon" />
    </div>
  </div>

  <div className="LocationInput">
    <label htmlFor="city">Start location:</label>
    <div className="input">
      <input type="text" placeholder="Enter Location here" />
      <GrLocation className="icon" />
    </div>
  </div>

  <div className="dateInput">
    <label htmlFor="date">Trip date:</label>
    <div className="input">
      <input type="date" />
    </div>
  </div>

  <div className="PeriodeInput">
    <label htmlFor="time">Trip duration:</label>
    <div className="input">
      <input type="text" placeholder="Enter Duration here"  onChange={handlePeriodChange} />
      <GrLocation className="icon" />
    </div>
  </div>

  <div className="searchOptions flex">
    <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
  </div>
  <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
</div>

   
    
  );
}

export default SearchForm;
