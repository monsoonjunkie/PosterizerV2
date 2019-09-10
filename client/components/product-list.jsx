import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {

  createGridList() {
    let listArr = this.props.productList;

    let listObj = listArr.map(itemObj => {

      return <ProductListItem key ={itemObj.id} item ={itemObj} setView={this.props.setView}/>;

    }
    );
    return listObj;
  }

  render() {
    let itemList = this.createGridList();
    return (
      <div>
        <div className="logo-sum">
          <div className="subtitle">posters + room = posterized</div>
          <img className="glasses" src="images/cool.png" alt=""/>
        </div>
        <div className="listContainer row  ">
          {itemList}
        </div>
      </div>
    );
  }
}

export default ProductList;
