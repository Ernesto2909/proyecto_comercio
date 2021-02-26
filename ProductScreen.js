import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen (props){
    console.log(props.match.params.id)
    const product=data.products.find(x => x._id=== props.match.params.id);
    return <div >
        <div className="regresar"> 
            <Link to="/">Regresar</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img  src={product.imagen} alt="product"></img>
            </div>
        <div className="details-info">  
            <ul>
                <li>
                    <h4>{product.nombre}</h4>
                </li>
                <li>
                    {product.raiting} Stars ({product.numReviews} Reviews)
                </li>
                <li>
                 Precio: <b>${product.precio}</b>
                </li>
                <li>
                    Descripcion
                    <div>
                        {product.nombre}
                    </div>
                </li>
            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Precio:{product.precio}
                </li>
                <li>
                    Estado:{product.numReviews}
                </li>
                <li>
                    Cantidad:<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </li>
                <li>
                    <button className="button" >Agregar al carrito</button>
                </li>
            </ul>
        </div>

        </div>
           
        
        </div>


    /*console.log(props.match.paramas.id);
    const producto= data.products.find(x => x._id===props.match.paramas.id);

    return <div>
        <h1>{producto.nombre}</h1>
    </div>*/
}
export default ProductScreen;