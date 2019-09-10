import React from 'react';

class Header extends React.Component {

  render() {
    let cart = this.props.cartItemCount;
    let itemCount = this.props.cartCount(cart);
    return (<div className="header">
      <div>POSTERIZER</div>
      <div className ="logoContainer d-flex ">
        <div className="col-4"></div>
        <i className="col-4 fab fa-hornbill logo p-2"></i>
        <div className="col-4 row justify-content-end ">
          <div className="items p-2 shoppingCart">{itemCount} items</div>
          <i className=" fas fa-shopping-cart shoppingCart p-2 shopicon" onClick={() => this.props.setView('cart', {})}></i>
        </div>

      </div>
      <div className ="shoppingCart d-flex justify-content-end p-2">

      </div>
    </div>
    );
  }
}

export default Header;
