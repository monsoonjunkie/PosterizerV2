import React from 'react';

class CartSummaryItem extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     product: this.props.item.product,
  //     count: this.props.item.count
  //   }
    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleMinus  = this.handleMinus.bind(this);
  // }
  // handleAdd() {
  //   let newCount = this.state.count + 1;
  //   let newProduct = this.props.item.product;
  //   this.setState({
  //     product: newProduct,
  //     count: newCount})
  // }

  // handleMinus() {
  //   let newCount = this.state.count - 1;
  //   let newProduct = this.props.item.product;
  //   this.setState({
  //     product: newProduct,
  //     count: newCount})
  // }
  
  render() {
    
    let cartItemId = this.props.cartId - 1;
    let product = this.props.item.product;
    let price = (product.price / 100).toFixed(2);
    console.log('product count', this.props.item)
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
              <div className="d-flex justify-content-center mb-1">
                  <button className="btn btn-black increment" onClick={()=>this.props.substract(this.props.item.count)} >-</button>
                  <div className="number quant p-2">{this.props.item.count}</div>
                  <button className="btn btn-black increment"onClick={()=>this.props.add(this.props.item.count)}>+</button>
                  <button className="btn btn-colorize" onClick={() => {
                  this.props.updateCart(cartItemId);
                }}>Confirm</button>
              </div>
            </div>
            <button className="btn btn-colorize fixed" onClick ={() => this.props.remove(cartItemId)}>Remove</button>
            </div>
        </div>
      </div>
    );

  }
}

export default CartSummaryItem;
