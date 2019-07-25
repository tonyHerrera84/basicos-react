import React from 'react';

const Producto = ({producto}) => {
    return ( 
        <div>
            <h4>{producto.name}</h4>
            <p>Precio: {producto.precio}</p>
        </div>
     );
}

export default Producto;