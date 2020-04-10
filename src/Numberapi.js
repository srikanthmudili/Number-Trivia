import React, { Component } from 'react';
import Axios from 'axios';
class Numberapi extends Component {
    constructor(props){
        super(props);
        this.number=props.number
        this.state={num:''};
    }
    componentDidMount(){
        console.log('http://numbersapi.com/'+this.number)
        Axios('http://numbersapi.com/'+this.number)
        .then(
            res=>{console.log(res)
            this.setState({ num:res.data})
        })
        .catch(function (error) {
            console.log(error);
          })
          console.log(this.num)
    }
    render() {
        return (
            <div>
                {this.num}
            </div>
        );
    }
}

export default Numberapi;