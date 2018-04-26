import React from 'react'

function SlidesThree (props) {
	return (
		<div  className="info slides column third" id={props.active}>

			<div className="data">
				<p className="noselect">
					Estamos ubicados en <br/> Armenia 2442, <br/>  Frente al Jardin Botanico
				</p>

				<a href="#contacto">Contactanos</a>
			</div>
		</div>
	)
}

export default SlidesThree