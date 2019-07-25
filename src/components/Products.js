import React, {Component} from 'react';

class Productos extends Component {

    state = {
        productos: [
            {id: 1, name: 'Camisa AngularJS', precio: 30},
            {id: 2, name: 'Camisa VueJS', precio: 33},
            {id: 3, name: 'Camisa ReactJS', precio: 23},
            {id: 4, name: 'Camisa NodeJS', precio: 44}
        ]
    }
    render() {
        return (
            <h1>Lista de productos</h1>
        );
    }
}

export default Productos;