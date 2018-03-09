import React from 'react';
import SearchRestaurant from './SearchRestaurant';



class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
        };


    }

    componentDidMount() {
        fetch("http://10.10.200.22:9000/restaurant/search",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json",
                    

                },

            }).then(function (response) {
                return (response.json());
            }).then(result1 => this.setState({
                id: result1
            }));
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
                <h1><font color="white"><i>Search Results...</i></font></h1>
                 {Holder}
            </div>
        );
    }
}

export default SearchResult;