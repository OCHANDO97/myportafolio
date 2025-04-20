import React from 'react'
import { useState, useEffect } from 'react';
import { HashRouter,Link } from 'react-router-dom';
import userImage from '../assets/img/imagenUser.jpg';

const Sidebar = () => {
  return (
    <>
       <aside className="layout__aside">
            <section className="aside__user-info">
                {/* <!-- informacion general usuario --> */}
                <div className="user-info__general">
                    <div className="user-info__container-image"> 
                        <img src={userImage} alt="Foto perfil" className="user_info__image"/>
                    </div>
                    <h2 className="user-info__name">Juan Ochando</h2>
                    <h4 className="user-info__job">Desarrollador</h4>
                </div>
                {/* <!-- menu navegacion --> */}
                <nav className="layout__menu">
                    <ul className="menu__list">
                    <li className="menu__option">
                        <Link to="/" className="menu__link">
                        <i className="menu__icon fa-solid fa-house"></i>
                        <span class="menu__overlay">Home</span>
                        </Link>
                    </li>
                    <li className="menu__option">
                        <Link to="/sobre-mi" className="menu__link">
                        <i className="menu__icon fa-solid fa-user"></i> 
                        <span class="menu__overlay">Sobre mí</span>
                        </Link>
                    </li>
                    <li className="menu__option">
                        <Link to="/curriculum" className="menu__link">
                        <i className="menu__icon fa-solid fa-graduation-cap"></i> 
                        <span class="menu__overlay">Curriculum</span>
                        </Link>
                    </li>
                    <li className="menu__option">
                        <Link to="/portafolio" className="menu__link">
                        <i className="menu__icon fa-solid fa-briefcase"></i> 
                        <span class="menu__overlay">Portafolios</span>
                        </Link>
                    </li>
                   
                  
                    </ul>
                </nav>
                {/* <!-- links redes sociales --> */}
                 <div className="user-info__links">
                    <ul className="links__social">

                        <li className="social__options">
                            <a href="https://github.com/OCHANDO97"  target="_blank" className="social__link" >
                                <i className="social__icon fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className="social__options">
                            <a href="https://www.linkedin.com/in/juan-arturo-ochando-arrevilla-0222ab205/" 
                                target="_blank"
                                className="social__link">
                                <i className="social__icon fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        
                        <li className="social__options">
                            <a href="https://www.instagram.com/juanochando97/?igsh=bXlnM3RuZjV5cnB0#" className="social__link" >
                                <i className="social__icon fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>

                 </div>

                {/* <!-- boton del curriculum --> */}
                 <div className="user-info__buttons">
                    <a href="./cv_doc_JuanOchandoA.pdf" download className="user-info__btn">Descargar CV</a>
                 </div>

                {/* <!-- pie de pagina --> */}
                {/* <footer className="user-info__footer">
                    &copy; 2024 Victor Robles
                </footer> */}
            </section>
        </aside>
      
    </>
  )
}

export default Sidebar
