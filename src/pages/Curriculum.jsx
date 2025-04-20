
import React from 'react'

const Curriculum = () => {
  return (
    <>
      <main class="layout__content">
            <section class="content__page content__resume">
                
                <header class="resume__header">
                    <h1 class="resume__title">Curriculum</h1>
                </header>

                <div class="">

                    <section class="">

                        <header class="resume__subheader">
                            <h2 class="resume__subtitle">Formación</h2>
                        </header>

                        <div class="resume__timelines">

                            <article class="timelines__timeline">
                                <header class="timeline__header">
                                    <h4 class="timeline__year">2020-2022</h4>
                                    <span class="timeline__company"></span>
                                </header>

                                <div class="timeline__divider"></div>

                                <div class="timeline__description">
                                    <h3 class="timeline__title">Grado Superior de Aplicaciones Multiplataforma</h3>
                                </div>
                            </article>


                        </div>

                        <header class="resume__subheader">
                            <h2 class="resume__subtitle">Experiencia</h2>
                        </header>

                        <div class="resume__timelines">

                            <article class="timelines__timeline">
                                <header class="timeline__header">
                                    <h4 class="timeline__year">2023 - 2025</h4>
                                    <span class="timeline__company">Sermicro</span>
                                </header>

                                <div class="timeline__divider"></div>

                                <div class="timeline__description">
                                    <h3 class="timeline__title">Desarrollador de Software</h3>
                                    <p class="timeline__text">
                                    Desarrollé un servicio backend en Laravel integrado con GLPI, 
                                    optimizando la gestión de tickets e inventario. Implementé APIs y 
                                    funcionalidades personalizadas con PHP y Eloquent, automatizando procesos internos y 
                                    mejorando el análisis de datos mediante consultas SQL y generación de informes en Excel. 
                                    </p>
                                    <p>También lideré la migración de GLPI, garantizando la integridad del sistema con Docker 
                                    y control de versiones.</p>
                                </div>
                            </article>

                            <article class="timelines__timeline">
                                <header class="timeline__header">
                                    <h4 class="timeline__year">2022 - 2023</h4>
                                    <span class="timeline__company">Xiel Deco Hogar</span>
                                </header>

                                <div class="timeline__divider"></div>

                                <div class="timeline__description">
                                    <h3 class="timeline__title">Desarrollador de Software</h3>
                                    <p class="timeline__text">
                                    Implementé técnicas de web scraping con Python y Pandas para automatizar 
                                    la recolección de datos desde páginas web de proveedores. 
                                    </p>
                                    <p>Desarrollé APIs robustas en Laravel, optimizando la comunicación entre frontend y backend. 
                                    </p>
                                    <p>Realicé análisis de datos con Python y Excel, y gestioné catálogos de productos en PrestaShop. 
                                    Además, automatizé tareas repetitivas con Playwright, mejorando la eficiencia operativa.</p>
                                </div>
                            </article>

                            <article class="timelines__timeline">
                                <header class="timeline__header">
                                    <h4 class="timeline__year">2022 - 2022</h4>
                                    <span class="timeline__company">STV Canarias</span>
                                </header>

                                <div class="timeline__divider"></div>

                                <div class="timeline__description">
                                    <h3 class="timeline__title">Desarrollador de Software - (Prácticas)</h3>
                                    <p class="timeline__text">
                                    Desarrollo de página web para la empresa, empleando PHP Laravel para el backend, 
                                    incluida la creación e integración de la página con HTML, CSS y JavaScript.
                                    Me responsabilicé de la creación, integración y gestión de la base de datos.
                                    </p>
                                    <p> Desarrollé funcionalidades de API REST con PHP Laravel, esta implementación garantizó 
                                    una interacción fluida y segura con otros sistemas, facilitando la integración 
                                    y el intercambio de datos de manera eficiente.</p>
                                </div>
                            </article>

                        </div>



                    </section>

                </div>
                        
                <div class="resume__knowledges">
                    <header class="resume__subheader">
                        <h2 class="resume__subtitle">Areas de conocimientos</h2>
                    </header>

                        <ul class="knowledges__list">
                            <li class="knowledges__option">PHP</li>
                            <li class="knowledges__option">Laravel</li>
                            <li class="knowledges__option">HTML</li>
                            <li class="knowledges__option">CSS</li>
                            <li class="knowledges__option">JavaScript</li>
                            <li class="knowledges__option">React</li>
                            <li class="knowledges__option">Docker</li>
                            <li class="knowledges__option">SQL</li>
                            <li class="knowledges__option">Node js</li>


                        </ul>
                </div>

                <div class="">
                    <header class="resume__subheader">
                        <h2 class="resume__subtitle">Certificados</h2>
                    </header>
                    <section class="certificates__container">

                        <article class="certificates__certificate">
                           
                            <div class="certificate__content">
                                <h4 class="certificate__title">Aprende PHP desde cero, bases de datos, SQL, MySQL, POO, MVC, Laravel 12, Symfony 7, WordPress</h4>
                                <span class="certificate__id">Udemy | 57 HORAS (2024)</span>
                            </div>
                        </article>

                        <article class="certificates__certificate">
                        
                            <div class="certificate__content">
                                <h4 class="certificate__title">PROGRAMACIÓN WEB CON SOFTWARE LIBRE</h4>
                                <span class="certificate__id">AC3 Evaluación formativa | 150 HORAS (2024)</span>
                            </div>
                        </article>
                    </section>
                </div>

            </section>    
              
        </main>
    </>
  )
}

export default Curriculum
