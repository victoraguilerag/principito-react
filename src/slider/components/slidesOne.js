import React from 'react'

function SlidesOne (props) {
	return (
		<div className="info first slides" id={props.active}>
			<div className="data">
				<p className="noselect">
					Nos dedicamos al rubro de impresiones digitales y plotteos al mejor precio del mercado.
				</p>
				<p className="noselect">
					Ofrecemos una amplia variedad en insumos de impresion y computación, libreria artistica, comercial y escolar.
				</p>	
			</div>
		</div>
	)
}

export default SlidesOne 