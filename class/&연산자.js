import React, { Component } from 'react';

class App extends Component {
    render(){
        return(
            <div>
                {
                    1 + 1 === 2 && (<div>맞아요.$anchorScroll</div>)
                }
            </div>
        );
    }
}