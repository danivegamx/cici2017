import React from 'react';

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      reproduciendo: false
    }
    this.pausar = this.pausar.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }
  pausar() {
    this.setState({ 
    	reproduciendo: !this.state.reproduciendo
    })
  }

  handlePlay() {
  	if(!this.state.reproduciendo)
  	{
  		document.getElementById("pista").play()
  		this.setState({ reproduciendo:true })
  	}
  	else
  	{
  		document.getElementById("pista").pause()
  		this.setState({ reproduciendo:false })
  	}
  }

  render() {
    return (
      <section className="contenedor">
      	<article className="imagen">
      		<img src="/dist/assets/img/album.jpeg" />
      		<audio id="pista" src="/dist/assets/rosenrot.mp3" prelod="auto"></audio>
      	</article>
        <article className="descripcion">
        	<div className="nombre">Cancion: {this.props.cancion}</div>
        	<div className="autor">Autor: {this.props.autor} </div>
        	<button onClick={this.handlePlay} >{(this.state.reproduciendo) ? 'Pausa' : 'Play'}</button>
        </article>
      </section>
    );
  }
}
	