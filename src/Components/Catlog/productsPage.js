import React from 'react';
//import { addToCart } from '../redux/actions/cartActions';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import './Catlog.css';
//import { connect } from 'react-redux';

const productsPage = ({item,addToCart}) => {
    const {id,title,image,price} = item;
    const buttonClick = e => {
      addToCart(e.target.id)
      console.log(e.target.id);
    }
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={image} alt='' className='imgStyle'/>
            <div className="container">
              <h6>{title}</h6>
              <p>${price}</p>
              <p><button id={id} className="button" onClick={buttonClick}>Add To Cart</button></p>
            </div>
          </div>
        </div>
      </div>
  {/*<div className='card'>
      <div>
        <img src={image} alt='' className='imgStyle'/>
        <div className='container'>
          <h6>{title}</h6>
          <p>${price}</p>
        </div>
      </div>
    </div>
    </div>*/}
   </div>     
     
  )
}

// const mapStateToProps = {
  
// }

export default productsPage
