import React from 'react'

function Producto (props) {
	return (
		<div onClick={props.handleClick} className="carta">
			<div className="imagen" id={props.image}></div>
			<p className="titulo noselect" >{props.nombre}</p>
		</div>
	)
}

export default Producto