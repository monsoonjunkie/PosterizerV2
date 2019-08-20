import React from 'react';
import OrderReviewItem from './order-review-item';

export default class OrderReviewSummary extends React.Component {
    
    createItemList() {
        let listArr = this.props.cartReview;
        let counter = 0;
        let listObj = listArr.map(itemObj => {
          counter++;
          return <OrderReviewItem key ={counter} cartId ={counter} item ={itemObj} setView={this.props.setView} remove = {this.props.remove}/>;
    
        });
    
        return listObj;
      }
    render(){
        let review = this.createItemList();
        return(
            <div>
                <div className="review-scroll">
                    {review}
                </div>
            </div>
        )
    }
}