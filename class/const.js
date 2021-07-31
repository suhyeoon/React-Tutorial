import React, { Component } from 'react';

// JSX 내부에서 JavaScript 변수를 사용 : render 내부에 return 사용전 const 변수명 = '???'; 으로 선언하고,
// return 내부의 JSX에서 변수명을 {}로 감싸기.

// const: 선언 후 변하지 않는 값
// let: 선언 후 변할 수 있는 값 {JavaScript의 var와 유사함.}
class App extends Component{
    render() {
        const name = 'react';
        return (
            <div>
                hello {name}!
            </div>
        );
    }
}