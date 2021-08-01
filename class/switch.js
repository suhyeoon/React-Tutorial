import React, { Component } from 'react';


class App extends Component {
    render(){
        const value = 1;
        return(
            (
                () => {
                    if(value === 1) return (<div>one</div>)
                    if(value === 2) return (<div>two</div>)
                    if(value === 3) return (<div>three</div>)
                }
            )()
        );
    }
}