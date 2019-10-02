import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './order-form';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        id: null
      },
      cart: [],
      cartReview: [],
      cartTotal: null,
      status: 'payment',
      userInfo: null,
      pId: null
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.cartPrice = this.cartPrice.bind(this);
    this.cartCount = this.cartCount.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.getSessionCart = this.getSessionCart.bind(this);
    this.getSessionPage = this.getSessionPage.bind(this);
    this.getCheckout = this.getCheckout.bind(this);
  }

  placeOrder(order) {
    let orderdetails = { name: order.name, address: order.address, city: order.city, state: order.state, zip: order.zip, creditcard: order.creditcard, expiration: order.expiration };
    let currentCart = this.state.cart;
    fetch('/api/orders.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer: orderdetails, cart: this.state.cart }) })
      .then(response => response.json())
      .then(response => {
        
        sessionStorage.setItem('cart', JSON.stringify([]));
        sessionStorage.setItem('view', JSON.stringify({"name":"catalog"}));
        sessionStorage.setItem('checkout', JSON.stringify("payment"));
        this.setState({ cart: [], cartReview: currentCart })});

  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(response => { return response; })
      .then(response => {
        let newProductList = response.map(key => key);
        this.setState({ cart: newProductList });
      });
  }

  addToCart(productObj, productCount) {
    const newCart = [...this.state.cart];
    productObj.count = 0;
    let checkIfItemExist = newCart.findIndex(itemIndex => {
      return itemIndex.product.id === productObj.product.id;
    });

    if (checkIfItemExist > -1) {
      newCart[checkIfItemExist].count += productCount;
    } else if (!productObj.count) {
      productObj.count = productCount;
      newCart.push(productObj);
    } else {
      productObj.count = productObj.count + productCount;
      newCart.push(productObj);
    }
    this.setState({ cart: newCart });
    sessionStorage.setItem('cart', JSON.stringify(newCart));
  }

  removeFromCart(cartId) {
    fetch('/api/cart.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartId)
    })
      .then(response => response.json())
      .then(response => {
        const newCart = [...this.state.cart];
        newCart.splice(cartId, 1);
        sessionStorage.setItem('cart', JSON.stringify(newCart));
        this.setState({ cart: newCart });
        
      });

  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(response => {
        return response;
      })
      .then(response => this.setState(
        { products: response }
      ));
  }

  setView(name, id) {
    sessionStorage.setItem('view', JSON.stringify({name: name, id: id}));
    this.setState({ view: { name: name, id: id } });
  }

  total(total, num) {
    return total + num;
  }

  cartPrice(cart) {
    if (!cart.length) {
      return 0;
    } else {
      let cartArr = cart;
      let cartPriceArr = cartArr.map(key => key.product.price * key.count);
      let total = cartPriceArr.reduce(this.total);
      return total;

    }
  }
  cartCount(cart) {

    if (!cart.length) {
      return 0;
    } else {
      let cartArr = cart;
      let cartCount = cartArr.map(key => key.count);
      let total = cartCount.reduce(this.total);
      return total;
    }
  }
  updateCart(cartId, count) {
    const newCart = [...this.state.cart];
    newCart[cartId].count = count;
    sessionStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({cart: newCart});
  }
  getSessionCart() {
    if(!sessionStorage.getItem('cart') || null ){
      
      sessionStorage.setItem('cart', JSON.stringify(this.state.cart));

    } else {
      let cacheCart = JSON.parse(sessionStorage.getItem('cart'));
      this.setState({ cart: cacheCart })
    }
  }
  getSessionPage() {
    if(!sessionStorage.getItem('view') || null ){
      sessionStorage.setItem('view', JSON.stringify(this.state.view));
      
    }else {
      
      let cachePage = JSON.parse(sessionStorage.getItem('view'));
      this.setState({ view: cachePage})
    }
  }
  getCheckout(){
    if(!sessionStorage.getItem('checkout') || null){
      sessionStorage.setItem('checkout', JSON.stringify(this.state.status));

    }else{
      let checkoutPage = JSON.parse(sessionStorage.getItem('checkout'));
      this.setState({status: checkoutPage})
    }
  }
  getUser() {
    if(!sessionStorage.getItem('user')){
      sessionStorage.setItem('user', JSON.stringify(this.state.userInfo))
    } else {
      let userstuff = JSON.parse(sessionStorage.getItem('user'));
      this.setState({userInfo: userstuff})
    }
  }

  componentDidMount() {
    this.getProducts();
    this.cartCount(this.state.cart);
    this.getSessionCart();
    this.getSessionPage();
    this.getCheckout();
    this.getUser();
  }

  render() {
    

    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount ={this.state.cart} cartCount = {this.cartCount} setView = {this.setView} />
          <ProductList productList = {this.state.products} setView = {this.setView}/>
        </div>
      );
    }
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount ={this.state.cart} cartCount = {this.cartCount} setView = {this.setView}/>
          <ProductDetails viewDetailsId={this.state.view.id} setView ={this.setView} addCart={this.addToCart}/>
        </div>
      );
    }
    if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount ={this.state.cart} cartCount = {this.cartCount} setView = {this.setView}/>
          <CartSummary add ={this.itemIncrement} subtract = {this.itemDecrement} updateCart = {this.updateCart} cartCount = {this.cartCount} cart = {this.state.cart} cartPrice={this.cartPrice} setView = {this.setView} remove = {this.removeFromCart}/>
        </div>
      );
    }
    if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount ={this.state.cart} cartCount = {this.cartCount} setView = {this.setView}/>
          <CheckoutForm user ={this.state.userInfo} status = {this.state.status} cart = {this.state.cart} cartReview ={this.state.cartReview} cartPrice={this.cartPrice} setView={this.setView} placeOrder={this.placeOrder}  cartCount = {this.cartCount}/>
        </div>
      );
    }
  }
}
