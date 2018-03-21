import React from 'react';
import SearchRestaurant from './SearchRestaurant';

const params = { v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM' };
const svg = `data:image/svg+xml;charset=UTF-8;base64`;
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMarkers = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
   
    withScriptjs,
    withGoogleMap
  )(props =>
    
    <GoogleMap
      defaultZoom={10}
      center={{ lat:17.3850,
        lng: 78.4867}}
    >
    
        {props.markers.map(marker => (
          <Marker
          //  key={marker.photo_id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            
          />
        ))}
   
    </GoogleMap>
    
  );

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
        };


    }

    componentDidMount() {

        console.log(this.props.match.params.search);
        var form=JSON.stringify({keyword:this.props.match.params.search});
        fetch("http://10.10.200.22:9000/restaurant/search",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json",
                    

                },
                body:form,

            }).then(function (response) {
                return (response.json());
            }).then(result1 => this.setState({
                id: result1
            }));
        }

        onMapCreated(map) {
            map.setOptions({
                disableDefaultUI: true
            });
        }
        

    render() {
        var Holder = [];
        for (var i = 0; i < this.state.id.length; i++) {
            console.log(this.state.id[i].name);
            Holder.push(
                (
                    <SearchRestaurant Id={this.state.id[i].id}
                                name={this.state.id[i].name} 
                                type={this.state.id[i].type}
                                cuisine={this.state.id[i].cuisine}
                                address={this.state.id[i].address}
                                area={this.state.id[i].area}
                                contact={this.state.id[i].contact}
                                timings={this.state.id[i].timings}
                                hpUrl={this.state.id[i].homepageUrl}
                                fbUrl={this.state.id[i].fbUrl}
                                cost={this.state.id[i].cost} ></SearchRestaurant>
                )
            );
        }

        return (
            <div>
                <br /><br />
                <MapWithAMarkers markers={this.state.id}/>
                <h1><font color="white"><i>Search Results...</i></font></h1>
                 {Holder}
            </div>
        );
    }
}

export default SearchResult;