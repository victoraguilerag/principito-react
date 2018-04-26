import React from 'react'
import Form from './form'

function Contacto (props) {
	return (
		<section id="contacto">
			<h2 className="noselect">
				<i className="material-icons envelope">mail</i>
				Contactanos
			</h2>
			<Form product={props.product}/>
		</section>
	)
}

export default Contacto