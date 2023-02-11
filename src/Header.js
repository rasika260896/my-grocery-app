import { useSelector } from 'react-redux';

const Header = () =>{
    const cartItem = useSelector((store) =>store.cart.value);
    console.log(cartItem)
    return(
       <div className="d-flex header-component">
        <div className="logo">
        <h1>SuperM</h1>
        </div>
        <div className="d-flex links">
        <div>Home</div>
        <div>About Us</div>
        <div>Products</div>
        <div>Cart ({cartItem })</div>
        </div>
       </div>
    )
}

export default Header;