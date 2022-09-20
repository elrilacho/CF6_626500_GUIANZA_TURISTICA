<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión y administración del riesgo en Colombia
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de riesgos hace referencia a los principios y a la metodología que permite manejar la incertidumbre derivada de una amenaza, identificando, analizando y evaluando un riesgo, para finalmente establecer las estrategias para el tratamiento eficaz de los riesgos, disminuyéndolos o controlándolos.
    //todo! Añadir documento ----------------------------------------------------------------------------------------------
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/40.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small En esta página web tendrá acceso a la Estructura Nacional del Sistema de Gestión del Riesgo de Desastres donde podrá conocer grosso modo cómo se creó y cuáles son las entidades que lo componen.
                br
                br
                |Sistema de Gestión del Riesgo de Desastres.
            .col-sm-auto
              .d-block.mb-4
                a.boton.color-acento-botones.texto-blanco(href="http://portal.gestiondelriesgo.gov.co/Paginas/Estructura.aspx" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-file-download
    p.mb-5(data-aos='fade-right') Colombia ha venido trabajando en el proceso de gestión del riesgo por lo que se ha beneficiado como país al realizar dicha actividad de diferentes formas, en especial cuando ha protegido la vida y los bienes de todos aquellos que viven en esta tierra, en el siguiente recurso de aprendizaje puede conocer cómo una organización se puede beneficiar:
    SlyderF.slyder-100.mb-5(columnas="col-lg-4 col-xl-4")
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/2.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Inteligencia de negocios
            p.text-center Es un apoyo a la toma de decisiones en la organización.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/3.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Operación
            p.text-center Garantiza la operación normal de la actividad.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/4.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Reduce impacto
            p.text-center Minimiza la probabilidad e impacto de un riesgo.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/5.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Planeación
            p.text-center Mejora la calidad general de la actividad en la planeación.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/6.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Cultura de control
            p.text-center Fortalece la cultura de control de la actividad en una organización.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/7.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Trabajo por objetivos
            p.text-center Asegura la capacidad de logro del objetivo propuesto en una organización.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/8.jpg' alt='AvatarTop' style='border-radius: 20px')
            h6.text-center Innovación
            p.text-center Se crean herramientas y controles orientados a la administración del riesgo.
    .row.justify-content-center.mb-5
      .col-lg-10
        p Como es sabido la administración del riesgo hace referencia a la aplicación y manejo de las herramientas y elementos de control que permiten manejar adecuadamente los riesgos y así poder lograr los objetivos propuestos, para dar claridad a la idea puede revisar la siguiente figura donde encontrará información sobre la metodología para la administración del riesgo.
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span #[i Metodología para la administración del riesgo]
        img.mb-4(src='@/assets/curso/temas/tema2/9.svg', alt='')
        figcaption.text-center Nota. Tomado de la Unidad Nacional para la Gestión del Riesgo de Desastres (2018).
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Entidades responsables y su alcance
    p.mb-5(data-aos='fade-right') En este proceso de formación de competencias para la guianza turística se hace necesario que conozca cuáles son las entidades a nivel nacional que brindan pautas para prevenir los riesgos y el control de desastres en Colombia, estas surgieron después del desastre natural que sucedió el 13 de noviembre de 1985 en Armero.
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Sistema Nacional de Gestión del Riesgo de Desastres
    p.mb-5(data-aos='fade-right') Esta entidad del Estado establece mediante la Ley 1523 del 24 de abril de 2012 a nivel nacional y reúne entidades estatales, privadas y de otros para gestionar todo lo referente al riesgo en el país.
      br
      br
      |Esta cuenta con un objetivo general y varios específicos que deben ser tenidos en cuenta para poder hacer planes de prevención y mitigación de desastres, los cuales pueden ser revisados en el siguiente recurso de aprendizaje:
    .row.justify-content-center.mb-5
      .col-lg-9
        TabsA.color-acento-contenido.mb-5
          .tarjeta.p-5(titulo="Objetivos generales" style='background-color: #ccd3ca')
            h6 Objetivos generales
            p “Llevar a cabo el #[b proceso social] de la gestión del riesgo con el propósito de ofrecer #[b protección] a la población en el territorio colombiano, mejorar la seguridad, el bienestar y la calidad de vida y contribuir al desarrollo sostenible”.
          .tarjeta.p-5(titulo="Objetivos Específicos" style='background-color: #ccd3ca')
            h6 Objetivos Específicos
            ul.lista-ul--color
              li
                i.vineta 
                p #[b Desarrollar, mantener y garantizar el proceso de conocimiento del riesgo:] Conocer los riesgos y cómo pueden impactar en la industria del turismo, para el caso de Bogotá.
              li
                i.vineta 
                p #[b Desarrollar y mantener el proceso de reducción del riesgo:] Diseñar un plan de acción desde la Alcaldía de Bogotá para gestionar y reducir el riesgo.
              li
                i.vineta 
                p #[b Desarrollar, mantener y garantizar el proceso de manejo de desastres:] En el caso del paro nacional, tomado como ejemplo, se debía garantizar el manejo de desastres, por lo que se hizo necesario realizar reuniones para llegar a escuchar a las partes interesadas.
      .col-lg-3: img(src='@/assets/curso/temas/tema2/10.svg', alt='')
    p.mb-5(data-aos='fade-right') También se requiere conocer la estructura del Sistema Nacional para la Gestión del Riesgo, la cual puede revisar en la siguiente figura. Observe que esta tiene una cobertura nacional y que se van distribuyendo o delegando funciones a nivel departamental, local y aún más significativo es encontrar dicho sistema en las veredas alrededor de todo el país, por lo que el objetivo es concientizar a la población y estar presentes en el momento que Colombia lo requiera.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2.
          span #[i Sistema Nacional para la Gestión del Riesgo ]
        .row.justify-content-center.mb-5
          .col-lg-8
            img(src='@/assets/curso/temas/tema2/11.svg', alt='')
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Como parte de su aprendizaje autónomo se invita a revisar la Ley 1523 del 24 de abril de 2012 en la cual se describe la Política Nacional de Gestión del Riesgo.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-file-download
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Unidad Nacional para la Gestión del Riesgo de Desastres
    p.mb-5(data-aos='fade-right') Esta entidad cumple una función específica en temas de pautas o políticas que deben ser tenidas en cuenta cuando se presentan riesgos o desastres en cualquier parte del país, partiendo de esto, se invita a revisar el video “Trágica avalancha en Colombia” de la agencia de noticias alemana DW, que se encuentra ubicado en la sección del material complementario y que muestra un reportaje sobre el desastre natural que sucedió en Mocoa con las inundaciones ocasionadas por tres ríos.
    .bg-1.margin-n.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6
          p Teniendo en mente el caso en esa localidad puede ver la importancia del trabajo de las entidades del Estado, ya que ellos cuidan la vida de los colombianos y extranjeros residentes en el territorio nacional, en la siguiente lista podrá conocer los propósitos de esta entidad.
          ul.lista-ul--color
            li
              i.vineta
              | Orientar la implementación de la gestión del riesgo de desastres.
            li
              i.vineta
              | Atender las políticas de desarrollo sostenible.
            li
              i.vineta
              | Liderar la coordinación del funcionamiento y el desarrollo del sistema nacional para la prevención y atención de desastres – SNPAD. 
        .col-lg-4: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
    p.mb-5(data-aos='fade-right').text-center  En adición es importante que conozca cuáles son sus funciones que se resumen en el siguiente recurso de aprendizaje.
    SlyderF.slyder-100.mb-5(columnas="col-lg-4 col-xl-4")
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/13.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center 1.  Hacer seguimiento y mejora en los niveles nacional y territorial en la atención de desastres.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/14.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center 2. Fortalecer capacidades para el conocimiento del riesgo y el manejo de los desastres articulando los ámbitos nacional y territorial del sistema.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/15.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center 3. Proponer y articular las políticas, planes y proyectos nacionales de gestión del riesgo de desastres.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/16.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center 4. Articularse con otros sistemas administrativos.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/17.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center 6. Formular y coordinar la ejecución de un plan nacional para la gestión del riesgo de desastres.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/18.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center 7. Orientar y apoyar a las entidades nacionales y territoriales en su fortalecimiento institucional para la gestión del riesgo de desastres y asesorarlos.
    p.mb-5(data-aos='fade-right') Ahora bien, es también indispensable conocer otros elementos clave en los procesos de la gestión del riesgo que son de suma importancia, ya que impactan grandemente varios subprocesos, en la siguiente figura puede conocer detalladamente su interrelación.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span #[i  Procesos de la gestión del riesgo ]
        img(src='@/assets/curso/temas/tema2/19.svg', alt='')
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Subsistema Nacional de Voluntarios en Primera Respuesta
    p.mb-5(data-aos='fade-right') Es el grupo institucional que lleva a cabo acciones voluntarias como primer respondiente para atender y prevenir los desastres, emergencias y eventos antrópicos, es decir, los causados por las manos del ser humano. Entre las entidades que integran el Subsistema Nacional de Voluntarios en Primera Respuesta se pueden encontrar los que se mencionan en el siguiente recurso de aprendizaje:
    SlyderF.slyder-100.mb-5(columnas="col-lg-4 col-xl-4")
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/20.jpg' alt='AvatarTop' style='border-radius: 20px')
        h4.text-center La Defensa Civil colombiana
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/21.jpg' alt='AvatarTop' style='border-radius: 20px')
        h4.text-center La Cruz Roja colombiana
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/22.jpg' alt='AvatarTop' style='border-radius: 20px')
        h4.text-center Cuerpos de Bomberos
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema2/23.jpg' alt='AvatarTop' style='border-radius: 20px')
        h4.text-center Entidades autorizadas por el Comité Nacional para la Prevención y Atención de Desastres.
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Instituto Distrital de Gestión de Riesgos y Cambio Climático
    .bg-1.margin-n.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6 
          p.mb-5(data-aos='fade-right') Esta entidad del Estado colombiano busca fortalecer el Sistema Distrital de Gestión del Riesgo en la ciudad de Bogotá, por lo que los objetivos primarios son los que se enlistan:
          ul.lista-ul--color
            li
              i.vineta 
              | Propiciar y gestionar acciones y lineamientos para la gestión del riesgo de desastres. 
            li
              i.vineta 
              | Ayudar en la adaptación al cambio climático.

            li
              i.vineta 
              | Coordinación de sistemas de riesgos. 
            li
              i.vineta 
              | Protección a las personas en situación de riesgo.
            li
              i.vineta 
              | Lograr el desarrollo sostenible de Bogotá.
        .col-lg-4: img(src='@/assets/curso/temas/tema2/24.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Como parte de su aprendizaje autónomo se invita a ver el siguiente video sobre el Plan Nacional de Prevención de Desastres y cómo se aplica en todas las regiones con la ayuda de diferentes tipos de personas interesadas en concientizar a los ciudadanos colombianos y extranjeros que habitan el territorio.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="youtube.com/watch?v=Oeg1rftVTAA&ab_channel=UNGRDGestióndelRiesgodeDesastres" target="_blank")
                      span Ver video
                      i.fas.fa-play
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Caracterización de los fenómenos naturales
    .bg-1.margin-n.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6 
          p.mb-5(data-aos='fade-right') Se exponen los conceptos fundamentales para saber qué tipo de riesgos se pueden presentar de forma natural, estos son eventos de cambio que ocurren en la naturaleza, en los cuales la intervención humana es poco significativa, a continuación se enlistan los tres más importantes, ya que se definen por la frecuencia en su ocurrencia en un periodo de tiempo.
          ul.lista-ul--color
            li
              i.vineta 
              | Cotidianos o recurrentes, como por ejemplo la lluvia normal en una zona o territorio.
            li
              i.vineta 
              | Fortuitos, en este implica un caso en el que la naturaleza actúa de forma impredecible.
            li
              i.vineta 
              | Catastróficos, en este último caso se habla de que ocurren con menor frecuencia pero se pierde mayor cantidad de vidas y bienes.
        .col-lg-4: img(src='@/assets/curso/temas/tema2/26.svg', alt='')
    .titulo-icono.d-flex 
      i.reloj.me-3
      .titulo-icono-titulo
        h3.mb-0 Clasificación de los fenómenos naturales
    p.mb-5(data-aos='fade-right') Un guía turístico debe estar preparado para identificar cuáles pueden ser los posibles riesgos surgidos de fenómenos naturales en la región donde trabaja, por lo que a continuación se mencionan:
      br
      br
      | Existen diversidad de fenómenos naturales que pueden impactar directa o indirectamente un evento turístico.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeon-inactivo")
      .row(titulo="Astronómicos")
        .col-md-7.mb-4.mb-md-0
          p Hace referencia a eventos o colisiones que pueden suceder entre elementos ubicados en el espacio y que en un momento dado pueden ocasionar un choque o cambio directo o indirecto en la Tierra, por ejemplo, un eclipse.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/27.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
            figcaption Eclipse total de sol
      .row(titulo="Atmosféricos")
        .col-md-7.mb-4.mb-md-0
          p Son aquellos que ocurren en la atmósfera, que son causados por el movimiento de los vientos,  las nubes, las precipitaciones, los fenómenos eléctricos, un ejemplo es el huracán, que se origina por el movimiento de viento frío hacia zonas de aire más caliente.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/28.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
            figcaption Huracán
      .row(titulo="Hidrológicos")
        .col-md-7.mb-4.mb-md-0
          p Estos suceden cuando hay desvío, acumulación del agua hacia otras zonas, debido a grandes cantidades de lluvia que ha caído de manera inicial en una zona, lo que produce deslizamientos de tierra o inundaciones de zonas residenciales ocasionando daños y pérdida de vidas y bienes.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/29.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
            figcaption Inundaciones
      .row(titulo="Geológicos ")
        .col-md-7.mb-4.mb-md-0
          p Estos son causados por movimientos de Tierra, debido a la acomodación de las fallas geológicas en diferentes zonas alrededor del globo terráqueo, por lo que suceden terremotos o erupciones volcánicas, etc. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/30.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
            figcaption Volcán en erupción
      .row(titulo="Biológicos")
        .col-md-7.mb-4.mb-md-0
          p Corresponde a todo aquel fenómeno natural ocasionado por un virus, un parásito o una bacteria, que por ser tan pequeña no es posible detectar a simple vista, por lo que la hace muy fácil de ser transmisible, lo que hace que produzca enfermedades de difícil control local, regional o nacional e inclusive volverse una pandemia, como el caso del coronavirus o COVID-19, de la gripe aviar, del Ebola o del VIH.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/31.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
            figcaption Coronavirus
    p.mb-5(data-aos='fade-right') Para aprender más sobre los fenómenos naturales puede revisar los siguientes recursos de aprendizaje que le permitirán conocer cómo algunos han afectado a Colombia.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-primario.p-4
          //todo! Añadir documento ----------------------------------------------------------------------------------------------
          .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema1/35.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-small Gestión del Riesgo Natural en el caso de Colombia.
                  .col-sm-auto
                    .d-block.mb-4
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc4.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file
          .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema2/25.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-small Colombia está en una zona geológica vulnerable ante un sismo. Entrevista a Cristian Dimaté, geofísica.
                  .col-sm-auto
                    .d-block.mb-4
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=ncJywNddqBE&ab_channel=EnlasMa%C3%B1anasconUno" target="_blank")
                        span Ver video
                        i.fas.fa-play
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Legislación y normativa
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/33.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de un sistema de gestión de riesgos contempla requisitos legales que los prestadores de servicios turísticos deben cumplir en las diferentes actividades, con el fin de proteger a los trabajadores, los turistas y el personal involucrado en el saber actuar del control del peligro en cualquier contexto.
    p.mb-5(data-aos='fade-right') Las Normas ISO (International Organization for Standardization) y OHSAS (Sistema de Gestión de la Salud y Seguridad Ocupacional) forman parte de sistemas de gestión internacional que tienen por objetivo optimizar actividades y procesos empresariales, no son leyes que una empresa deba cumplir dentro de un marco legal sino herramientas que ayudan a dar cumplimiento y mejorar con calidad lo mandado por las leyes laborales o que reglamentan alguna actividad de salud y seguridad.  Las empresas deben certificarse en este tipo de normas para funcionar lealmente.
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Norma ISO (Organización Internacional de Normalización)
    p.mb-5(data-aos='fade-right') Por sus iniciales en inglés las ISO, cuyo significado en español es Organización Internacional de Normalización, operan y presentan las normas a través de los comités técnicos de ISO. 
      br
      br
      |Para el caso específico de Colombia el Estado ha venido diseñando normas que dan las pautas para ofrecer servicios de alta calidad para el desarrollo del sector turístico del país, con el fin de darle visibilidad internacional y recibir divisas por esos ingresos, por ello se invita a revisar el siguiente enlace donde encontrará las normas técnicas del sector.
    .row.justify-content-center.mb-5
      .col-lg-10
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Ministerio de Comercio, Industria y Turismo de Colombia, normas técnicas del sector.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-file-download
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Norma ISO 31000
    p.mb-5(data-aos='fade-right') Gestiona el riesgo al que se enfrenta cualquier organización pública o privada. La norma es adaptable a cualquier organización o actividad y a su contexto, por su enfoque común sirve para diferentes tipos de riesgo y no es específico de una industria o un sector.
      br
      br
      |Se usa en todas las organizaciones, inclusive para la toma de decisiones a todos los niveles.  ISO 31000 es el primer estándar internacional para la gestión del riesgo en el 2009 y fue actualizado en el 2018, también es la guía de referencia para otros sistemas de gestión. Todas estas normas se integran al sistema turístico como respuesta a la calidad y satisfacción del cliente.
    .row.justify-content-center.mb-5
      .col-lg-10
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Ministerio de Comercio, Industria y Turismo de Colombia, normas técnicas del sector.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-file-download
    p.mb-5(data-aos='fade-right').text-center Para investigar sobre el tema se invita a revisar los siguientes enlaces, lo que le permitirá fortalecer las competencias que hasta este momento se han  trabajado en este programa.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-4
          //todo! Añadir documento ----------------------------------------------------------------------------------------------
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema1/35.svg").mb-5
                img(src="@/assets/curso/temas/tema1/40.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 9001 de 2015 busca la implementación de estándares de gestión de calidad en todos los procesos de las organizaciones, con el fin de dar satisfacción a los clientes.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc5.pdf')" target="_blank")
                      span Ver video
                      i.fas.fa-play
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 45001.  Requisitos con orientación para la aplicación de seguridad y salud en el trabajo.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://www.fao.org/3/ad818s/ad818s08.htm" target="_blank")
                      span Ver video
                      i.fas.fa-play
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 31000:2018. Gestión del riesgo.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc6.pdf')" target="_blank")
                      span Ver video
                      i.fas.fa-play
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 14001. Requisitos necesarios para implementar un Sistema de Gestión Medioambiental.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc7.pdf')" target="_blank")
                      span Ver video
                      i.fas.fa-play
    p.mb-5(data-aos='fade-right').text-center A nivel de turismo las ISO representativas se encuentran descritas a continuación:
    .row.justify-content-center.mb-5
      .col-lg-7
        ul.lista-ul--color
          li
            i.vineta
            | ISO 14785 para las oficinas de Información Turística PIT, satisface las expectativas de los visitantes, las oficinas deben brindar una atención personalizada y contar con capacidad de resolución de incidencias, personal capacitado y diversas opciones lingüísticas para que la información sea accesible para todos.  
          li
            i.vineta
            | El turismo accesible ISO 21902 entrega una guía a todas las empresas que brindan servicios turísticos, promoviendo la integración entre todas las partes implicadas para mejorar la experiencia de turistas y comunidad, incluyendo a la población con discapacidad.  La norma también entrega disposiciones de accesibilidad para que los visitantes aprovechen al máximo su visita, a través de una lista de hoteles, actividades y medios de transporte accesibles y adaptados a sus necesidades.  
          li
            i.vineta
            | ISO 20611 es el estándar que proporciona requisitos y recomendaciones para las prácticas de sostenibilidad en las actividades de turismo de aventura, mitigando los impactos negativos en los ecosistemas frágiles, no solo promueve la conservación de los hábitat naturales, sino que impulsa el respeto por las comunidades que reciben al turista. 
      .col-lg-5
        img(src="@/assets/curso/temas/tema2/34.svg")
    p.mb-5(data-aos='fade-right').text-center Para revisar la temática lea las Normas ISO en los enlaces que acompañan el siguiente cuadro:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-4
          //todo! Añadir documento ----------------------------------------------------------------------------------------------
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema1/40.svg")
                img(src="@/assets/curso/temas/tema1/35.svg").mb-5
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 14785 oficinas de información turística
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://citur.gov.co/pages/1#gsc.tab=0" target="_blank")
                      span Ver video
                      i.fas.fa-play
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 21902 turismo accesible para todas las personas
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://www.unwto.org/es/news/publicada-la-primera-norma-internacional-sobre-turismo-accesible-para-todas-las-personas" target="_blank")
                      span Ver video
                      i.fas.fa-play
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 20611 y NTC sobre turismo de aventura  6523
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc8.pdf')" target="_blank")
                      span Ver video
                      i.fas.fa-play     
    p.mb-5(data-aos='fade-right') Para el caso específico de Colombia, el Estado ha venido diseñando normas para el sector turístico de alta calidad, con el fin de darle visibilidad internacional y recibir divisas por esos ingresos, revise el siguiente enlace donde encontrará las normas técnicas.     
    .row.justify-content-center.mb-5
      .col-lg-10
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Ministerio de Comercio, Industria y Turismo de Colombia, normas técnicas del sector.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-file-download
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 OHSAS
    p.mb-5(data-aos='fade-right') Es un sistema de gestión de la salud y seguridad ocupacional dentro de una organización; su función es la de asegurar la mejora de los estándares de seguridad y salud de los empleados y de las condiciones de los puestos de trabajo, fijando unos objetivos comunes encaminados al desarrollo y apoyo de buenas prácticas para la SST (seguridad y salud en el trabajo), reduciendo al máximo cualquier riesgo que implique un accidente o daño a la salud.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/35.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 OHSAS se postula como el modelo por excelencia para la identificación y evaluación de riesgos conforme a los requisitos legales suscritos por la propia organización para la prevención de daños y el deterioro de la salud.
          br
          br
          |Es aceptada a nivel internacional y actualmente es la norma más extendida y utilizada en materia de seguridad y salud laboral para regular el cumplimiento de los requerimientos legales de SST, evitando que las organizaciones hagan frente a las multas derivadas del incumplimiento de la legislación de seguridad y salud que les aplica.
    .row.justify-content-center.mb-2
      .col-lg-8
        p.mb-5(data-aos='fade-right') Las OHSAS en el turismo son importantes, tal es el caso de la 18001 que permite reducir accidentes ocurridos en el lugar de trabajo y garantizar la seguridad de los trabajadores, incrementar la rentabilidad, disminuir el tiempo de inactividad de sus empleados, cumplir las exigencias de la legislación, lo que conlleva a evitar posibles sanciones.  Aunque para el sector turismo no son obligatorias al obtenerse, brindan confianza a los clientes.
          br
          br
          |Una parte importante que se debe tener en cuenta al momento de gestionar o administrar un proyecto como guía turístico es tener presente que el recurso humano que está involucrado en todo el proceso cuente con normas de seguridad, por lo anterior, se invita a profundizar en el tema, haciendo clic en el siguiente enlace.
      .col-lg-2: img(src='@/assets/curso/temas/tema2/36.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-3
              img(src="@/assets/curso/temas/tema1/35.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small ISO 18001
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc9.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
    div(style='background-color: #ffe6a1').p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-1.col-3: img(src='@/assets/curso/temas/tema2/37.svg', alt='')
        .col-lg-11 
          h5 Entre los aspectos que trabaja la SST están:  
          ul.lista-ul
            li
              i.fas.fa-circle.fa-sm
              | Que las condiciones de trabajo sean justas para todos los trabajadores de la empresa y cada empleado desarrolle la actividad que le sea asignada con dignidad. 
            li
              i.fas.fa-circle.fa-sm
              | Los empleados pueden participar para implantar mejoras en las condiciones de SST de sus puestos de trabajo, ya que como es sabido en ocasiones este es fuente de daños a la salud y toda empresa debe atender la mejora del ambiente laboral.
    .row.justify-content-center.mb-5
      .col-lg-10
        //todo! Añadir documento ----------------------------------------------------------------------------------------------
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Se invita a conocer la plataforma de calidad turística del Estado colombiano, en la cual podrá identificar cuáles empresas del sector cumplen con todos los estándares de calidad nacional e internacional.
                .col-sm-auto
                  .d-block.mb-4
                    a.boton.color-acento-botones.texto-blanco(href="https://calidadturistica.gov.co/" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-file-download
    p.mb-5(data-aos='fade-right').text-center Para resumir el tema sobre normatividad en el sector turístico se invita a mirar el siguiente video.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)























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
.titulo-icono-titulo
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 1.5px
    background-color: $color-acento-contenido
</style>
