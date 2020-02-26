import React, { Component } from "react";

export default class cartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { count, item } = this.props;
    return (
      <div>
        <hr />
        <div className="sold-item">
          <div className="item-details">
            <div className="cart-img">
              <img src={`products/${item.image}`} alt="item" />
              <p>{item.name}</p>
            </div>
            <span>
              {count < 10 ? 0 : ""}
              {count}
            </span>
            <span>${parseInt(item.price) * count}</span>
            <button>CHECK OUT</button>
          </div>
        </div>
      </div>
    );
  }
}
