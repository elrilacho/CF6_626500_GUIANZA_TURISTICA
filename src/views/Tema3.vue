<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Guía Técnica Colombiana GTC de identificación de riesgos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La adopción de las normas internacionales consiste en la implementación de modelos estandarizados de gestión que permitan la trazabilidad, y a su vez contribuyen con la mejora continua principalmente en los aspectos relacionados con el riesgo para la salud en diferentes escenarios.
    .cajon.color-secundario.p-5.mb-4(style='background-color: #b7ceac')
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/2.svg', alt='')
        .col-lg-11
          p.mb-0 El Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC, conformado desde 1993 por la Ley de la República y ahora ente privado que tiene como propósito dar soporte y desarrollo a la investigación y normalización en Colombia, por lo que certifica la calidad de los procesos en el país en diferentes áreas y sectores económicos, lo que le ha permitido a la industria ser más competitiva a nivel internacional. 
    .bg-1.margin-n.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-7
          p Para el turismo la aplicación de certificaciones internacionales representa un reto y un paso en su proceso de crecimiento y apertura a mercados internacionales, dado el soporte y la fiabilidad que brindan estos sellos, por el compromiso de velar por la salud de los turistas, visitantes o viajeros y todos los actores involucrados en la actividad turística.
            br
            br
            |La Guía Técnica Colombiana (GTC 45) es un lineamiento normativo que presenta las orientaciones requeridas para establecer el proceso de identificación, manejo y valoración de peligros y riesgos de manera general derivados de una actividad laboral. Con la intención de realizar la identificación del riesgo la norma sugiere tener en cuenta los siguientes aspectos:
          ul.lista-ul--color
            li
              i.vineta
              | Consultar estadísticas de incidentes ocurridos e información del sector, gremios u organismos de referencia en el tema de turismo. 
            li
              i.vineta
              | Analizar las actividades rutinarias y no rutinarias que surjan en el desarrollo de las actividades de la organización del turismo.
            li
              i.vineta
              | Valorar los riesgos de las actividades para la toma de decisiones sobre las acciones que se deberían implementar, (medidas de control de los riesgos) en el turismo.
        .col-lg-5: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
    p.mb-5(data-aos='fade-right') A continuación algunos aspectos que  sugiere atender la Guía Técnica Colombiana  GTC 45 para minimizar el riesgo o convertirlo en un riesgo aceptable se encuentran en el siguiente listado:
    .row.justify-content-center.mb-5
      .col-lg-5
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta
            span 1
          | Usar instrumentos para la recolección de la información.
          li
          .lista-ol--cuadro__vineta
            span 2
          | Clasificar los procesos, las actividades y las tareas.
          li
          .lista-ol--cuadro__vineta
            span 3
          | Identificar peligros.
          li
          .lista-ol--cuadro__vineta
            span 4
          | Saber de los controles.
          li
          .lista-ol--cuadro__vineta
            span 5
          | Evaluar el tipo de riesgo.
          li
          .lista-ol--cuadro__vineta
            span 6
          | Elaborar el plan de acción  para el control de los riesgos. 
          li
          .lista-ol--cuadro__vineta
            span 7
          | Revisar la validez del plan: mantener, actualizar, comunicar y documentar.
      .col-lg-3: img(src='@/assets/curso/temas/tema3/4.svg', alt='')
    p.mb-5(data-aos='fade-right') Todo el sector turismo debe establecer el seguimiento y obtención a las normas con el fin de hacer de esta actividad un sector de talla mundial. En los siguientes recursos se presenta información con respecto a la Guía Técnica Colombiana  GTC 45 y a la creación de la Ley de Acción Climática, esta última surge después del encuentro en Glasgow en noviembre de 2021, además se encuentran dos documentos que podrá encontrar en la biblioteca del SENA sobre el tema, para lo cual se solicita que se registre con su usuario y contraseña.
    .row.justify-content-center.mb-5
      .col-lg-6
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-3
              img(src="@/assets/curso/temas/tema1/35.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Guía Técnica Colombiana GTC 45
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc10.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
    p.mb-5(data-aos='fade-right').text-center Como parte de su aprendizaje autónomo se invita a revisar los dos documentos que a continuación se mencionan, donde podrá encontrar elementos clave sobre salud ocupacional que le servirán en su vida laboral.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-4
          //todo! Añadir documento ----------------------------------------------------------------------------------------------
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema1/40.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Palomino, A. y Sánchez, J. (2012). OHSAS. 18001:2007. Adaptado a 18002:2008: Sistemas de Gestión de la Seguridad y Salud en el trabajo.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000067913" target="_blank")
                      span Ver video
                      i.fas.fa-play
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Palomino, E. y Sánchez, J. OHSAS. 18001:2007. (2012). Adaptado a 18002:2008: Sistemas de Gestión de la Seguridad y Salud en el Trabajo. 3rd ed., Fundación Confemetal Print.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000067913" target="_blank")
                      span Ver video
                      i.fas.fa-play
    hr
    p #[sup 1] La norma menciona un plan de acción para efectos del guionaje turístico, es un plan de contingencia. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.img-infografica-b__modal
  background-color: #f6f6f6
  border-radius: 20px
  display: grid
  align-items: center
  p, h4
    color: black !important
.img-infografica-b__modal__btn-cerrar i
  color: black
</style>
