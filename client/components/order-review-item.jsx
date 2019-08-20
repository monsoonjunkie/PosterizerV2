import React from 'react';

export default class OrderReviewItem extends React.Component {
    render(){
        let product = this.props.item.product;
        let count = this.props.item.count
        return(
            <div className ="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img className = "img-fluid review-item" src={product.image} alt=""/>
                    </div>
                    
                    <div className="col-sm-6 card">
                        <div className= "card-body">
                            <h3 className="card-title card-heading">{product.name}</h3>
                            
                            <div>
                                <div>Number of items: {count}</div>
                            </div>
                            <p className="card-text product">{product.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}