import React from 'react'
import '../App.css';


function menu() {
    return (
        <div id="sideMenu" className="menu-collapsed">
            <div id="header">
                <div id="title"></div>
                <div id="menuBtn">
                    <div className="btn-hamburguesa"></div>
                    <div className="btn-hamburguesa"></div>
                    <div className="btn-hamburguesa"></div>
                </div>
            </div>
            <div id="profile">
                <div id="photo"><img src="Imagenes/Vendedor.png" alt=""/></div>
                <div id="name"><span>Perfil</span></div>
            </div>
            <div id="menu-items">
                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src="Imagenes/Agregar.png" alt=""/></div>
                        <div class="title"><span>Gestión de usuarios</span></div>
                    </a>
                </div> 
                <div class="item separator">
                
                </div>
                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src="Imagenes/Agregar.png" alt=""/></div>
                        <div class="title"><span>Gestión de productos</span></div>
                    </a>
                </div> 
                <div class="item separator">
                
                </div>
                <div class="item">
                    <a href={() => false}>
                        <div class="icon"><img src="Imagenes/Agregar.png" alt=""/></div>
                        <div class="title"><span>Gestión de ventas</span></div>
                    </a>
                </div> 
                <div class="item separator">
                
                </div>
            </div>
        </div>
        
    )
}

export default menu
