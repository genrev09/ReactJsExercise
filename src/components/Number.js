import React from 'react';

class Number extends React.Component{
    constructor(props){
        super(props);
        this.state = {number: 0};
    }

    render(){
        return (
            <div>
                <button onClick={
                ()=> {alert('now you know how to handle onclick event');
                this.setState({number: this.state.number += 2});
              }
              }> Hello World! </button>
              <p>Number: {this.state.number}</p>
            </div>
        );
    }
}

export default Number;