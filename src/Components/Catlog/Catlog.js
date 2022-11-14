import React, { Component } from 'react'
import { fetchApi } from '../redux/actions/productsActions';
import './Catlog.css';
import {connect} from 'react-redux';
import ProductsPage from './productsPage';
import { addToCart } from '../redux/actions/cartActions';



export class Catlog extends Component {
  componentDidMount=()=>{
    this.props.fetchApi();
  }
  render() {
    console.log(this.props.products)
    return (
       
      <div>
         
        {this.props.products.map((item, i)=><ProductsPage key={i} item={item} addToCart={this.props.addToCart}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({products}) => {
  return{
    products
  }
}

export default connect(mapStateToProps,{fetchApi,addToCart})(Catlog)
