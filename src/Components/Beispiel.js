import React, { Component } from 'react';

class Beispiel extends Component {
    constructor(props) {
        super(props)

        this.changeName = this.changeName.bind(this)
    }

    componentWillMount() {
        this.setState({
            name: "Maxime",
            className: "right"
        })
    }

    changeName() {
        if(this.state.name === "Maxime") {
            this.setState({
                name: "Penis",
                className: "false"
            })
        }
        else {
            this.setState({
                name: "Maxime",
                className: "right"
            })
        }
        
    }


    render() {
        return(
            <h2 onClick={this.changeName} className={this.state.className}>Mein Name lautet {this.state.name}</h2>
        )
    }
}

export default Beispiel;