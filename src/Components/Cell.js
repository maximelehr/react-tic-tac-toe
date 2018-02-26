import React, { Component } from 'react';


class Cell extends Component {
    constructor(props) {
        super(props)

        this.click = this.click.bind(this)
    }

    click() {
        if(!this.props.checked) {
            this.props.clickMethod(this.props.id)
        }
        
    }

    checked() {
        let sign
        if(this.props.player === 1) {
            sign = String.fromCharCode(215)
        }
        else if(this.props.player === 2) {
            sign = String.fromCharCode(9900)
        }
        else sign = ""

        return(
            <div onClick={this.click} className="cell"> { sign } </div>
        )
    }
    unchecked() {
        return(
            <div onClick={this.click} className="cell"></div>
        )
    }
    render() {
        return(
            this.props.checked ? this.checked() : this.unchecked()
        )
    }
}

export default Cell;