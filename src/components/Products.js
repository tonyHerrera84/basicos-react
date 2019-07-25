import React, {Component, Fragment} from 'react';
import Producto from './Producto';

class Productos extends Component {

    state = {
        productos: [
            {id: 1, name: 'Camisa AngularJS', precio: 30},
            {id: 2, name: 'Camisa VueJS', precio: 33},
            {id: 3, name: 'Camisa ReactJS', precio: 23},
            {id: 4, name: 'Camisa NodeJS', precio: 44}
        ],
        totalCarrito: 500,
        cliente: 'Antonio Herrera'
    }
    render() {
        const {productos} = this.state;
        
        return (
            <Fragment>
                <h1>Lista de productos</h1>
                {productos.map( producto => (
                    <Producto key={producto.id} producto={producto} />
                ))}
            </Fragment>
        );
    }
}

export default Productos;