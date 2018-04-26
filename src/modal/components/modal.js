import React from 'react'
import logo from '../../assets/loguito.png'

function Modal (props) {
	return (
		<section id="modal" ref={props.setRef} >
			<div className="brand">
				<i id="cerrar" className="material-icons" onClick={props.handleClick}>close</i>
				<h3 className="noselect">Libreria El Principito</h3>
				<img src={logo} className="logo-nav" height="40px" width="40px" alt="" />
			</div>
			<ul id="opciones">
				<a href="#descripcion" onClick={props.handleClick}>
					<li>Acerca</li>
				</a>
				<a href="#servicios" onClick={props.handleClick}>
					<li>Servicios</li>
				</a>
				<a href="#catalogo" onClick={props.handleClick}>
					<li>Catalogo</li>
				</a>
				<a href="#contacto" onClick={props.handleClick}>
					<li>Contactanos</li>
				</a>
			</ul>
			<div className="modal-footer">
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Librer%C3%ADa-El-Principito-Fotocopias-Impresiones-Ploteos-140121976022984/">
					<i className="fa fa-facebook"></i>
				</a>
			</div>
		</section>
	)
}

export default Modal