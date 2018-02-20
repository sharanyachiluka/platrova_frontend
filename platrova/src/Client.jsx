import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './ClientHomepage.css';
import ClientReg from './ClientReg';
import ClientMap from './ClientMap';



class Client extends React.Component {
    

      render() {
      return(
          <body>
              
              
                    <ClientMap>
                        </ClientMap>
                
                    
                        <ClientReg>
                            </ClientReg>
            
               
                <tr>
                  <br/>
                     <br/>
                                    
                         <td><button className="btn btn-primary" > <i class="glyphicon glyphicon-ok"></i>Submit</button></td>
                      </tr>
            </body>

      );
    }
}
export default Client;