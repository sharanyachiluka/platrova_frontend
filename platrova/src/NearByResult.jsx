import React from 'react';
import NearByRestaurant from './NearByRestaurant';
//import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const params = { v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM' };
const svg = `data:image/svg+xml;charset=UTF-8;base64`;
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

const MapWithAMarkers = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `900px` }} />,
      mapElement: <div style={{ height: `50%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
          const clickedMarkers = markerClusterer.getMarkers()
          console.log(`Current clicked markers length: ${clickedMarkers.length}`)
          console.log(clickedMarkers)
        },
      }),
    withScriptjs,
    withGoogleMap
  )(props =>
    
    <GoogleMap
      defaultZoom={13}
      center={{ lat:props.latitude,
        lng: props.longitude}}
    >
    <Marker
      position={{lat:props.latitude,lng:props.longitude}}
      title={"Your position"}
      
     />
        {props.markers.map(marker => (
          <Marker
          //  key={marker.photo_id}
            position={{ lat: marker._1.latitude, lng: marker._1.longitude }}
            
          />
        ))}
   
    </GoogleMap>
    
  );


class NearByResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
            
            
        };
this.onMapCreated=this.onMapCreated.bind(this);

    }
    componentDidMount() {
       
        navigator.geolocation.getCurrentPosition(
            position => {
              
              this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});

              var form = JSON.stringify({lat:this.state.lat, lng: this.state.lng});
              fetch ( "http://10.10.200.22:9000/restaurant/nearBy" , 
              {
                  method: "POST",     
                  headers: {
                      "Content-Type": "application/json",
                      "Accept"    :   "application,json"
                      
                    },       
                  body: form, 
          }).then(function (response) {
            return (response.json());
        }).then(result1 => this.setState({
            id: result1
        }));
      
    
  
    }
);
}

onMapCreated(map) {
    map.setOptions({
        disableDefaultUI: true
    });
}


  

    render() {

        var Holder = [];
        
          
        for (var i = 0; i < this.state.id.length; i++) {
            console.log(this.state.id[i]);
            Holder.push(
                (
                    <NearByRestaurant Id={this.state.id[i]._1.id}
                                name={this.state.id[i]._1.name} 
                                type={this.state.id[i]._1.type}
                                cuisine={this.state.id[i]._1.cuisine}
                                address={this.state.id[i]._1.address}
                                area={this.state.id[i]._1.area}
                                contact={this.state.id[i]._1.contact}
                                timings={this.state.id[i]._1.timings}
                                hpUrl={this.state.id[i]._1.homepageUrl}
                                fbUrl={this.state.id[i]._1.fbUrl}
                                cost={this.state.id[i]._1.cost}
                                distance={this.state.id[i]._2} ></NearByRestaurant>
                )
            );
        }
        return (
            <div>
            <br /><br />
            <MapWithAMarkers markers={this.state.id} latitude={this.state.lat} longitude={this.state.lng}/> 
            <h1><font color="white"><i>NearBy Results...</i></font></h1>
             {Holder}
        </div> 
        );
    }
}

export default NearByResult; 