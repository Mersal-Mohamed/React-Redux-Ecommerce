import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItem: true
    };
  }

  render() {

    let product = this.props.product;
    return (
      <div className="product" >
        <NavLink to="/details">
          <img
            src={`products/${product.image}`}
            alt="product"
            onClick={() => this.props.showItem(product.id-1,this.state.showItem)}
          />
        </NavLink>
        <div className="product-description">
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>
      </div>
    );
  }
}

export default Product;
