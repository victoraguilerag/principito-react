import React from 'react'

function Servicios (props) {
	return (
		<section id="servicios" className="catalogo">
			<div className="barra">
				<h3 className="noselect">Servicios</h3>
			</div>
			<div className="contenedor">
				<div onClick={props.handleClick} className="carta">
					<div id="impresion" className="imagen"></div>
					<p className="titulo noselect">Impresiones digitales</p>
				</div>
				<div onClick={props.handleClick} className="carta">
					<div id="plano" className="imagen"></div>
					<p className="titulo noselect">Plotteos</p>
				</div>
				<div onClick={props.handleClick} className="carta">
					<div id="copias" className="imagen"></div>
					<p className="titulo noselect">Fotocopias</p>
				</div>
			</div>
		</section>
	)
}

export default Servicios