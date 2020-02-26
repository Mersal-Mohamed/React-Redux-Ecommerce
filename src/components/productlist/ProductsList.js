import React from 'react';
import "./Products.scss"
import { connect } from 'react-redux'
import Product from '../product/Product'


 class ProductsList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
        }
    }
   
    handleDetails = (id,showItem) => {
        this.props.details(id,showItem)
     };
    
    render() {
        return(
            <div className='products container' >

                {
                       this.props.products.map((product) => {
                        return(
                            <div key={product.id}>
                                <Product product={product} showItem= {this.handleDetails} />                       
                            </div>
                        )
                    })
                                            
                        
                }
               
                
                <button>
                    MORE PRODUCTS
                </button>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        products: state.showDetails.products,
        item: state.showDetails.item,
        items: state.showDetails.similarItems
    }
  }

  function mapDispatchToProps(dispatch) {
      return {    
      details: (id,showItem) => dispatch({type: 'get',id, showItem})
  }
}



  export default connect(mapStateToProps,mapDispatchToProps)(ProductsList)

