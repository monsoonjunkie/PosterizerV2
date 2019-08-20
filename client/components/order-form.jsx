import React from 'react';
import OrderReviewSummary from "./order-review-summary";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditcard: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phonenumber: '',
      expiration: '',
      status: 'payment',
      clear: false,
      errors: []
    };
    this.onChange = this.onChange.bind(this);
    this.setViewReset = this.setViewReset.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.undoOrder = this.undoOrder.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  setViewReset() {
    this.props.setView('catalog', {});
  }
  checkForm(event) {
    event.preventDefault();
    const { name, creditcard, address, city, state, zip, phonenumber, expiration } = this.state;
    const errors = this.validate(name, creditcard, address, city, state, zip, phonenumber, expiration);

    if (errors.length > 0) {
      this.setState({ errors });

    } else {
      this.setState({ status: 'review' });
    }

  }
  hideCreditCard(creditcard) {
    let hidden = '';
    for (let i = 0; i < (creditcard.length - 4); i++) {
      hidden += 'X';
    }
    let card = hidden + creditcard.slice(creditcard.length - 4, creditcard.length);
    return card;

  }
  submitOrder() {
    if (this.state.status === 'review') {
      this.props.placeOrder(this.state);
      this.setState({ status: 'thankyou' });
    }
  }
  undoOrder() {
    this.setState({ status: 'payment' });
  }

  validate(name, creditcard, address, city, state, zip, phonenumber, expiration) {
    const errors = [];
    let date = this.state.expiration;
    let monthStr = date.slice(0, 2);
    let yearStr = date.slice(3, 7);
    let month = parseInt(monthStr);
    let year = parseInt(yearStr);
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    const regexCreditCard = /^[0-9]{16}$/;
    const regexPhoneNumber = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (name.length === 0) {
      errors.push("Name can't be empty");
    }
    if (address.length === 0) {
      errors.push("Address can't be empty");
    }

    if (city.length === 0) {
      errors.push("City can't be empty");
    }

    if (state.length === 0) {
      errors.push("State can't be empty");
    }

    if (zip.length === 0) {
      errors.push("Zip can't be empty");
    }

    if (!regexPhoneNumber.test(phonenumber)) {
      errors.push('phone number is not valid');
    }

    if (creditcard.length === 0) {
      errors.push("creditcard can't be empty");
    }
    if (!regexCreditCard.test(creditcard)) {
      errors.push('creditcard account needs to be valid');
    }

    if (expiration.length === 0) {
      errors.push("card expiration can't be empty");
    }
    if (!month || !year || month > 12 || (year <= currentYear && month < currentMonth)) {
      errors.push('card expiration is not valid');
    }
    return errors;
  }

  render() {
    let cart = this.props.cart;
    let cartReview = this.props.cartReview;
    let cartTotal = this.props.cartPrice(cart);
    let cartReviewTotal = this.props.cartPrice(cartReview);
    let cartTotalPrice = (cartTotal / 100).toFixed(2);
    let cartReviewTotalPrice= (cartReviewTotal / 100).toFixed(2);
    if (this.state.status === 'payment') {
      const { errors } = this.state;
      return (
        <div className="container">
          <div className="fixed">
            <div className="formTotal number">Current Total: ${cartTotalPrice}</div>
          </div>
          <div className="wrongInput check">*Please check if each field is filled correctly</div>
          {errors.map(error => (
            <p key={error} className="hidden wrongInput">X {error}</p>
          ))}
          <form className="outline">
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputFullName">Full Name</label>
                <input type="text" className="form-control" value={this.state.name} id="inputFullName" onChange= {this.onChange} placeholder="First and Last Name" name="name"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control " value={this.state.address} id="inputAddress" onChange= {this.onChange} placeholder="Apartment, studio, or floor" name="address"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" value={this.state.city} id="inputCity" onChange= {this.onChange} placeholder="I.e. Los Angeles" name="city"/>
              </div>
              <div className="form-group col">
                <label htmlFor="inputState">State</label>
                <input type="text" className="form-control" value={this.state.state} id="inputState" onChange= {this.onChange} placeholder="I.e. California" name="state"/>
              </div>
              <div className="form-group col">
                <label htmlFor="inputZip">Zip</label>
                <input type="number" className="form-control" value={this.state.zip} id="inputZip" onChange= {this.onChange} placeholder="zipcode" name="zip"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input type="text" className="form-control " value={this.state.phonenumber} id="inputPhoneNumber" onChange= {this.onChange} placeholder="Phone Number" name="phonenumber"/>
              </div>
            </div>
          </form>
          <div className="form-row outline">
            <div className="form-group col">
              <label htmlFor="inputFullName">Credit Card </label>
              <input type="text" className="form-control" value={this.state.creditcard} id="inputFullName" onChange= {this.onChange} placeholder="16 digit Account Number" name="creditcard" maxLength="16"/>
            </div>
            <div className="form-group col">
              <label htmlFor="inputFullName">Expiration Date </label>
              <input type="text" className="form-control" value={this.state.expiration} id="inputFullName" onChange= {this.onChange} placeholder="mm/yyyy" name="expiration" maxLength="7"/>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-colorize" onClick={this.checkForm}>Continue</button>
          </div>
          <button className="mt-4 btn return" onClick={this.setViewReset}> {'<Continue shopping'}</button>
        </div>
      );
    } else if (this.state.status === 'review') {
      let cardInfo = this.hideCreditCard(this.state.creditcard);
      return (
        <div className="container">
          <div>Order Review</div>
          <div>
            <div>Number of items : {this.props.cart.length}</div>
            <div>Current Total: ${cartTotalPrice}</div>
            <div className="container">
              <div className="card cleaner">
                <div>Name: {this.state.name}</div>
                <div>Address: {this.state.address}</div>
                <div>State:{this.state.city}</div>
                <div>City: {this.state.state}</div>
                <div>Zip: {this.state.zip}</div>
                <div>Creditcard: {cardInfo}</div>
                <div>Exp: {this.state.expiration}</div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-black2 mr-1" onClick={this.undoOrder}>Return to Payment</button>
              <button className=" btn btn-colorize" onClick={this.submitOrder}>Complete Order</button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.status === 'thankyou') {
      return (
        <div>
          <div className="container">
            <div class="thanks">Order Summary</div>
            <div></div>
            <div>
              <OrderReviewSummary cartReview={this.props.cartReview}/>
            </div>
            <div class="return">Total: {cartReviewTotalPrice} </div>
          </div>
          <div className= "thanks" >Thanks for shopping! We have sent your order!</div>
          <div className="d-flex justify-content-center ">
            <div>
              <button className=" btn return" onClick={this.setViewReset}> {'<Continue shopping'}</button>
            </div>
          </div>
        </div>
      );
    }

  }
}
export default CheckoutForm;
