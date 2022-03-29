import React from "react";
import logo from './logo.svg';
import './App.css';
export default class App extends React.Component {
    constructor(props) {
        super(props);  // Обязательно
        this.color = props.color ? props.color : "red";
        this.borderColor = props.borderColor ? props.borderColor : "red";
        this.player =  props.player ? props.player : "Player 2";

    }

    render() {
        let currentTime = new Date().toLocaleTimeString();
        return (<div className="App">
           {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            <p style={{
                color: this.color,
                fontSize: "24px",
                border: "1px solid",
                borderColor: this.borderColor,
                width: "200px",
                height: "200px",
                margin: "auto",
                marginBottom: "20px"
            }}><span style={{
                color: this.color
            }}>{this.player}</span><br/>
                {currentTime}</p>

        </div>)
    }
}

