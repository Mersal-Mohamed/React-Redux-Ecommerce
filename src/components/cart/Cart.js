import React, { Component } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    let { showCart, count, soldItems,total,totalPrice } = this.props;
    
    console.log(count)
    let sum;
    let allPrice;
    if(total.length > 0) {
         sum = total.reduce((a,b) => a+b)
         allPrice = totalPrice.reduce((a,b) => a+b)
    }
    return (
      <div className="cart container">
        <h3>Your Cart</h3>

        {showCart ? (
          soldItems.map((item,order = total.length-1) => {
            return (
            <CartItem item={item} count={total[order]} key={item.id} />
            )
          })
        
         
        ) : (
          <div>
            <hr />
            <h3>Your cart is empty</h3>
          </div>
        )}
        {
            showCart? 
            ( 
            <div className='all-items'>
                <span>All items</span>
                <span>
                {sum < 10 ? 0 : ""}
                    {sum}
                    </span>
                <span>${allPrice}</span>
                <button>CHECK OUT ALL</button>
            </div>
            ) : ''
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.addToCart.addedItem,
    showCart: state.addToCart.showCart,
    soldItems: state.addToCart.soldItems,
    count: state.addToCart.count,
    total: state.addToCart.total,
    totalPrice : state.addToCart.totalPrice
  };
}

export default connect(mapStateToProps)(Cart);
