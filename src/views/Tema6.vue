<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Riesgos laborales del guía
    SlyderF.slyder-100.mb-5.text-center(columnas="col-lg-4 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema6/1.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p Sol y playa.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p Cultural (arquitectura y patrimonio, festividades y eventos, urbano, gastronómico, culinario, religioso y arqueológico).
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema6/3.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p Bienestar y salud.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema6/4.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p MICE.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema6/5.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p Náutico.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema6/6.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p Naturaleza (ecoturismo, aventura, rural).
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/7.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.my-5 Los riesgos laborales se clasifican por el nivel de exposición y los factores que lo generan. No son los mismos riesgos a los que se ve enfrentado un guía de turismo si está desarrollando una labor de naturaleza o si está trabajando al interior de un museo.
    p.mb-5(data-aos='fade-right') Desde las condiciones ambientales hasta los factores de bioseguridad son totalmente diferentes, hoy estos riesgos laborales se clasifican en 7 grandes grupos, los cuales se muestran en la siguiente lista:
    .bg-1.margin-n.p-5.mb-5
      .row.justify-content-center
        .col-lg-6
          ul.lista-ul--color
            li
              i.vineta
              | Físicos: son los que afectan al individuo a largo plazo como son el ruido o la temperatura.
            li
              i.vineta
              | Químicos: estos pueden causar enfermedades como simples alergias o hasta la muerte, como el cáncer de pulmón.
            li
              i.vineta
              | Biológicos: son aquellos causados por virus o bacterias como el caso del coronavirus.
            li
              i.vineta
              | Ergonómicos: son el resultado a la baja o poca adaptación al lugar de trabajo, este se da cuando la persona tiene una mala postura.
            li
              i.vineta
              | Psicosociales: estos corresponden a situaciones que generan estrés en el lugar de trabajo, por esta razón se han desarrollado alternativas de solución como comités de convivencia.
            li
              i.vineta
              | Mecánicos: son producidos por algún tipo de herramienta de trabajo cuando es usada de forma inadecuada o sin protección.
            li
              i.vineta
              | Ambientales: estos son llamados naturales porque el ser humano no los puede controlar, como la lluvia.
        .col-lg-6: img(src='@/assets/curso/temas/tema6/8.svg', alt='')
    p.mb-5(data-aos='fade-right') En conclusión, el Sistema de Seguridad y Salud en el Trabajo (SG-SST), las unidades de riesgos, los sistemas públicos y privados se integran para abarcar el proceso global y lógico de vigilancia y mejora continua que garantiza a los trabajadores colombianos y ciudadanos acciones contundentes para el manejo de la seguridad como factor de alto interés, en los dos documentos que a continuación se muestran se pueden encontrar más detalles:
    .row.justify-content-center.mb-5
      .col-lg-6
        .tarjeta.color-primario.p-4
          //todo! Añadir documento ----------------------------------------------------------------------------------------------
          .row.justify-content-around.align-items-center
            .col-5.col-sm-2.col-lg-2
                img(src="@/assets/curso/temas/tema1/35.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Guía Técnica Colombiana GTC 45.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://saludocupacionalunad.files.wordpress.com/2012/07/gtc-45-2010.pdf" target="_blank")
                      span Descargar
                      i.fas.fa-file
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Decreto 1072 de 2015 capítulos 5 y 6.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://www.icbf.gov.co/cargues/avance/docs/decreto_1072_2015.htm" target="_blank")
                      span Descargar
                      i.fas.fa-file



























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
.bloque-texto-g__img
  left: auto
  right: 0
.bloque-texto-g
  justify-content: flex-start
</style>
