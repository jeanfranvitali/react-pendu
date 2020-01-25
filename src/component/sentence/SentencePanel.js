import React, { Component } from "react"
import Letter from "./Letter"
import PropTypes from "prop-types"
import "./SentencePanel.css"

export default class SentencePanel extends Component {

    LETTERS = "AZERTYUIOPQSDFGHJKLMWXCVBN"

    static defaultProps = {
        sentence: ["T", "E", "S", "T"],
        letter: '#',
    }

    static propTypes = {
        sentence: PropTypes.arrayOf(String),
        letter: PropTypes.string,
    }


    render() {
        return (
            <div>
                {this.props.sentence.map(elt => <Letter letter={elt} hidden={elt!==this.props.letter}/>)}
            </div>
        )
    }

}