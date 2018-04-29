import React from 'react'
import Producto from '../../producto/components/producto'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


function Catalogo (props) {
	return (
		<section id="catalogo" className="catalogo">
			<div className="barra">
				<h3 className="noselect">Catalogo</h3>
				<div className="buscador">
					<input type="text" placeholder="Busca el producto que desees" onChange={props.handleSearch} />
					<i className="material-icons noselect">search</i>	
				</div>
			</div>
			<div className="contenedor">
				{
					props.products.map((element)=> {
						console.log(element)
						return (
							<CSSTransitionGroup
								transitionName="fade"
								transitionEnterTimeout={500}
								transitionLeave={false}
								key={element.id}
							>
								<Producto key={element.id} nombre={element.nombre} image={element.image} handleClick={props.handleProductClick}/> 
							</CSSTransitionGroup>
						)
					})
				}
				{
					!(props.products.length === props.limite) &&
					<div onClick={props.handleMoreClick} className="ver">
						<i className="material-icons">expand_more</i>
						<p>Ver mas</p>
					</div>
				}
			</div>
		</section>
	)
}

export default Catalogo