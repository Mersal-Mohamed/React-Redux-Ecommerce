import React, { Component } from "react";
import { connect } from "react-redux";
import "./Details.scss";
import { NavLink } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      colors: this.props.item.colors,
      color: this.props.item.colors[0],
      showItem: false,
      anotherItem: null,
      soldItems: []
    };
  }

  showAnotherDetails = (id) => {
    this.setState({      
      showItem: true,
      anotherItem: this.props.items[id]
    },() => {console.log(this.state.showItem,this.state.anotherItem)})
  }

  increaseCounter = e => {
    this.setState({
      count: parseInt(e.target.value)
    });
  };

  changeColor = e => {
    this.setState({
      color: e.target.style.background
    });
  };

  handleCart = (item,count,e) => {
    let soldItems = []
    soldItems.push(item)
    let price = parseInt(item.price) * count
    this.setState({
      soldItems
    },() => {
      console.log(this.state.soldItems)
      this.props.addItem(item,count,price)
    })
 };

 
  render() {
    console.log(this.props.soldItems)
      let x ;
      if(this.state.showItem) {
        x = this.state.anotherItem
      }else {
        x = this.props.item
      }
      console.log(x)
     let item = x;
     let items = this.props.items,
      showItem = this.props.showItem,
      style1 = {
        background: this.state.colors[0] 
      },
      style2 = {
        background: this.state.colors[1]
      },
      style3 = {
        background: this.state.colors[2]
      };

    return (
      <div className="container">
        {            
          showItem ? (
          <div>
            <div className="item">
              <div className="detail-images">
                <div className="small-imgs">
                  <img src={`products/${item.image}`} alt="item" />
                  <img src={`products/${item.image}`} alt="item" />
                  <img src={`products/${item.image}`} alt="item" />
                </div>
                <div className="main-img">
                  <div className="grey"></div>
                  <img src={`products/${item.image}`} alt="item"  />
                </div>
              </div>
              <div className="details-text">
                <h2>{item.price}</h2>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <div className="color">
                  <span style={{ textTransform: "capitalize" }}>
                    Color: {this.state.color}
                  </span>
                  <span
                    className="color1"
                    style={style1}
                    onClick={this.changeColor}
                  ></span>
                  <span
                    className="color2"
                    style={style2}
                    onClick={this.changeColor}
                  ></span>
                  <span
                    className="color3"
                    style={style3}
                    onClick={this.changeColor}
                  ></span>
                </div>
                <div className="addToCart">
                  <input
                    type="number"
                    value={this.state.count}
                    onChange={this.increaseCounter}
                  />
                  <button onClick={(e) => this.handleCart(item,this.state.count,e)}> ADD TO CART</button>
                </div>
              </div>
            </div>
            <h3>Might also like</h3>

            <div className="similar-products">
                <div className="product">
                  <NavLink to="/details">
                    <img
                      src={`products/${items[0].image}`}
                      alt="product"
                      onClick={() =>
                        this.showAnotherDetails(0)
                      }
                    />
                  </NavLink>
                  <div className="product-description">
                    <span>{items[0].name}</span>
                    <span>{items[0].price}</span>
                  </div>
                </div>  
                <div className="product">
                  <NavLink to="/details">
                    <img
                      src={`products/${items[1].image}`}
                      alt="product"
                      onClick={() =>
                        this.showAnotherDetails(1)
                      }
                    />
                  </NavLink>
                  <div className="product-description">
                    <span>{items[1].name}</span>
                    <span>{items[1].price}</span>
                  </div>
                </div>            
                <div className="product">
                  <NavLink to="/details">
                    <img
                      src={`products/${items[2].image}`}
                      alt="product"
                      onClick={() =>
                        this.showAnotherDetails(2)
                      }
                    />
                  </NavLink>
                  <div className="product-description">
                    <span>{items[2].name}</span>
                    <span>{items[2].price}</span>
                  </div>
                </div>
            </div>
            <div className="more">
            <button >
                    MORE PRODUCTS
            </button>
            </div>
         
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.showDetails.item,
    showItem: state.showDetails.showItem,
    items: state.showDetails.similarItems,
    soldItems: state.addToCart.soldItems
  };
}

function mapDispatchToProps(dispatch) {
    return {    
    addItem: (item,count,price) => dispatch({type: 'add',showCart:true,item ,count,price })
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
