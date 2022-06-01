import React, { Component } from 'react'
import {Link} from 'react-scroll';
import PropTypes from 'prop-types';

export class NavBt extends Component {

    state = {
        color: 'black', //Active color
        color1: 'black',  //Base color
        color2: 'blue',  //Hover color
        location: ""        
    }

    divStyle = () => {
        return{
            display: 'flex',
            margin: ".5rem",
            alignContent: "center",
            justifyContent: "center"
        }
    };

    linkStyle = () => {
        return{
            textDecoration: 'none',
            color: this.state.color,
            fontSize: '2.5vw',
            cursor: 'pointer', 
            margin: '0 2vw 0 0'
        }
    };

    mouseEnter = () => {
        this.setState({color: this.state.color2});
    };

    mouseLeave = () => {
        if(this.state.location !== this.props.path) this.setState({color: this.state.color1});
    };

    componentDidMount(){
        const location = window.location.href.split("#")[1];
        if(location === this.props.path) this.setState({color: this.state.color2});
        else this.setState({color: this.state.color1});
        this.setState({ location: location });
    };

    render() {
        return (
            <div>
                <div style={this.divStyle()}> 
                    <Link
                        style={this.linkStyle()}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        onClick={this.mouseEnter}
                        to={this.props.path}
                        smooth="true"
                        > {this.props.name} </Link>  
                </div>
            </div>
        )
    }
}

NavBt.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default NavBt;