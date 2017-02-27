const lista = [
  {namn: 'Pengar', translation: "Money"},
  {namn: 'Stor', translation: "Big"},
  {namn: 'Sjuk', translation: "Sick"}
];

class Lista extends React.Component {
  render() {
    let key = 0;
    const nyLista = this.props.lista.map(
      obj => (<li key={obj.namn + obj.translation}>{obj.namn} = {obj.translation}</li>)
    );
    return (<ul>{nyLista}</ul>);
  }
}


ReactDOM.render(
  <Lista lista={lista} />,
  document.getElementById('root')
);