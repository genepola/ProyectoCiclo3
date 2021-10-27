import React, { useEffect, useState } from 'react';
import '../App.css';
import useAuth from '../hooks/useAuth';
import Headergestproduct from './Headergestproduct';
import Agregar from '../assets/img/Agregar.png';
import Lapiz from '../assets/img/Lapis.png';
import { Link } from "react-router-dom";
import axios from 'axios'

  
const Gestionproductos =() =>{

    const auth = useAuth();

    const [productos, setProductos] = useState([]);

    const ListarProductos = async () => {
        try {
            const { status, data } = await axios({
                method: 'GET',
                url: 'http://localhost:4500/proyecto/productos/listar',
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            });
           if(status===200){
                setProductos(data.productos);
           }else{
               console.log("Error");
           }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        ListarProductos();
    }, []);

    return (

        <div>
            <Headergestproduct />
        <div className="iconosVentas">
        <ul>
            <li>
            <Link to="Ingresoproductos/new"><img src={Agregar} alt=""/></Link>
                <span>Nuevo Producto</span>
            </li>
        </ul>
            
    </div>
    <div className="filtro">
        <span>Filtro</span>
        <select className="redondo">
            <option value="">ID producto</option>
            <option value="">Descripcion</option>
        </select>
        <input type="text" className="redondo"/>
    </div>
    <div className="divTabla">
        <table>
            <tr>
                <th>Id Producto</th>
                <th>Nombre Producto</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
            {
                    productos.map((productos, index)=>(
                        <tr key={productos._id}>
                            <td>{productos.ID}</td>
                            <td>{productos.Descripcion}</td>
                            <td>{productos.ValorUnitario}</td>
                            <td>{productos.Estado}</td>
                            <td><Link to={{pathname:"Ingresoproductos/edit", listProductos:{productos}  }}> <img src={Lapiz}  alt="" id="img_lapiz" /></Link></td>
                        </tr>
                    ))
                }
        </table>
    </div>
    </div>
    )
}

export default Gestionproductos