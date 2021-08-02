import React, { Component } from 'react';

class App extendss Component{
    render(){
        return(
            <div>
                {
                    1 + 1 === 2
                    ? (<div>맞아요.</div>)
                    : (<div>틀려요.</div>)
                }
            </div>
        );
    }
}