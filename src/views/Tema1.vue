<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caracterización de peligros en el servicio del guionaje
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Colombia es un país que busca fortalecer el sector turístico, con el fin de aumentar los ingresos mediante divisas extranjeras. Por ello, es importante reconocer algunos elementos clave para ofrecer un servicio de alta calidad al usuario, tanto nacional como extranjero. Se hace indispensable conceptualizar acerca de términos como peligro y riesgo.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Peligro
    p.mb-5(data-aos='fade-right') La Real Academia de la Lengua Castellana (2001) define el término peligro como se muestra en el siguiente recurso de aprendizaje: 
    div(style='background-color: #b7ceac').px-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.p-3
          .text-center
            h4.fw-normal Peligro 
              br
              | Definición de la palabra peligro
          .row.justify-content-center.align-items-center.mb-3
            .col-2: img(src='@/assets/curso/temas/tema1/2.svg', alt='')
            .col-lg-10
              p.mb-0 Lugar, paso, obstáculo o situación en que aumenta la inminencia del daño.
          .row.justify-content-center.align-items-center
            .col-2: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
            .col-lg-10
              p.mb-0 Riesgo o contingencia inminente de que suceda algún mal.
        .col-lg-2: img(src='@/assets/curso/temas/tema1/4.svg', alt='').mt-2
        .col-lg-6
          .row.justify-content-center.align-items-center
            .col-2: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
            .col-lg-10
              p.mb-0 Por esta razón, se hace necesario desarrollar el concepto vinculándolo directamente con el tema del programa, es decir, cómo afecta el peligro a los eventos turísticos en un momento dado y cuáles herramientas o estrategias se pueden usar para disminuir su aparición o evitar que sucedan y de esta manera, ofrecer un servicio de alta calidad para el usuario que visite cualquier parte del país.
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Definición e impacto de este elemento en el sector turístico colombiano
    p.mb-5(data-aos='fade-right') Para su definición se toman como referente tres fuentes que permiten tener una visión universal en cuanto al concepto, las cuales podrá encontrar en el siguiente recurso de aprendizaje:
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Peligro - OHSAS 18001:2007
            p Fuente, situación o acto que tiene potencial de producir un daño, en términos de daño humano o deterioro de la salud o una combinación de estos (OHSAS 18001:2007).
          .col-md-7
              img(src='@/assets/curso/temas/tema1/6.jpg', alt='' style='border-radius: 20px')
              figcaption Secuestro de turistas extranjeros
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Peligro - OIT- Organización Internacional del Trabajo
            p Situación inherente a una actividad con capacidad de causar lesiones o daños a la salud de las personas  (OIT - Organización Internacional del Trabajo).
          .col-md-7
              img(src='@/assets/curso/temas/tema1/7.jpg', alt='' style='border-radius: 20px')
              figcaption Sector turístico que no ofrece servicios de calidad
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Peligro - Ministerio del Trabajo
            p Un peligro es definido como una fuente, situación o acto con el potencial de generar daño a las personas o una afectación a los activos de la organización (Normativa Decreto 1072 de 2015 en su Capítulo 6 Articulo 2.2.4.6.2. Ministerio del Trabajo).
          .col-md-7
              img(src='@/assets/curso/temas/tema1/8.jpg', alt='' style='border-radius: 20px')
              figcaption Turistas se pierden en densa zona selvática colombiana
    p.mb-5(data-aos='fade-right') Como parte de su aprendizaje como guía turístico se hace necesario identificar cuáles son las causas asociadas a los posibles peligros que pueda encontrar en un evento turístico, que debe tener en cuenta al realizar su trabajo en zona, ahora vea el siguiente recurso de aprendizaje para conocerlas:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeon-inactivo")
      .row(titulo="Actos inseguros")
        .col-md-8.mb-4.mb-md-0
          h4 Actos inseguros
          p Hace referencia al comportamiento de las personas, el cual representa el 88% de las causas.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/9.jpg', alt='' style='border-radius: 20px')
            figcaption Deportes donde la seguridad personal se pone en riesgo
      .row(titulo="Condiciones peligrosas")
        .col-md-8.mb-4.mb-md-0
          h4 Condiciones peligrosas
          p Corresponde a las fallas en el diseño de proceso, equipos, máquinas y herramientas, por lo que representa el 10%.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/10.jpg', alt='' style='border-radius: 20px')
            figcaption Titanic, error humano y daño de maquinaría
      .row(titulo="Condiciones fuera de control")
        .col-md-8.mb-4.mb-md-0
          h4 Condiciones fuera de control
          p Estas no dependen del factor humano, ni de las condiciones en ninguna medida y representan solo el 2%.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/11.jpg', alt='' style='border-radius: 20px')
            figcaption Derrumbe en Pereira, 2022
    p.mb-5(data-aos='fade-right') Otros conceptos que están asociados a los comportamientos de las personas en los sitios de trabajo o en el desarrollo de una actividad se pueden identificar en el siguiente recurso de aprendizaje:
    SlyderF.slyder-100.mb-5(columnas="col-lg-4 col-xl-4")
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/12.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Incumplir o violar normas y procedimientos establecidos.
          br
          |Ejemplo: no contar con salvavidas.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/13.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center No usar los elementos de protección personal o usarlos de manera inadecuada.
          br
          |Ejemplo: no usar flotador para salvaguardar su vida.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/14.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center No usar los equipos de protección personal o usarlos de manera inadecuada.
          br
          |Ejemplo: no hacerle mantenimiento al equipo de buceo.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/15.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Desactivar dispositivos de uso seguro en equipo o herramientas.
          br
          |Ejemplo: no contar con elementos de comunicación necesarios para solicitar ayuda.
      .tarjeta(style='background-color: #ffd667').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/16.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center La desatención a señales de peligros identificados.
          br
          |Ejemplo: los eventos sucedidos con el crucero del Titanic en 1912.
    p.mb-5(data-aos='fade-right') Por otro lado, las condiciones peligrosas hacen referencia a los sitios de trabajo o a la estructura del proceso y no al comportamiento humano, lo cual puede conocer en el recurso de aprendizaje:
    SlyderF.slyder-100.mb-5(columnas="col-lg-4 col-xl-4")
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/17.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Transferencia de conocimientos y entrenamiento.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/18.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Capacitaciones en liderazgo y resolución de conflictos. 
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/19.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Supervisión de equipos, proceso y colaboradores.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/20.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Planificación de operación.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/21.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Ejecución de itinerarios, visitas, recorridos a campo abierto o lugares cerrados y actividades recreativas.
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/22.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Contratación, supervisión de terceros y sus actividades. 
      .tarjeta(style='background-color: #b7ceac').p-4.h-100
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/23.jpg' alt='AvatarTop' style='border-radius: 20px')
        p.text-center Procesos de comunicación.
    p.mb-5(data-aos='fade-right') Es de hacer notar que también existen condiciones fuera de control, las cuales representan solo el 2% de las causas generadoras de peligro no dependiendo del control directo de los interesados, por ejemplo, eventos naturales, acciones de terceros o robos, entre otros.
    .rounded-pill.d-inline-block.p-2(style='background-color: #b7ceac').mb-5
      h4.px-3.mb-0.me-5 Identificación del peligro
    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-5(data-aos='fade-right') El reconocimiento del riesgo es otro factor importante que se debe tener en cuenta, por lo que se revisa desde la metodología de identificación de factores, la cual consiste en caracterizar la identidad de aquellos que representan el peligro teniendo en cuenta los que se muestran a continuación:
        h5 Metodología para la identificación de peligro
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta
            span 1
          | Todos los procesos
          li
          .lista-ol--cuadro__vineta
            span 2
          | Actividades rutinarias y no rutinarias
          li
          .lista-ol--cuadro__vineta
            span 3
          | Actividades internas y externas
          li
          .lista-ol--cuadro__vineta
            span 4
          | Equipos y herramientas
          li
          .lista-ol--cuadro__vineta
            span 5
          | Instalaciones
            
      .col-lg-6: img(src='@/assets/curso/temas/tema1/24.jpg' alt='AvatarTop' style='border-radius: 20px')
    p.text-center En el siguiente recurso de aprendizaje encontrará la normatividad en Colombia para identificar el riesgo:
    .position-relative
      .row
        .col-lg-9
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img.mb-lg-0.mb-3
              img(src='@/assets/curso/temas/tema1/26.svg' alt='AvatarTop')
            .tarjeta(style='background-color: #ffe6a1').p-5
              .row.justify-content-end.align-items-center
                .col-lg-11
                  h3.mb-1 Guía Técnica Colombiana.
                  p.text-small Orienta la identificación de los peligros y da la metodología para la valoración de los riesgos de seguridad y salud en el trabajo.
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-file-download
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/27.svg' alt='AvatarTop')
            .tarjeta(style='background-color: #ffd667').p-5
              .row.justify-content-end.align-items-center
                .col-lg-11
                  p.text-small La evaluación interactiva de los riesgos en línea, desarrollada por la EU-OSHA y que evalúa las clases generales del riesgo.  
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-file-download
      .imagen-relative.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop' )
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Riesgo 
    p.mb-5(data-aos='fade-right') Es la probabilidad de que una amenaza se convierta en un desastre, por lo que una vulnerabilidad que se encuentra independiente a una amenaza no constituye un peligro en sí misma, estando en un mismo tiempo y momento juntas pueden convertirse en un peligro, por ejemplo, un terremoto.
    .tabla-a.tabla-editada.color-acento-botones.mb-5
      table
        thead
          tr
            th(colspan='2') Para aclarar el concepto trabajado en este numeral puede leer los siguientes documentos:
        tbody
          tr
            td ¿Qué es el riesgo?
            td
              a(href="https://www.unisdr.org/2004/campaign/booklet-spa/page9-spa.pdf" target="_blank") https://www.unisdr.org/2004/campaign/booklet-spa/page9-spa.pdf
          tr
            td Matriz de Gestión del Riesgo, este documento es de la FAO, en él se explica con un ejemplo los factores de riesgo que pueden incidir en una actividad como la pesca. 
            td
              a(href="https://www.fao.org/fishing-safety/risk-management/risk-management-tools/es/" target="_blank") https://www.fao.org/fishing-safety/risk-management/risk-management-tools/es/
    p.mb-5(data-aos='fade-right') Para tener en cuenta riesgo es:
    .tabla-a.tabla-editada.color-acento-botones.mb-5
      table
        thead
          tr
            th (NTC-OHSAS 18001).
            th (Directivas relativas a los SG-SST / OIT – Organización Internacional del Trabajo).
        tbody
          tr
            td La combinación de la probabilidad de que ocurra uno o más eventos o exposiciones peligrosas y la severidad de lesiones o enfermedad, que puede ser causada por los eventos o exposiciones se denomina riesgo.
            td Combinación de la probabilidad de que ocurra un suceso peligroso con la gravedad de las lesiones o daños para la salud que puede causar tal suceso.
    .cajon.color-secundario.p-5.mb-4(style='background-color: #b7ceac')
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/28.svg', alt='')
        .col-lg-11
          p.mb-0 Por normativa mundial los estándares ISO establecen lineamientos internacionales que permiten delimitar criterios sobre diferentes temas, para este caso se habla de la evaluación y valoración de los riesgos, cuyo objetivo fundamental es satisfacer las condiciones de seguridad y calidad del servicio que se ofrece a un usuario o turista, por lo que el Sistema de Gestión de Calidad permite identificar cada uno de los riesgos, evaluarlos, valorarlos y establecer medidas correctivas de mitigación, prevención o de control, con el fin de que estos disminuyan o no vuelvan a suceder.
    .tabla-a.tabla-editada.color-acento-botones.mb-5
      table
        thead
          tr
            th(colspan='2') Para conceptualizar el tema se invita a revisar los siguientes documentos
        tbody
          tr
            td NTC ISO 31000 Gestión del Riesgo. Principios y directrices
            td
              a(href="http://simudatsalud-risaralda.co/normatividad_inv9/normas_tecnicas/NTC-ISO31000_Gestion_del_riesgo.pdf" target="_blank") http://simudatsalud-risaralda.co/normatividad_inv9/normas_tecnicas/NTC-ISO31000_Gestion_del_riesgo.pdf
          tr
            td GTC 45. Guía Técnica Colombiana. Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional
            td
              a(href="https://repository.udistrital.edu.co/bitstream/handle/11349/6034/ParraCuestaDianaMarcelaVasquezVeraErikaVanessa2016-AnexoA.pdf;jsessionid=110BCED1505A09F6B81CCDE89F5CF23F?sequence=2" target="_blank") ParraCuestaDianaMarcelaVasquezVeraErikaVanessa2016-AnexoA.pdf
          tr
            td OIT América Latina y El Caribe Herramienta de 10 pasos para un retorno al trabajo seguro y saludable en tiempos de COVID-19
            td
              a(href="https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/documents/publication/wcms_745842.pdf" target="_blank") https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/documents/publication/wcms_745842.pdf
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Análisis del escenario
    p.mb-5(data-aos='fade-right') El turista, el guía de turismo y los terceros (equipo de trabajo y grupos de apoyo) que hacen posible el desarrollo de una actividad comparten un mismo escenario con enfoques diferentes, en el siguiente recurso de aprendizaje se aclaran estos conceptos:
    .position-relative
      .tarjeta-icono.tarjeta.rounded-0.p-4.mb-lg-0.mb-3(style='background-color: #ffe6a1')
        .tarjeta-icono__icono: img(src='@/assets/curso/temas/tema1/29.svg', alt='')
        .tarjeta-icono__texto.ms-5
          .row
            .col-lg-8
              h6 El turista:
              p.mb-0 En este espacio desarrolla las actividades encaminadas a cumplir con un itinerario turístico, disfrutando de los productos y servicios contratados bajo la orientación, conducción y asistencia de un guía de turismo y demás prestadores; siendo este un agente activo y pasivo de la misma actividad.
      .tarjeta-icono.tarjeta.rounded-0.p-4.mb-lg-0.mb-3(style='background-color: #ffde83')
        .tarjeta-icono__icono: img(src='@/assets/curso/temas/tema1/30.svg', alt='')
        .tarjeta-icono__texto.ms-5
          .row
            .col-lg-8
              h6 El guía de turismo:
              p  Es su ambiente laboral donde debe velar por su integridad y la del turista.
      .tarjeta-icono.tarjeta.rounded-0.p-4.mb-lg-0.mb-3(style='background-color: #ffd667')
        .tarjeta-icono__icono: img(src='@/assets/curso/temas/tema1/31.svg', alt='')
        .tarjeta-icono__texto.ms-5
          .row
            .col-lg-8
              h6 Terceros:
              p Colombiavive.com, nombre de la empresa que presta los servicios de turismo y  son los que gestionan todo el proceso.
      .imagen-relative.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/32.svg' alt='AvatarTop' )
    .bg-1.margin-n.p-5.mb-5
      .row.justify-content-center
        .col-lg-6
          p De igual forma, se hace necesario identificar cuáles elementos externos se consideran los factores de riesgo derivados de un peligro identificado en cualquier actividad turística, tales como:
          ul.lista-ul--color
            li
              i.vineta
              | Sol y playa.
            li
              i.vineta
              | Cultural.
            li
              i.vineta
              | Salud y bienestar.
            li
              i.vineta
              | MICE.  
            li
              i.vineta
              | Turismo de eventos.
            li
              i.vineta
              | Náutico.
            li
              i.vineta
              | Naturaleza (ecoturismo, turismo de aventura, rural, acuarismo, torrentismo, avistamiento de aves o ballenas).
          p Otro concepto fundamental que debe tener claro al realizar su trabajo como gestor, administrador o guía turístico es saber cómo se hace para determinar el escenario del riesgo, lo cual puede revisar en el siguiente recurso de aprendizaje:
        .col-lg-4: img(src='@/assets/curso/temas/tema1/33.svg' alt='AvatarTop' )
    .row.justify-content-center.mb-5
      .col-lg-9
        TabsA.color-acento-contenido.mb-5
          .tarjeta.p-5(titulo="Identificar y desarrollar el mapa del peligro  " style='background-color: #ccd3ca')
            h4 Identificar y desarrollar el mapa del peligro   
            p Mapa de riesgo sísmico en Colombia
          .tarjeta.p-5(titulo="Determinar el área de influencia del peligro" style='background-color: #ccd3ca')
            h4 Determinar el área de influencia del peligro
            p Zonas de amenazas sísmicas en Colombia.
          .tarjeta.p-5(titulo="Determinar la vulnerabilidad" style='background-color: #ccd3ca')
            h4 Determinar la vulnerabilidad
            p Un índice de vulnerabilidad está dado por la frecuencia o por la profundidad de los movimientos telúricos que se han presentado a través del tiempo en determinados sectores, por ejemplo: en Norte de Santander.
      .col-lg-3: img(src='@/assets/curso/temas/tema1/34.svg', alt='')
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/35.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small En el siguiente documento encontrará el análisis de un estudio de caso para la determinación del escenario de riesgo frente al cambio climático y por qué es importante definir cuáles son los factores que amenazan una población, la extensión o zona que puede ser impactada y el nivel de vulnerabilidad que existe.
                br
                br
                |¿Escenario de riesgos de desastres y escenarios de cambio climático?
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc3.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Peligro en el servicio del guionaje
    p.mb-5(data-aos='fade-right') Es importante conocer cuáles pueden ser los peligros a los que como guía y sus turistas pueden enfrentarse en un evento turístico, por lo que a continuación se muestra en el recurso de aprendizaje las tres principales causas generadoras de daños y que están asociadas al servicio guiado:
    TabsC.color-primario
      .py-3.py-md-4(titulo="Actos Inseguros")
        .row
          .col-md-8.mb-4.mb-md-0
            p Son ocasionados por factores personales originados con comportamientos inadecuados durante la prestación del servicio guiado, trayendo como consecuencia una alta probabilidad de materializar un peligro en el contexto del servicio, tales como:  
              br
              br
              |…los pensamientos de las personas, los modelos mentales, los valores, la ética asociada al guía de turismo, los temas de salud (estrés, estado mental, condiciones físicas, fatiga), el Incumplimiento a los estándares exigidos por la norma o entregados por la agencia contratante para el desarrollo del recorrido, o el Nivel de competitividad de las personas…
              br
              br
              |Al identificar estos factores personales se deben establecer modelos de gestión y crear herramientas para reducir su ocurrencia.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/36.svg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Condiciones peligrosas")
        .row
          .col-md-8.mb-4.mb-md-0
            p Asociadas a los factores de trabajo o su forma de planificación (plan de acción) para el desarrollo del servicio:
            ul.lista-ul--color
              li
                i.fas.fa-dot-circle
                | Plan de acción, transferencia de conocimientos y entrenamiento.

        
              li
                i.fas.fa-dot-circle
                | Capacitación adecuada del guía, de su capacidad de liderazgo y resolución de conflictos.

        
              li
                i.fas.fa-dot-circle
                | Supervisión de equipos, suficiencia y uso.
        
              li
                i.fas.fa-dot-circle
                | Planificación de actividades.
        
              li
                i.fas.fa-dot-circle
                | Conocimiento del entorno (geografía, rutas, comunidad receptora, características socio-culturales).
        
              li
                i.fas.fa-dot-circle
                | Contratación y supervisión de terceros al igual que sus actividades.
              li
                i.fas.fa-dot-circle
                | Procesos de comunicación (conocimiento del plan de acción)
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/37.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
      .py-3.py-md-4(titulo="Condiciones fuera de control")
        .row
          .col-md-8.mb-4.mb-md-0
            p Asociada a factores o eventos de la naturaleza, a emergencias producidas por actividades que se desarrollan en el entorno, ajenas al recorrido guiado.  
              br
              br
              |Consideradas las causas posibles es necesario contemplar las particularidades de las tipologías turísticas (sol y playa, cultural, salud y bienestar, MICE, náutico y naturaleza) además del contexto del servicio 
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/38.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
    .bg-1.margin-n.p-5.mb-5
      p.mb-5(data-aos='fade-right') Continuando con el tema se hace necesario identificar los peligros asociados a una actividad guiada por lo que el guía o el equipo deben responder las siguientes preguntas, ya que las respuestas darán pautas para diseñar un trabajo de calidad que proteja la seguridad del usuario. En el siguiente listado podrá conocer algunas preguntas básicas para definir un plan de acción:
      .row.justify-content-center.mb-5
        .col-lg-6
          ul.lista-ul--color
            li
              i.vineta
              | ¿Qué es exactamente lo que se va a realizar?
            li
              i.vineta
              | ¿Cuáles son los pasos para desarrollar la actividad?
            li
              i.vineta
              | ¿Dónde se va a desarrollar?
            li
              i.vineta
              | ¿Qué tipo de herramientas y equipos se requieren para desarrollar la actividad?
            li
              i.vineta
              | ¿Cuándo se va a realizar? 
            li
              i.vineta
              | ¿Importa la hora, la temporada o la estación climática?
            li
              i.vineta
              | ¿La actividad puede ser afectada por agentes externos como personas, equipos u otras actividades próximas?
            li
              i.vineta
              | ¿Puede la actividad afectar a personas, equipos cercanos o al medio ambiente?
            li
              i.vineta
              | ¿Quiénes conforman su equipo de trabajo?
            li
              i.vineta
              | ¿El nivel de especialización del guía y el equipo de apoyo es el adecuado?
        .col-lg-4: img(src='@/assets/curso/temas/tema1/39.svg', alt='')
    //todo! Añadir documento ----------------------------------------------------------------------------------------------
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/40.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Para conceptualizar el tema se invita a revisar los dos documentos que se encuentran a continuación:
                br
                br
                |1. Beltrán, C. y Murcia, P. (2016). Métodos para identificación de peligros, análisis, evaluación y tratamiento de los riesgos en Colombia. Revista Ingeniería, Matemáticas y Ciencias de la Información 3 (6), p. 29-38.
                br
                br
                |2. Instituto Colombiano de Normas Técnicas y Certificación. (2011.) Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. ICONTEC.
            .col-sm-auto
              .d-block.mb-4
                a.boton.color-acento-botones.texto-blanco(href="https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_cdi_doaj_primary_oai_doaj_org_article_81169c6509314bf9b01c2dd903a1113f&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=PC" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-file-download
              .d-block
                a.boton.color-acento-botones.texto-blanco(href="https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000076763" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-file-download




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bloque-texto-d.color-gris
  border-top: 1px solid #406834
  &:before
    background-color: #e2e8e0
.imagen-relative
  position: absolute
  right: 0
  bottom: 0
  width: 420px
.tarjeta-icono
  position: relative
  margin-left: 3rem
  &__icono
    display: inline-block
    position: absolute
    height: 100%
    img
      width: 113px
    top: 0
    left: 0
    transform: translateX(-50%) translateY(10%)
    z-index: 1
</style>
