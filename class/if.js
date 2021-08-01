import React, { Component } from 'react';

// 복수 조건 사용: if(~~~) return(~~~)
// 조건문은 {}로 감싸고, function()는 ()로 감싸고 뒤에 ()를 붙임.
// function의 함수 내용은 {}로 감싼다.
class App extends Component {
    render(){
        const value = 1;
        return(
            <div>
                {
                    (function(){
                        if(value === 1) return (<div>one</div>)
                        if(value === 2) return (<div>two</div>)
                        if(value === 3) return (<div>three</div>)
                    })()
                }
            </div>
        );
    }
}