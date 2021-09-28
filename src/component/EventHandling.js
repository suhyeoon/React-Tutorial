// React element 이벤트 핸들러 연결시 this 객체 사용 주의
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // JSX을 사용해서, this.handleClick을 연결했을때, JSX는 this을 bind 하지 않는다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 여기서 this(Toggle)을 사용하려면, 반드시 this가 bind 되어 있어야 한다.
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
