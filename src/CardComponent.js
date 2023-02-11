import { useDispatch, useSelector } from 'react-redux';
import { addItem,removeItem } from './cartSlice';

const CardComponent=({data})=>{
    const {description,image,name,price,id} = data
    const dispatch = useDispatch();
    const cartItem = useSelector((store) =>store.cart.value);
    console.log(cartItem)

    const addToCart=()=>{
        dispatch(addItem());
    }

    const removeCartItem=()=>{
        dispatch(removeItem(id));
    }

   
    return(
        <div className="card d-flex">
         <div className="img d-flex">
         <img src = {image} alt="item-img"></img>
         {cartItem >= 1 &&  <div>{cartItem}</div>}
         </div>
         <div className="description">
         {cartItem >= 1 && <button onClick={removeCartItem}>X</button> }
         <h3>{name}</h3>
         <p>{description}</p>
         <button onClick={addToCart}>${price}</button>
         </div>
        </div>
    )
}

export default CardComponent;