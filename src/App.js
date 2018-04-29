import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/animations.css';
import Header from './header/components/header.js'
import Slider from './slider/components/slider.jsx'
import Layout from './layout/components/layout.js'
import Descripcion from './descripcion/components/descripcion.js'
import Servicios from './servicios/components/servicios.js'
import Catalogo from './catalogo/components/catalogo.js'
import Contacto from './contacto/components/contacto.js'
import Footer from './footer/components/footer.js'
import Modal from './modal/components/modal.js'
// import Cargando from './cargando/components/cargando.js'
import Api from './api/products.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      sliderIndex: 1,
      product: '',
      servicio: '',
      cantidad: 3,
      limite: Api.length,
      busqueda: '',
    }
    this.setRef = element => {
      this.modal = element
    }
    this.openModal = () => {
      this.modal.classList.add('modalon')
    }
    this.closeModal = () => {
      this.modal.classList.remove('modalon')
    }
    this.handleSliderLeft = this.handleSliderLeft.bind(this)
    this.handleSliderRight = this.handleSliderRight.bind(this)
    this.handleSliderPick = this.handleSliderPick.bind(this)
    this.handleProductClick = this.handleProductClick.bind(this)
    this.handleServicioClick = this.handleServicioClick.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.prepareProducts = this.prepareProducts.bind(this)
    this.handleMoreClick = this.handleMoreClick.bind(this)
  }

  handleSliderLeft ()  {
      if(this.state.sliderIndex===3) {
        this.setState({
          sliderIndex: 1,
        })
      } else {
        this.setState((prevState, props) => ({
          sliderIndex: prevState.sliderIndex + 1,
        }));
      }
  }

  handleSliderRight ()  {
      if(this.state.sliderIndex===1) {
        this.setState({
          sliderIndex: 3,
        })
      } else {
        this.setState((prevState, props) => ({
          sliderIndex: prevState.sliderIndex - 1,
        }));
      }
  }

  handleSliderPick (e) {
    this.setState({
      sliderIndex: Number(e.target.id),
    })
    this.setTimeForSlider(5000)
  }

  handleProductClick (element) {
    console.log(element.target.id)
    this.setState({
      product: element.target.id,
      servicio: '',
    })
    document.getElementById('contacto').scrollIntoView()
  }

  handleServicioClick (element) {
    console.log(element.target)
    this.setState({
      product: '',
      servicio: element.target.id,
    })
    document.getElementById('contacto').scrollIntoView()
  }

  handleMoreClick () {
    this.setState((prevState, props) => ({
      cantidad: prevState.cantidad + 3,
    }));
    this.setTimeForSlider(10000)
  }

  setTimeForSlider (time) {
    // setTimeout((e) => {
    //   console.log('cambio')
    //   this.handleSliderLeft()    
    // }, time)
  }

  prepareProducts () {
    let a = []
    if (this.state.busqueda !== '') {
        for (let i=0; i < Api.length; i++){
          if(Api[i] && Api[i].nombre.toLowerCase().includes(this.state.busqueda.toLowerCase())) {
            a.push(Api[i])
          }
        }
    } else {
      for(let i=0;i < this.state.cantidad; i++){
          if(Api[i]) {
            a.push(Api[i])
          }
      }
    }
    return a
  }

  handleSearch (element) {
    this.setState({
      busqueda: element.target.value
    })
  }
  componentDidMount () {
    this.setTimeForSlider(5000)
  }
  componentDidUpdate () {
    this.setTimeForSlider(5000)
  }

  render() {
    let list = this.prepareProducts()
    return (
      <Layout>
          <Header handleClick={this.openModal}/>
          <Slider handleSliderPick={this.handleSliderPick} index={this.state.sliderIndex} handleLeft={this.handleSliderLeft} handleRight={this.handleSliderRight}/>
          <Descripcion/>
          <Servicios handleClick={this.handleServicioClick}/>
          <Catalogo limite={this.state.limite} handleSearch={this.handleSearch} products={list} handleProductClick={this.handleProductClick} handleMoreClick={this.handleMoreClick} />
          <Contacto product={this.state.product} service={this.state.servicio}/>
          <Footer />
          <Modal handleClick={this.closeModal} setRef={this.setRef} />
      </Layout>
    );
  }
}

export default App;