import React from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import './ClientHomepage.css';
import client from './client.jpg';

let coords = {
    lat: 17.3850,
    lng: 78.4867
};


const params = { v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM' };
var divStyle = {
    width: "100%",
    height: "1140px",
    backgroundImage: `url(${client})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    fontFamily: 'Cursive',
    
};
var form = {
    border: '2px solid white',
    fontFamily: 'Arial',
}
var textstyle = {
    color: 'black',
};
class ClientHomepage extends React.Component {
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log('onDragEnd' + ' hii ' + e.latLng.lat(), e);
        //coords=e.latLng;
        coords.lat = e.latLng.lat();
        coords.lng = e.latLng.lng();
        // console.log('after cords change '+coords.lat+' longii'+coords.lng);
        document.getElementById('latitude').value = e.latLng.lat()
        document.getElementById('longitude').value = e.latLng.lng()

    }

    onCloseClick() {

        console.log('onCloseClick');
    }

    onClick(e) {

        console.log('onClick ' + coords.lat + coords.lng + '  hello  ' + e.latlng, e.latlng);
        coords = e.latLng;
    }

    render() {
        return (
            <div style={divStyle}>
                <table >
                    <div className="col-sm-8 ">
                        <center>
                            <br /><br />
                            <h1>CREATE ACCOUNTS....<br />MAKE PROFITS....</h1><br />
                            
                                <div style={form}>
                                <table>
                                    <br />
                                    <tr>
                                        <td>RESTAURANT NAME</td>
                                        <td><input type="text" name="name" id="name"  style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>RESTAURANT TYPE</td>
                                        <td><input type="text" name="type" id="type" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>ADDRESS</td>
                                        <td><input type="text" name="address" id="address" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>CONTACT</td>
                                        <td><input type="text" name="contact" id="contact" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>HOMEPAGE URL</td>
                                        <td><input type="text" name="hpUrl" id="hpUrl" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>FACEBOOK URL</td>
                                        <td><input type="text" name="fbUrl" id="fbUrl" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>COST</td>
                                        <td><input type="text" name="cost" id="cost" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>LATITUDE</td>
                                        <td><input type="text" name="Country" id="latitude" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr> <br/>
                                    <tr>
                                        <td>LONGITUDE</td>
                                        <td><input type="text" name="Country" id="longitude" value="" readonly="readonly" style={textstyle} /></td>
                                    </tr>
                                    </table><br /></div>
                                    <br />
                                     <button className="btn btn-primary" > <i class="glyphicon glyphicon-ok"></i>Submit</button>
                                
                            
                        </center>
                    </div>
                    <br />
                    <div className="col-sm-4 col-sm-push-10">
                        <Gmaps
                            width={'970px'}
                            height={'860px'}
                            lat={coords.lat}
                            lng={coords.lng}
                            zoom={12}
                            loadingMessage={'Be happy'}
                            params={params}
                            onMapCreated={this.onMapCreated}
                            onClick={this.onClick}>
                            <Marker
                                lat={coords.lat}
                                lng={coords.lng}
                                draggable={true}
                                onDragEnd={this.onDragEnd} />
                            <InfoWindow
                                lat={coords.lat}
                                lng={coords.lng}
                                content={'Hello, Move me to the Restaurant  :)'}
                                onCloseClick={this.onCloseClick} />
                        </Gmaps>
                    </div>
                </table>
            </div>


        );
    }
}

export default ClientHomepage; 