import React, { Component } from 'react';

// 리액트 js 파일 기본 구조: class/extends -> render(){} -> return() -> JSX
// JSX 내부의 복수의 div를 감싸는 tag로는 Fragment를 사용
// html에서는 input, br 등의 태그는 닫지 않고 사용했지만, JSX에서는 반드시 닫아줘야 함
class App extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    Hello
                </div>
                <div>
                    Bye
                </div>
            </Fragment>
        );
    }
}

export default App;