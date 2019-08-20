import React from 'react';

class CartSummaryItem extends React.Component {

  render() {
    let cartItemId = this.props.cartId - 1;
    let product = this.props.item.product;
    let price = (product.price / 100).toFixed(2);
    return (
      <div className="container">

        <div className= "row">

          <div className="col-sm-6">
            <img className = "img-fluid" src={product.image} alt=""/>
          </div>

          <div className="col-sm-6 card">
            <div className= "card-body">
              <h3 className="card-title card-heading">{product.name}</h3>
              <h5 className="number">${price}</h5>
              <div>
                <div>Number of items: {this.props.item.count}</div>
              </div>
              <p className="card-text product">{product.shortDescription}</p>

            </div>
            <button className="btn btn-colorize fixed" onClick ={() => this.props.remove(cartItemId)}>Remove</button>
          </div>
        </div>
      </div>
    );

  }
}

export default CartSummaryItem;
