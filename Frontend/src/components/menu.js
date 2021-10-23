import React from 'react'
import Agregar from '../assets/img/Agregar.png';
import '../App.css';
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div id="sideMenu" className="menu-expanded">
            <div id="header">
                <div id="title"></div>
                <div id="menuBtn">
                    <div className="btn-hamburguesa"></div>
                    <div className="btn-hamburguesa"></div>
                    <div className="btn-hamburguesa"></div>
                </div>
            </div>
            <div id="profile">
                <div id="name"><span>Perfil</span></div>
            </div>
            <div id="menu-items">
                <div className="item">
                    <a href={() => false}>
                    
                        <div className="icon"><img src={Agregar} alt=""/></div>
                        {/* <div className="title"><span>Gestión de usuarios</span></div> */}
                        <div className="title"><span><Link to="/Gestionusuarios">Gestión usuarios</Link></span></div>
                    </a>
                </div> 
                <div className="item separator">
                
                </div>
                <div className="item">
                    <a href={() => false}>
                    
                        <div className="icon"><img src={Agregar} alt=""/></div>
                        {/* <div className="title"><span>Gestión de productos</span></div> */} 
                        <div className="title"><span><Link to="/Gestionproductos">Gestión productos</Link></span></div>

                    </a>
                </div> 
                <div className="item separator">
                
                </div>
                <div className="item">
                    <a href={() => false}>
                        <div className="icon"><img src={Agregar} alt=""/></div>
                        <div className="title"><span><Link to="/Gestionventas">Gestión ventas</Link></span></div>
                    </a>
                </div> 
                <div className="item separator">
                
                </div>
            </div>
        </div>
        
    )
}

export default Menu
