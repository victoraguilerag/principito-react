import React from 'react'

function Layout (props) {
	return (
		<div className="Layout">
			{props.children}
         	<a href="#inicio" id="irArriba"><i className="material-icons noselect">arrow_upward</i></a>
		</div>
	)
}

export default  Layout