import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.setViewReset = this.setViewReset.bind(this);

  }

  setViewReset() {
    this.props.setView('catalog', {});
  }

  createItemList() {
    let listArr = this.props.cart;
    let counter = 0;
    let listObj = listArr.map(itemObj => {
      counter++;
      return <CartSummaryItem key ={counter} cartId ={counter} item ={itemObj} setView={this.props.setView} remove = {this.props.remove}/>;

    });

    return listObj;
  }
  render() {

    let cartTotal = this.props.cartPrice();
    let cartTotalPrice = (cartTotal / 100).toFixed(2);
    let CartSum = this.createItemList();
    let itemCount = this.props.cartCount();
    return (
      <div className ="container">
        <div className="btn return" onClick={this.setViewReset}> {'<Back to catalog'} </div>
        <div className="cart pt-2">My Cart : {itemCount} items</div>
        <div className="d-flex justify-content-between">
          <div className="col-4 align-items-center">
            <div className="total number">Current Total: ${cartTotalPrice}</div>
          </div>
          <button className="btn btn-colorize" onClick={() => this.props.setView('checkout', {})}>Checkout</button>
        </div>

        <div className="p-3">
          {CartSum}
        </div>
      </div>

    );
  }
}

export default CartSummary;
