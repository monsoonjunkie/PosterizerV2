import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      count: 1

    };
    this.getProductId = this.getProductId.bind(this);
    this.setViewReset = this.setViewReset.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }
  componentDidMount() {
    this.getProductId(this.props.viewDetailsId);
  }
  getProductId(id) {

    fetch('/api/products.php?id=' + id)
      .then(response => response.json())
      .then(response => { return response; })
      .then(response => {
        this.setState({ product: response });

      });
  }
  handleAdd(event) {
    event.preventDefault();
    let count = parseInt(this.state.count);
    this.setState({ count: count + 1 });
  }

  handleMinus() {
    event.preventDefault();
    let count = parseInt(this.state.count);
    if (count > 1) {
      this.setState({ count: count - 1 });
    }
  }

  setViewReset() {
    this.props.setView('catalog', {});
  }

  render() {
    let count = this.state.count;
    if (this.state.product === null) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary">
            <span className="sr-only">Loading</span>
          </div>
        </div>
      );

    } else {
      let product = this.state.product;
      let price = (product.price / 100).toFixed(2);
      return (
        <div>

          <div className="container">
            <div className="btn return" onClick={this.setViewReset}> {'<Back to catalog'} </div>
            <div className= "row">

              <div className="col-sm-6">
                <img className = "img-fluid" src={product.image} alt=""/>
              </div>

              <div className="col-sm-6 card">
                <div className= "card-body">
                  <h3 className="card-title card-heading">{product.name}</h3>
                  <h5 className="number">${price}</h5>

                  <p className="card-text product">{product.shortDescription}</p>
                </div>
                <div className="d-flex justify-content-center mb-1">
                  <button className="btn btn-black increment" onClick={this.handleMinus} >-</button>
                  <div className="number quant p-2">{count}</div>
                  <button className="btn btn-black increment"onClick={this.handleAdd}>+</button>
                </div>
                <button className="btn btn-colorize" onClick={() => {
                  this.props.addCart(this.state, this.state.count); this.setState({ count: 1 });
                }}>Add to Cart</button>
              </div>

            </div>
            <div className="container mt-1 p-0 ">
              <h4>Product Description</h4>
              <div className="col">{product.longDescription}</div>
            </div>

          </div>
        </div>
      );
    }
  }
}
export default ProductDetails;
