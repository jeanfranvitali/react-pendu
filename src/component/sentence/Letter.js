import React, { Component } from "react";
import PropTypes from "prop-types"
import "./Letter.css"

export default class Letter extends Component {

    state = {
        alreadyFound: false,
    }

    static defaultProps = {
        letter: '_',
        hidden: true,
    }

    static propTypes = {
        letter: PropTypes.string,
        hidden: PropTypes.bool,
    }

    constructor(props) {
        super(props)
        this.letter = props.letter
        this.hidden = (props.letter.trim().length === 0 )?false:props.hidden
    }

    componentWillMount() {
        this.setState({alreadyFound: false})
    }

    componentDidUpdate() {
        if (!this.hidden && !this.state.alreadyFound) {
            this.setState({alreadyFound: true})
        }
    }

    componentWillUpdate(nextProps) {
        this.letter = nextProps.letter
        this.hidden = (nextProps.letter.trim().length === 0 )?false:nextProps.hidden
    }

    render() {
        return (
            <span className="letter">{this.hidden && !this.state.alreadyFound?'_':(this.letter.trim().length>0?this.letter:'\u00A0')}</span>
        )
    }

}