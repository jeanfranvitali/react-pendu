import React, { Component } from "react";
import "./Monitor.css"

export default class Monitor extends Component {
    
    static defaultProps = {
        win: false,
        matchedOrNot: 0
    }


    componentDidUpdate(props) {
        this.props.win && setTimeout(this.props.callbackFn, 5000)
    }

    render() {
        const winned = this.props.win?<span className="blinking">GAGNE !!!!!!</span>:(this.props.matchedOrNot===0)?<span>..........</span>:(this.props.matchedOrNot===1)?<span className="binkContinue">YES</span>:<span className="wrong">PO GRAVE ALLER, ESSAYE ENCORE</span>
        return (winned)
    }
}