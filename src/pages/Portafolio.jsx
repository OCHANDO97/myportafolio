import React from 'react'
import listaCompraImg from '../assets/img/listaCompra.png';
import apiRestauranteImg from '../assets/img/apiRestaurante.png';
import scrapingImg from '../assets/img/scraping.png';
import blogImg from '../assets/img/blog.png';

const Portafolio = () => {
  return (
    <>
      <main class="layout__content">
            <section class="content__page content__portafolio">
                <header class="portafolio__header">
                    <h1 class="portafolio__title">Portafolio</h1>
                </header>

                <section class="portafolio__gallery">
                    <figure class="gallery__item">
                        <div class="gallery__container-image"> 
                            <a href="https://github.com/OCHANDO97/Shoping" class="gallery__link" target="_blank">
                                <img src={listaCompraImg} alt="" class="gallery__image" />
                            </a>
                        </div>
                        <figcaption class="gallery__title">Lista Compra</figcaption>
                        <i class="gallery__icon fa-solid fa-code"> </i>
                    </figure>

                    <figure class="gallery__item">
                        <div class="gallery__container-image"> 
                            <a href="https://github.com/OCHANDO97/apiRestaurante" class="gallery__link" target="_blank">
                                <img src={apiRestauranteImg} alt="" class="gallery__image" />
                            </a>
                        </div>
                        <figcaption class="gallery__title">Api Restaurante</figcaption>
                        <i class="gallery__icon fa-solid fa-code"> </i>
                    </figure>

                    <figure class="gallery__item">
                        <div class="gallery__container-image"> 
                            <a href="https://github.com/OCHANDO97/webScraping" class="gallery__link" target="_blank">
                                <img src={scrapingImg} alt="" class="gallery__image" />
                            </a>
                        </div>
                        <figcaption class="gallery__title">Escrapeo de datos de páginas web</figcaption>
                        <i class="gallery__icon fa-solid fa-code"> </i>
                    </figure>

                    <figure class="gallery__item">
                        <div class="gallery__container-image"> 
                            <a href="https://github.com/OCHANDO97/blogPHP" class="gallery__link"
                            target="_blank">
                                <img src={blogImg} alt="" class="gallery__image" />
                            </a>
                        </div>
                        <figcaption class="gallery__title">Blog</figcaption>
                        <i class="gallery__icon fa-solid fa-code"> </i>
                    </figure>

                    
                </section>

            </section>    
              
        </main>
      
    </>
  )
}

export default Portafolio
