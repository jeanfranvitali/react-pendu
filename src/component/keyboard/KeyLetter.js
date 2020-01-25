import React, { Component } from "react";
import { PropTypes} from "prop-types"
import './KeyLetter.css'

export default class KeyLetter extends Component {

    static defaultProps = {
        letter: '',
    }

    static propTypes = {
        letter: PropTypes.string,
    }

    state = {
        up: true,
    }

    constructor(props) {
        super(props)
        this.letter = props.letter
    }

    onClick = () => {
        this.props.callbackfn(this.props.letter)
        this.setState({up : false})
        setTimeout(()=>this.setState({up:true}), 500)
    }

   
    
    render() {
        
        return (
            <button className={this.state.up?"button":"button disabled"} onClick={this.onClick} >{this.props.letter}</button>
        )
    }
}