import React, { Component } from 'react';

//const css set name = {~~~}로 css를 정의하고 return 문의 tag 안에 style = {css set name}으로 CSS 적용
// tag 클래스 선정 시 html 에서는 class, JSX 에서는 className
class App extends Component{
    reder() {
        const style = {
          backgroundColor: 'block',
          padding: '16px',
          color: 'white',
          fontSize: '36px'
        };
        return <div style = {style}>안녕하세요!</div>;
    }
}