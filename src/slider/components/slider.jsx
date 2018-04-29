import React from 'react'
import SlideOne from './slidesOne.js'
import SlideTwo from './slidesTwo.js'
import SlideThree from './slidesThree.js'

function Slider (props) {
  return (
  	<section id="principal">
		<div className="slider">
			<SlideOne active={(props.index===1)? 'active':''}/>
			<SlideTwo active={(props.index===2)? 'active':''}/>
			<SlideThree active={(props.index===3)? 'active':''}/>
			
			<i id="left" className="left material-icons noselect" onClick={props.handleLeft}>keyboard_arrow_right</i>
			<i id="right" className="right material-icons noselect" onClick={props.handleRight}>keyboard_arrow_left</i>		
			<div className="indicadores">
				<div onClick={props.handleSliderPick} id="1" className={(props.index===1)? 'pick indicador':'indicador'}></div>
				<div onClick={props.handleSliderPick} id="2" className={(props.index===2)? 'pick indicador':'indicador'}></div>
				<div onClick={props.handleSliderPick} id="3" className={(props.index===3)? 'pick indicador':'indicador'}></div>
			</div>
		</div>
	</section>
  )
}

export default Slider