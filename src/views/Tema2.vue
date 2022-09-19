<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sostenibilidad

</template>

<script>
export default {
  name: 'Tema2',
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

.bg-montana
  background-image: url(../assets/curso/temas/tema2/bg-montana.svg)
  background-repeat: no-repeat
  background-position: end
  background-size: 100% 90%
.editado
  .slyder-a__bullets
    bottom: -24px
  .slyder-a__btn--sigt
    right: -24px
  .slyder-a__btn--atrs
    left: -24px
</style>
