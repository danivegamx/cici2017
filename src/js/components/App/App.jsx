import React from 'react';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      reproduciendo: true
    }
    this.pausar = this.pausar.bind(this);
  }
  pausar()
  {
    this.setState({
        // ! Negamos el estado en el que se encuentra @reproduciendo.
      reproduciendo: !this.state.reproduciendo
    })
  }
  render()
  {
    return (
      //<div>{this.props.nombre}, bienvenida al Cici 2017. </div>
      <div>
        Estás {(this.state.reproduciendo) ? 'reproduciendo' : 'pausando'} {this.props.cancion}
        <div onClick={this.pausar}>Pausa</div>
      </div>

    );
  }
}

export default App;
