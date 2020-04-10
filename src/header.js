import React from 'react';
import './header.css';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name
    }
render(){
    return(
        <header>
            <div className="header" style={{height:70}}>
                <div className="header-content">
                {this.name}
                </div>
            </div>
        </header>
    )
}
}
export default Header;