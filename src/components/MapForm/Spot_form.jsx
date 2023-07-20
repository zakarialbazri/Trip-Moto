import { useState } from "react";
import style from './form.css';
import FormInput from "./Spots_forminput";
import ShareIcon from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const App = () => {
  const [values, setValues] = useState({
    title: "",
    name: "",
    date: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "Title",
      type: "text",
      placeholder: "Title",
      label: "Title",
    
      required: true,
    },
    {
      id: 2,
      name: "Spot/ride Name",
      type: "text",
      placeholder: "Spot Name",
      label: "Spot Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "Date",
      type: "date",
      placeholder: "Date",
      label: "Date",
    },
    
  ];

  const currencies = [
    {
      value: 'Excellent',
      label: 'Excellent',
    },
    {
      value: 'Average',
      label: 'Average',
    },
    {
      value: 'Poor',
      label: 'Poor',
    },
    
  ];
  const RoadDifficulty = [
    {
      value: 'Easy',
      label: 'Easy',
    },
    {
      value: 'Intermidiat',
      label: 'Intermidiat',
    },
    {
      value: 'Hard',
      label: 'Hard',
    },
  ];
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="inputs">
      <form onSubmit={handleSubmit} className="inputs__form">
        <h1>More informations</h1>
        <div className="inputs__container">
          <div className="inputs__maping">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
          </div>
            <div className="inputs__maping selected" >
              {/* <label htmlFor="">Beauty of the landscape</label> */}
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Beauty of the landscape"
                  defaultValue="Average"
                 
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              {/* <label htmlFor="">Road quality</label> */}
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Road quality"
                  defaultValue="Average"
                
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              {/* <label htmlFor="">Road difficulty</label> */}
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Road difficulty"
                  defaultValue="Intermidiat"
                
                >
                  {RoadDifficulty.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
            </div>
            <div className="inputs__maping">
              <label htmlFor="">Description</label>
              <textarea  name="" id="" cols="30" rows="13"></textarea>
            </div>
        </div>
        <button className="formbutton">Share <ShareIcon fontSize="large" /></button>
      </form>
    </div>
  );
};

export default App;