import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom"
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from "../../redux/cart/cart.actions";




const Cart = ({ cartItems, dispatch }) => {

  let navigate = useNavigate();
  function handleClick() {
    navigate('./checkout');
  }

  return (

    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?

            cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />)
            :
            <span className="empty-message">Your cart is empty</span>
        }
      </div>

      <CustomButton
        onClick={ () => { handleClick(); dispatch(toggleCartHidden()); } }> Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default connect(mapStateToProps)(Cart);