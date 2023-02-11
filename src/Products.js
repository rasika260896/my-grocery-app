import {data} from './data.js';
import CardComponent from './CardComponent.js';

const Products =()=>{
    return(
        <div className="products">
        <h2>Products</h2>
        <p>Take a look at our products</p>
        <div className="container">
        {data.map((item)=>(<CardComponent data={item} key={item.id}/>))}
        </div>
        </div>
    )
}

export default Products;