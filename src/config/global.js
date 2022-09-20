export default {
  global: {
    componenteFormativo: 'Atención de incidentes en el servicio guiado ',
    descripcionCurso:
      'El turismo como actividad humana acepta el desafío de ofertar servicios y productos de calidad a sus usuarios, principio que tiene como factor fundamental el estudio, gestión, análisis, planeación, ejecución y evaluación de aspectos como riesgos, accidentes y contingencias, con el fin de satisfacer al cliente final.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Caracterización de peligros en el servicio del guionaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: ' Peligro',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Riesgo    ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis del escenario',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Peligro en el servicio del guionaje',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión y administración del riesgo en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Entidades responsables y su alcance',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Caracterización de los fenómenos naturales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Legislación y normativa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Guía Técnica Colombiana GTC de identificación de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fases de la seguridad turística ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Protocolos de seguridad',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Planes de emergencia y evacuación de atractivos turísticos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Responsabilidad civil del guía de turismo',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan estratégico de seguridad turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Riesgos laborales del guía',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: false,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Unidad Nacional para la Gestión de Riesgo y Desastres',
      referencia:
        'DW. (2017). Trágica avalancha en Mocoa, Colombia [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1PuyPPQq9sQ',
    },
    {
      tema: 'Normatividad internacional ',
      referencia:
        'Virtual Training Lteam. (2019). ISO 31000:2018 Gestión del Riesgo [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=k5gblbzHeFI',
    },
    {
      tema: 'Riesgo',
      referencia: 'Unisdr. (s.f.). ¿Qué es el riesgo?  Unisdr. ',
      tipo: 'Web',
      link: 'https://www.unisdr.org/2004/campaign/booklet-spa/page9-spa.pdf',
    },
    {
      tema: 'IDIGER',
      referencia:
        'UNGRD. (s.f.) Plan Nacional de Gestión del Riesgo de Desastres [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Oeg1rftVTAA',
    },
    {
      tema: 'Caracterización de los fenómenos naturales',
      referencia:
        'Canal Uno. (2016).  En las mañanas con uno. ̈Colombia está en una zona vulnerable ante un sismo: Cristina Dimaté, geofísica [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ncJywNddqBE',
    },
  ],
  glosario: [
    {
      termino: 'Consecuencia',
      significado:
        'Resultado en términos de lesión o enfermedad de la materialización de un riesgo, expresado cualitativa y cuantitativamente.',
    },
    {
      termino: 'Contingencia',
      significado:
        'Es un evento o suceso que ocurre en la mayoría de los casos en forma repentina e inesperada, causa alteraciones en los patrones normales de vida o actividad humana y en el funcionamiento de los ecosistemas involucrados.',
    },
    {
      termino: 'Evacuación',
      significado:
        'Se define como el establecimiento de una barrera (distancia) entre una fuente de riesgo y las personas amenazadas, mediante el desplazamiento de estas, hasta y a través de lugares de menor riesgo.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal.',
    },
    {
      termino: 'Prestador de servicios turísticos',
      significado:
        'Nombre dado a las empresas comerciales, constituidas por personas naturales o jurídicas, y que debidamente autorizadas se dedican profesionalmente al ejercicio de actividades turísticas dirigidas a la prestación de servicios, directamente o como intermediarios entre los viajeros y proveedores de los servicios.',
    },
    {
      termino: 'Prevención ',
      significado:
        'Conjunto de estrategias y acciones que se realizan anticipadamente para evitar que una amenaza se materialice.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'Grado de posibilidad de que ocurran eventos no deseados y pueda producir consecuencias.',
    },
    {
      termino: 'Riesgo aceptable',
      significado:
        'Riesgo que ha sido reducido a un nivel que la organización puede tolerar, respecto a sus obligaciones legales y su propia política en seguridad y salud ocupacional (NTC-OHSAS 18001).',
    },
    {
      termino: 'Turismo MICE',
      significado:
        'El término MICE significa turismo de negocios, este engloba el ámbito del turismo de reuniones, incentivos, conferencias y exposiciones. Cada inicial corresponde a la definición original en inglés Meeting, Incentives, Conferencing y Exhibitions.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beltrán, C. y Murcia, J. (2016). Métodos para identificación de peligros, análisis, evaluación y tratamiento de los riesgos en Colombia. Revista Ingeniería, Matemáticas y Ciencias de la Información 3(6), p. 29-38. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_81169c6509314bf9b01c2dd903a1113f',
    },
    {
      referencia:
        'Canal Uno. (2016).  En las mañanas con uno. Colombia está en una zona vulnerable ante un sismo: Cristina Dimaté, geofísica [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ncJywNddqBE',
    },
    {
      referencia:
        'CITUR. (s.f.). Centro de información turística de Colombia. CITUR.',
      link: 'https://citur.gov.co/pages/1#gsc.tab=0',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015. ',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_1072_2015.htm',
    },
    {
      referencia:
        'Decreto 1379 de 2021. [Presidencia de la República de Colombia]. Por medio del cual se sustituye la Sección 10 del Capítulo 4 del Título 4 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, para reglamentar el guionaje turístico y su ejercicio. Octubre 28 de 2021. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172994',
    },
    {
      referencia: 'FAO. (s.f.) Herramientas de gestión de riesgos. FAO. ',
      link:
        'https://www.fao.org/fishing-safety/risk-management/risk-management-tools/es/',
    },
    {
      referencia: 'FAO. (s.f.) ¿Qué es la certificación ISO 14001? FAO.',
      link: 'https://www.fao.org/3/ad818s/ad818s08.htm',
    },
    {
      referencia:
        'Fondo de prevención y atención de emergencia FOPAE. (2014).  Manual para la elaboración de planes de emergencia y contingencias en aglomeraciones de público de carácter permanente. FOPAE.',
      link:
        'https://www.sire.gov.co/documents/82884/84796/Manual+Elaboraci%C3%B3n+PEC+Aglomeraciones+Permanentes+(Actualizado).pdf/17e71d89-150b-4185-a9f2-f666e1e29f94',
    },
    {
      referencia:
        'ICONTEC. (2021). Plan de Migración de la Certificación con la Norma OHSAS 18001 a ISO 45001:2018. ICONTEC.',
      link:
        'https://www.icontec.org/wp-content/uploads/2020/05/Plan-de-Migraci%C3%B3n-de-la-certificaci%C3%B3n-con-la-norma-OHSAS-18001-a-ISO-450.._.pdf',
    },
    {
      referencia:
        'ICONTEC. (2021). Turismo de aventura. Buenas prácticas para la sostenibilidad. Requisitos y recomendaciones NTC 6523. ICONTEC. ',
      link:
        'https://calidadturistica.gov.co/attachments/courses/1/33/NTC_6523%20Turismo%20de%20aventura.%20Buenas%20pr%C3%A1cticas%20para%20la%20sostenibilidad.%20Requisitos%20y%20recomendaciones.pdf',
    },
    {
      referencia:
        'ICONTEC. (2018). ISO 45001.  Norma ISO 45001 - Sistemas de gestión de la seguridad y salud en el trabajo.',
      link:
        'http://siga.unal.edu.co/images/informes-presentaciones/ISO_45001_Sistemas_Gestion_SST.pdf',
    },
    {
      referencia:
        'ICONTEC. (2015). Sistemas de gestión de la calidad. Requisitos. ICONTEC. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },
    {
      referencia:
        'ICONTEC. (2011). Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. ICONTEC.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000076763',
    },
    {
      referencia: 'ICONTEC. (2010). Guía Técnica Colombiana GTC 45. ICONTEC.',
      link:
        'https://saludocupacionalunad.files.wordpress.com/2012/07/gtc-45-2010.pdf ',
    },
    {
      referencia: 'ISO 31000:2018. (s.f.). Gestión del riesgo. ',
      link:
        'http://siga.unal.edu.co/images/informes-presentaciones/ISO_31000_Gestion_riesgo.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Aprendizaje INA. (2017).  Legislación vigente relacionada con la actividad del guía de turismo. INA.',
      link:
        'https://www.ina-pidte.ac.cr/pluginfile.php/17938/mod_resource/content/2/Legislaci%C3%B3n%20Vigente.pdf',
    },
    {
      referencia:
        'Ley 1523 de 2012.  Por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones. Abril  24 de 2012.',
      link:
        'https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141',
    },
    {
      referencia:
        'Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 -Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. Julio de 2012.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48321',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo & Fontur. (2013). Elaboración e implementación de protocolos de seguridad turística en los destinos de San Agustín (Huila), Paisaje Cultural Cafetero (Caldas, Quindío, Risaralda y Norte del Valle), Nuquí (Chocó) y Caño Cristales (Meta), mejorando su competitividad y las condiciones de seguridad de los turistas durante su permanencia o desplazamiento. Fontur. ',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=7e631b5f-d82c-4c49-89e9-27a8248d7a49',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.).  Plan estratégico de seguridad en el turismo. Mincit.',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/seguridad-turistica#:~:text=El%20Plan%20Estrat%C3%A9gico%20de%20Seguridad,para%20la%20gesti%C3%B3n%20de%20los',
    },
    {
      referencia:
        'Ministerio de Turismo de Argentina y Presidencia de la Nación. (2013). Directrices de gestión ambiental para municipios turísticos. AHT, FEHGRA. ',
      link:
        'http://www.turismo.gob.ar/sites/default/files/1_manual_dga_municipios.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo de Colombia. Normas técnicas del sector. Mincit.',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      referencia:
        'Ministerio de Turismo de Argentina y Presidencia de la Nación. (2013). Directrices de gestión ambiental para municipios turísticos. AHT, FEHGRA. ',
      link:
        'http://www.turismo.gob.ar/sites/default/files/1_manual_dga_municipios.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo de Colombia. Normas técnicas del sector. Mincit. ',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      referencia:
        'OIT. (2001). Directivas relativas a los sistemas de gestión de la seguridad y la salud en el trabajo. OIT.',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/---ed_protect/---protrav/---safework/documents/normativeinstrument/wcms_112582.pdf',
    },
    {
      referencia:
        'Olmos, J. (2021). La seguridad en el turismo de naturaleza como estrategia de desarrollo. I Congreso Internacional de Seguridad Turística.',
      link: '',
    },
    {
      referencia:
        'Palomino, E. y Sánchez, J. (2012). OHSAS 18001:2007 adaptado a 18002:2008: sistemas de gestión de la seguridad y salud en el trabajo. 3rd ed. Fundación Confemetal Print.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000067913',
    },
    {
      referencia:
        'Señal Colombia. (1985). Tragedia de Armero, cronología de sucesos. Señal Colombia. ',
      link:
        'https://www.senalcolombia.tv/general/tragedia-de-armero-cronologia',
    },
    {
      referencia:
        'UNAL. Gestión del riesgo natural, el caso de Colombia. (2008). UNAL. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/3251/gonzaloduqueescobar.20089.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2018). Sistema Nacional de Gestión del Riesgo de Desastres 30 años [Presentación]. UNGRD.',
      link:
        'https://www.cepal.org/sites/default/files/presentations/sistema_nacional_de_gestion_del_riesgo_de_desastres_-_claudia_satizabal.pdf',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres. (2016). Plan Nacional de la Gestión del Riesgo de Desastres [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=Oeg1rftVTAA&t=63s',
    },
    {
      referencia:
        'UNWTO. (2021). Publicada la primera norma internacional sobre turismo accesible para todas las personas, liderada por la OMT, Fundación ONCE y UNE. UNWTO. ',
      link:
        'https://www.unwto.org/es/news/publicada-la-primera-norma-internacional-sobre-turismo-accesible-para-todas-las-personas',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alejandro Perlaza Espinosa',
        cargo: 'Instructor tecnico ',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Villamizar R.',
        cargo: 'Profesional de diseño y desarrollo curricular',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseño instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá Capital ',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital  ',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardos',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
