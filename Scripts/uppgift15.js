class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		value1: "",
		value2: ""
	};

    this.handleChange1 = this.handleChange1.bind(this);
	this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  };
  
  handleChange2(event) {
    this.setState({value2: event.target.value});
  };

  render() {
    return (
	<div>
          <input type="text" value={this.state.value1} onChange={this.handleChange1} />&nbsp; + &nbsp;
		  <input type="text" value={this.state.value2} onChange={this.handleChange2} />&nbsp; = &nbsp;
		  <div style={{border: "1px solid black"}, {display: "inline-block"}}>{ Number(this.state.value1) + Number(this.state.value2) }</div>
    </div>
	);
  }
}

ReactDOM.render(
	<Calculator />,
	document.getElementById("root")
);
