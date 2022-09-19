<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') 
      span.r-3 El sector turístico colombiano  
      | requiere profesionales con competencias específicas en la gestión y administración de eventos turísticos, con el fin de alcanzar los objetivos del Plan Nacional de Desarrollo  2018-2022. 
      br
      br
      | A partir de esto, se hizo necesario diseñar programas que formarán a dichos profesionales, por lo que el SENA virtual construyó este curso que se denomina “Guianza turística”, del cual hace parte el componente Atención de incidentes en el servicio guiado, con este propósito se anima a ver el siguiente recurso de aprendizaje.
    figure(data-aos='zoom-in')
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ng6c11GlNsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
