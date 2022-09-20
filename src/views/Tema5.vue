<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan estratégico de seguridad turística
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.my-5 Es el resultado de la propuesta del Viceministerio de Turismo para el sector debido a la importancia de la seguridad como parte de la competitividad del turismo. Se desarrolla en integración con varios actores como la Policía de Turismo, entidad experta en el tema.
    .cajon.color-secundario.p-5.mb-4(style='background-color: #b7ceac')
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/2.svg', alt='')
        .col-lg-11
          p.mb-0 La actividad turística está en reactivación por lo que la calidad se mide con factores como la paz y la seguridad, entre otros, por lo que se sugiere una coordinación de acciones de cooperación interinstitucional.
    p.mb-5(data-aos='fade-right').text-center El plan de seguridad contiene las siguientes estrategias para prestadores de servicios, espacios y territorios, para ello revise el siguiente recurso de aprendizaje:
    SlyderF.slyder-100.mb-5.text-center(columnas="col-lg-4 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/3.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De control y prevención de los prestadores de servicios turísticos.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/4.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De vigilancia de los atractivos y las actividades turísticas.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De fortalecimiento de la información y de la orientación al turista en las regiones turísticas.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/6.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De fortalecimiento de la Policía de Turismo.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/7.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De consolidación de los Comités Departamentales de Seguridad Turística.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/8.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De seguridad en las carreteras - rutas turísticas seguras.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/9.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De promoción y divulgación.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema5/10.svg' alt='AvatarTop')
        .tarjeta.w-100.h-100(style='background-color: #ffd667')
          .p-4
            p De asistencia técnica a nivel internacional.
    //todo! Añadir documento ----------------------------------------------------------------------------------------------
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/40.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Para aprender más sobre el tema se sugiere leer el documento: plan estratégico de seguridad turística, en el cual podrá conocer las pautas o políticas nacionales.
            .col-sm-auto
              .d-block.mb-4
                a.boton.color-acento-botones.texto-blanco(href="https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/seguridad-turistica#:~:text=El%20Plan%20Estrat%C3%A9gico%20de%20Seguridad,para%20la%20gesti%C3%B3n%20de%20los" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-file-download
    p.mb-5(data-aos='fade-right') Por otro lado, también es indispensable favorecer espacios de calidad laboral para todo el personal que tiene que ver directa o indirectamente en la prestación de un servicio turístico en Colombia, por lo que a continuación se hará mención al tema.

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
