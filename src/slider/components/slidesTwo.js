import React from 'react'
import productOne from '../../assets/product1.jpg'
import productTwo from '../../assets/product2.jpg'
import productThree from '../../assets/product3.jpg'
import productFour from '../../assets/product4.jpg'

function SlidesTwo (props) {
	return (
		<div className="info slides column second" id={props.active}>

			<div className="data">
				<p className="noselect">
					Ofrecemos una amplia variedad en insumos de impresion y computación, libreria artistica, comercial y escolar.
				</p>
				<div className="galeria">
					<img src={productOne} width="50%" height="50%" alt=""></img>
					<img src={productTwo} width="50%" height="50%" alt=""></img>
					<img src={productThree} width="50%" height="50%" alt=""></img>
					<img src={productFour} width="50%" height="50%" alt=""></img>
				</div>
			</div>
		</div>	
	)
}

export default SlidesTwo