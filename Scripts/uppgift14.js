const lista = [
  {namn: 'köttbullar', antal: 4},
  {namn: 'falafel', antal: 3},
  {namn: 'prinsesstårta', antal: 1}
];

class Matlista extends React.Component {
  render() {
    let key = 0;
    const nyLista = this.props.lista.map(
      obj => (<li key={obj.namn + obj.antal}>{obj.namn} 
      ({obj.antal} st)</li>)
    );
    return (<ul>{nyLista}</ul>);
  }
}


ReactDOM.render(
  <Matlista lista={lista} />,
  document.getElementById('root')
);