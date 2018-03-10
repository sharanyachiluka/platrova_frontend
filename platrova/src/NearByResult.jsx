import React from 'react';
import NearByRestaurant from './NearByRestaurant';

class NearByResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
        };


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


    render() {

        var Holder = [];
        for (var i = 0; i < this.state.id.length; i++) {
            console.log(this.state.id[i]._1.name);
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
            <h1><font color="white"><i>NearBy Results...</i></font></h1>
             {Holder}
        </div> 
        );
    }
}

export default NearByResult; 