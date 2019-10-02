import React from 'react';

class ProductListItem extends React.Component {

  render() {

    let product = this.props.item;
    let price = (product.price / 100).toFixed(2);
    return (

      <div className = "card col-sm-4 itemContainer" onClick={() => this.props.setView('details', product.id)} >
        <img className="card-img-top img" src = {product.image}></img>
        <div className= "card-body">
          <h4 className="lod-font card-title card-heading">{product.name}</h4>
          <h5 className="number">${price}</h5>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
