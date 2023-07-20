import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps'; 
import './spots.css';
import Button from '@mui/material/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bingmapKey: "ApzTg4T6gEC3yxPNb2qNQ1DxOQeVwoTpGT1sx6k3i4G_eDXabhwG-0CBPHugpq0-",


      infoboxesWithPushPins: [
        {
          "location":[34.02257648096637, -6.836950754995232], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Infobox Title', description: 'Infobox' },
          "pushPinOption":{ title: 'Pushpin Title', description: 'Pushpin' },
       
        }
      ],
     
      getLocationHandledData: "",
     

      }
    }
  
  changeState= ()=>{
    this.setState({
      
      infoboxesWithPushPins: [
        {
          "location":[JSON.parse(this.state.getLocationHandledData).latitude , JSON.parse(this.state.getLocationHandledData).longitude], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: '', description: 'Infobox' },
          "pushPinOption":{ title: '', description: 'Pushpin' },
         
        }
      ],
    
        "option":{
          entityType: 'PopulatedPlace'
        },
        
        searchInput: "",

      polyline: {
        "location": [[13.0827, 80.2707],[13.0527, 80.2707]],
        "option": { strokeColor: 'red', strokeThickness: 10, strokeDashArray: [1, 2, 5, 10] }
      },
      
    })
  }

  handleSubmit(event){
    if(this.state.searchInput !== null && this.state.searchInput !== ""){
      this.setState({
        boundary: {
          "search" : this.state.searchInput,
          "polygonStyle" :{
            fillColor: 'rgba(161,224,255,0.4)',
            strokeColor: '#a495b2',
            strokeThickness: 2
          },
          "option":{
            entityType: 'PopulatedPlace'
          }
        }
      })
    }
    event.preventDefault();
  }
 
 GetEventHandled(callbackData){
    console.log("hello" ,callbackData);
  }

  GetLocationHandled(location){
    this.setState({
      getLocationHandledData: JSON.stringify(location)
    });
  }

  render() {
    return (
        <div className = "spots__map" >
          
            <form className = "spots__form" onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" placeholder="search place, pin, city"
                    onChange={(event)=>{this.setState({searchInput:event.target.value})}} 
                    value={this.state.searchInput}>
                  </input>
                  <input type="submit" value="Search" />
            </form>
           

            <div  className='map' onClick={this.changeState}>
                <ReactBingmaps 
                
                  center = {[34.02257648096637, -6.836950754995232]}
                  className = "customClass"
                  bingmapKey = {this.state.bingmapKey} 
                  infoboxesWithPushPins = {this.state.infoboxesWithPushPins}
                  getLocation = {
                    {addHandler: "click", callback:this.GetLocationHandled.bind(this)}
                  }
                  boundary = {this.state.boundary}
                > 
                </ReactBingmaps>
            </div>
      </div>
    );
    }
  }

export default App;