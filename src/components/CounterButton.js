import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    render() {
        const { color } = this.props;
        return (
            <div>
                <button color={color} onClick={() => {
                    this.setState({ counter: this.state.counter + 1 })
                }}>{this.state.counter}</button>
            </div>
        );
    }
}


export default CounterButton;