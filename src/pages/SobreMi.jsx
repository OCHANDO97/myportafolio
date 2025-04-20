import React from 'react'

const SobreMi = () => {
  return (
    <>
    <main class="layout__content">
        <section class="content__page content__about">
            <header class="about__header">
                <h1 class="about__title">Sobre <span class="title__color">Mi</span></h1>
            </header>

            <section class="about__personal-info">
                <article class="personal-info__bio">
                    <p class="personal-info__description">
                    Desarrollador con +2 experiencia en el desarrollo de sistemas y aplicaciones web. Especializado en
                    automatización, web scraping y análisis de datos para optimizar procesos. Destacado en la resolución de
                    problemas, mejorar la eficiencia y trabajar en entornos ágiles. Orientado a superar desafíos técnicos y contribuir
                    al éxito de los proyectos.
                    </p>
                </article>

                <div class="personal-info__data">
                    <ul class="personal-info__list">
                        <li class="personal-info__option">
                            <span class="personal-info__title">Edad</span>
                            <span class="personal-info__value">27</span>
                        </li>
                        <li class="personal-info__option">
                            <span class="personal-info__title">Dirreción</span>
                            <span class="personal-info__value">Madrid</span>
                        </li>
                        <li class="personal-info__option">
                            <span class="personal-info__title">Correo</span>
                            <span class="personal-info__value">jochando1997@gmail.com</span>
                        </li>
                        <li class="personal-info__option">
                            <span class="personal-info__title">Teléfono</span>
                            <span class="personal-info__value">666672504</span>
                        </li>
                    </ul>
                </div>

            </section>

        </section>

    </main>
  </>
  )
}

export default SobreMi
