import React, { Component } from "react"
import KeyLetter from "./KeyLetter"
import "./Keyboad.css"

export default class Keyboard extends Component {

    LETTERSLINE1 = 'AZERTYUIOP'.split('')
    LETTERSLINE2 = 'QSDFGHJKLM'.split('')
    LETTERSLINE3 = 'WXCVBN'.split('')

    onLetterClick = (letterKey) => this.props.notifyLetterChange(letterKey)

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        {this.LETTERSLINE1.map(elt => <td><KeyLetter letter={elt} callbackfn={this.onLetterClick} /></td>)}
                    </tr>
                    <tr>
                        {this.LETTERSLINE2.map(elt => <td><KeyLetter letter={elt} callbackfn={this.onLetterClick} /></td>)}
                    </tr>
                    <tr>
                        {this.LETTERSLINE3.map(elt => <td><KeyLetter letter={elt} callbackfn={this.onLetterClick} /></td>)}
                    </tr>
                </tbody>
            </table>
        )
    }
}