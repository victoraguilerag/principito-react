import React from 'react'
import loguito from '../../assets/loguito.png'

function Header (props) {
	return (
		<nav id="inicio">
			<div className="brand">
				<img src={loguito} className="logo-nav" height="50px" width="50px" alt=""></img>
				<h3>Libreria El Principito</h3>
			</div>
			<i id="ham" onClick={props.handleClick} className="material-icons noselect">menu</i>
			<ul id="menu">
				<a href="#descripcion">
					<li>Acerca</li>					
				</a>
				<a href="#servicios">
					<li>Servicios</li>					
				</a>
				<a href="#catalogo">
					<li>Catalogo</li>		
				</a>
				<a href="#contacto">
					<li>Contactanos</li>
				</a>
			</ul>
		</nav>
	)
}

export default Header