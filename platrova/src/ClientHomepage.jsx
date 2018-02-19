import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './ClientHomepage.css';

let coords = {
    lat: 17.3850,
    lng:78.4867
};

 
const params = {v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM'};
var divstyle={
    backgroundColor:'black',
    fontFamily:'Roboto',
    fontSize:20,
    fontColor:'white',
}
class ClientHomepage extends React.Component {
    onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: true
        });
      }
     
      onDragEnd(e) {
        console.log('onDragEnd'+' hii '+e.latLng.lat(), e);
        //coords=e.latLng;
        coords.lat=e.latLng.lat();
        coords.lng=e.latLng.lng();
       // console.log('after cords change '+coords.lat+' longii'+coords.lng);
       document.getElementById('latitude').value = e.latLng.lat()
                 document.getElementById('longitude').value =  e.latLng.lng()
       
      }
     
      onCloseClick() {
    
        console.log('onCloseClick');
      }
     
      onClick(e) {
       
        console.log('onClick '+coords.lat +coords.lng+'  hello  '+ e.latlng, e.latlng);
    coords=e.latLng;
      }

            render() {
                return (

                    <table>
                        <div className="right">
                    <tr>
             <td>LATITUDE</td>
             <td><input type="text" name="Country"  id= "latitude" value=""  readonly="readonly"/></td>
             </tr>
             <tr>
             <td>LONGITUDE</td>
             <td><input type="text" name="Country"  id= "longitude" value=""  readonly="readonly"/></td>
             </tr>
             </div>
             <br />
             <div className="left">
             <tr>
             <td><Gmaps
        width={'800px'}
        height={'600px'}
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
       
         
      </Gmaps></td>
            </tr>
            <tr>
                <br/>
                <br/>
            
             <td><button className="btn btn-primary" > <i class="glyphicon glyphicon-ok"></i>Submit</button></td>
             </tr>
                </div>
             </table>
                );
            }
}

export default ClientHomepage; 