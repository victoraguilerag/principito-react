import React from 'react'

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			nombre: '',
			email: '',
			telefono: '',
			mensaje: '',
			valid: false,
		}
	}

	render (props) {
		return (
			<form>
				<label htmlFor="nombre">Nombre</label>
				<input type="text" placeholder="Nombre" name="nombre" id="nombre" pattern="^[a-zA-Z\s\.]*$"/>
				<label htmlFor="email">Email</label>
				<input type="email" placeholder="Email" name="email" id="email" />
				<label htmlFor="telefono">Telefono</label>
				<input type="text" placeholder="Telefono" name="telefono" id="telefono" pattern="^[0-9\-\+]{9,15}$"/>
				<label htmlFor="asunto">Asunto</label>
				<select name="asunto" id="asunto" name="asunto" defaultValue="Contacto">
					<option selected={(this.props.service)? 'true':'false'}>Servicios</option>
					<option selected={(this.props.product)? 'true':'false'}>Productos</option>
					<option >Contacto</option>
				</select>
				<label htmlFor="mensaje">Mensaje</label>
				<textarea placeholder="Mensaje" name="mensaje" id="mensaje"/>
				<input type="submit" value="Enviar" />
			</form>
		)
	}
}

export default Form