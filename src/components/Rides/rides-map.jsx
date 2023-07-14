import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps'; 
import './rides.css';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : true,
      bingmapKey: "ApzTg4T6gEC3yxPNb2qNQ1DxOQeVwoTpGT1sx6k3i4G_eDXabhwG-0CBPHugpq0-", //Don't use this key in your environment.
      directions: {
        "renderOptions": {"itineraryContainer": "itineraryContainer" },
        "requestOptions": {"routeMode": "driving", "maxRoutes": 2},
        "wayPoints": [
              {
                address: ''
              },
              {
                address: ''
              }
            ]
      }
    }
  }
  
  changeState= ()=>{
    this.setState({
      directions: {
        "inputPanel": "inputPanel",
        "renderOptions": {"itineraryContainer": "itineraryContainer" },
        "requestOptions": {"routeMode": "driving", "maxRoutes": 2},
        "wayPoints": [
              {
                address: ''
              },
              {
                address: ''
              },
            ]
      }
    })
  } 
  componentDidMount(){

  setTimeout(() => {
    this.changeState()
  }, 2000);

}
  render() {
    return (
      <div>
          <div className = "map-three">
            <ReactBingmaps
              className = "customClass"
              id = "eleven" 
              center = {[34.02257648096637, -6.836950754995232]}
              bingmapKey = {this.state.bingmapKey}
              directions = {this.state.directions}
            > 
            </ReactBingmaps>
          <Button size="large" variant="outlined" onClick={this.changeState}>Search</Button>
            <div className="direction-container">
              <div className="input-panel" id='inputPanel'></div>
              <div className="itinerary-container" id='itineraryContainer'></div>
            </div>
          </div>
        </div>
       

    
    );
  }
}

export default App;