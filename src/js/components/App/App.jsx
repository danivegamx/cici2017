import React from 'react';

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      reproduciendo: true
    }
    this.pausar = this.pausar.bind(this);
  }
  pausar() {
    this.setState({
      reproduciendo: !this.state.reproduciendo
    })
  }
  render() {
    return (
      <div>
        Estás {(this.state.reproduciendo) ? 'reproduciendo' : 'pausando'} {this.props.cancion}
        <div onClick={this.pausar}>Pausa</div>
      </div>
    );
  }
}
