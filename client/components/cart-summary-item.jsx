import React from 'react';

class CartSummaryItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: this.props.item.count,
      update: false,
      active: 'none'
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus  = this.handleMinus.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.confirmText = this.confirmText.bind(this);
    
  }
  handleAdd() {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount})
  }

  handleMinus() {
    if(this.state.count > 1){
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount})
    }
  }
  toggleUpdate(){
    let cartItemId = this.props.cartId - 1;
    let counter = this.props.item.count;
    if(!this.state.update){
      this.setState({count: this.props.item.count, update: true, active: 'display'});
      this.props.updateCart(cartItemId, this.state.count);

      
    }else{
      this.setState({update: false,  active: 'none'});
      this.props.updateCart(cartItemId, this.state.count);
    }
  }
  confirmText(){
    return this.state.update ? 'Confirm' : 'Update Quantity';
  }
  
  
  render() {
    

    let cartItemId = this.props.cartId - 1;
    let product = this.props.item.product;
    let price = (product.price / 100).toFixed(2);
    let confirm = this.confirmText();

    return (
      <div className="container">

        <div className= "row mt-3">

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
                  <button className={`btn btn-black increment ${this.state.active}`} onClick={this.handleMinus} >-</button>
                  <div className={`number quant p-2 ${this.state.active}`}>{this.state.count}</div>
                  <button className={`btn btn-black increment ${this.state.active}`}onClick={this.handleAdd}>+</button>
                  <button className="btn  update-button"onClick = {this.toggleUpdate}>{confirm}</button>
              </div>
            </div>
            <button className="btn btn-colorize fixed" onClick ={() => {
              
              this.props.remove(cartItemId); 

              }}>Remove</button>
            </div>
        </div>
      </div>
    );

  }
}

export default CartSummaryItem;
