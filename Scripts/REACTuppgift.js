function MakeBook(props) {
	return <p className={props.status}>Title: {props.title}, Author: {props.author}, Status: {props.status}</p>;
}

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {props.status};
	}
	render() {
		return (
			<div>
				<MakeBook title="Book 1" author="Author 1" status="unread" />
				<MakeBook title="Book 2" author="Author 2" status="reading" />
				<MakeBook title="Book 3" author="Author 3" status="read" />
			</div>
		);
	}
};


ReactDOM.render(
	<Book />,
	document.getElementById('root')
);