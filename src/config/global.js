export default {
  global: {
    componenteFormativo: 'Caracterización del destino ',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará en capacidad de aplicar saberes y habilidades relacionados con la caracterización del destino, para la guianza turística. También, Afianzará su capacidad para describir, interpretar, narrar situaciones e historias que, en el marco del servicio guiado, ayudarán a que el cliente experimente y viva lo que se cuenta,  satisfaciendo su expectativa e interés.',
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
        titulo: 'Descripción del destino',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: ' Destino turístico: concepto y elementos   ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema turístico     ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Potencial turístico',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Impactos del turismo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativa turística ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Interpretación del patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Enfoque y principios',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Etapas del proceso interpretativo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de descripción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Descripción de fenómenos, lugares, personas y objetos ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnica de aprendizaje por fragmentación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'La temática: el hilo argumental',
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
      tema: 'Descripción del destino',
      referencia: 'Cook, M. (2003). Una breve historia de la Humanidad.  ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/60064?page=1',
    },
    {
      tema: 'Descripción del destino',
      referencia:
        'Eggers-Brass, T. (2009). Historia II: América indígena y la expansión europea. ',
      tipo: 'Libro',
      link: '',
    },
    {
      tema: 'Descripción de fenómenos, lugares, personas y objetos',
      referencia: 'Fornés, L. (2010). Historia Universal: América Latina. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/36419?page=1',
    },
    {
      tema: 'Descripción de fenómenos, lugares, personas y objetos',
      referencia:
        'Arias, J. (2011). Historia de Colombia contemporánea (1920-2010). ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69371?page=1',
    },
    {
      tema: 'Técnica de aprendizaje por fragmentación',
      referencia:
        'La Rosa, M. & Mejía, G (2013). Historia concisa de Colombia (1810-2013): Una guía para lectores desprevenidos. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69536?page=1',
    },
    {
      tema: 'La temática: el hilo argumental',
      referencia:
        'Universidad de los Andes (s.f.). Lectura, escritura y oralidad. ',
      tipo: 'Página web',
      link:
        'https://leo.uniandes.edu.co/index.php/menu-escritura/sub-menuscritura/122-mas-alla-de-los-conectores-logicos-el-hilo-conductor',
    },
  ],
  glosario: [
    {
      termino: 'Atractivos',
      significado:
        'Todos aquellos bienes y servicios que por intermedio de la actividad del hombre y de los medios con que cuenta, hacen posible la actividad turística y satisfacen las actividades de la demanda, y plantea que, un recurso turístico constituye la existencia de un conjunto potencial (conocido o desconocido) de los bienes materiales o inmateriales a disposición del hombre y que pueden utilizarse mediante un proceso de transformación que hacen posible la actividad turística y satisfacen las necesidades de la demanda.',
    },
    {
      termino: 'Autorretrato',
      significado: 'Descripción que se hace de sí mismo.',
    },
    {
      termino: 'Caricatura',
      significado:
        'Deforma la descripción con una intención irónica y humorística.',
    },
    {
      termino: 'Cronografía ',
      significado:
        'Descripción de una época histórica, un tiempo o momento determinado. ',
    },
    {
      termino: 'Demanda',
      significado:
        'La demanda turística es el número de personas que viajan o desean viajar para utilizar instalaciones turísticas y servicios lejos de sus lugares de trabajo o residencia.',
    },
    {
      termino: 'Desarrollo sostenible      ',
      significado:
        'Conjunto de políticas, técnicas y tecnologías aplicadas a la generación de bienestar, conservando la capacidad productiva de los ecosistemas que permitan el sostenimiento y la disponibilidad de recursos naturales para las generaciones futuras.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Es un espacio geográfico determinado, que cuenta con productos turísticos que satisfacen las expectativas del turista.',
    },
    {
      termino: 'Descripción Subjetiva',
      significado:
        'Es una forma de dar a conocer un fenómeno, muchas veces desde la interpretación del emisor, o también desde la opinión, sentimientos y sensaciones que este tiene frente a la realidad que describe.',
    },
    {
      termino: 'Etopeya ',
      significado:
        'Descripción de las costumbres, las virtudes, los talentos, los defectos y las cualidades morales o psicológicas de las personas. ',
    },
    {
      termino: 'Exposición interpretativa',
      significado:
        'Es la representación de ideas y hechos mediante la utilización de soportes ilustrativos, gráficos, participativos o con efectos especiales. ',
    },
    {
      termino: 'Gentrificación',
      significado:
        'Proceso de rehabilitación urbanística y social de una zona urbana deprimida o deteriorada, que provoca un desplazamiento paulatino de los vecinos empobrecidos del barrio por otros de un nivel social y económico más alto.',
    },
    {
      termino: 'Gestión',
      significado:
        'Acciones administrativas, técnicas y financieras para el logro de un objetivo particular o colectivo. ',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Cambio adverso o benéfico en los elementos del ambiente, por fuente natural o antrópica que es determinable a través de mediciones y que puede ser reversible o no.',
    },
    {
      termino: 'Medios interpretativos',
      significado:
        'Son los ‘vehículos’ a través de los cuales se transmite un mensaje interpretativo al visitante. Pueden ser “atendidos por personal”, que contemplan una interacción entre el público y una persona que es guía o intérprete; o bien, “no atendidos”, es decir, aquellos servicios que no utilizan personal directamente, sino objetos, artilugios o aparatos.',
    },
    {
      termino: 'Paralelismo',
      significado:
        'Descripción consecutiva o mezclada a fin de establecer una comparación y construir semejanzas y diferencias. ',
    },
    {
      termino: 'Potencial turístico',
      significado:
        'Determinado por la forma en que la oferta de productos y servicios turísticos de una localidad se adapta para satisfacer las necesidades actuales de esparcimiento y recreación de los turistas nacionales e internacionales.',
    },
    {
      termino: 'Prosopografía',
      significado:
        'Descripción de los rasgos físicos de una persona o de un animal. Se centra en su figura corporal y la ropa.',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'Corresponsabilidad de una organización con el entorno social donde tiene influencia.',
    },
    {
      termino: 'Retrato',
      significado:
        'Es la suma de la prosopografía y la etopeya. Incluye cualidades físicas, morales e intelectuales.',
    },
    {
      termino: 'Sostenible',
      significado:
        'Aquel que toma en consideración las repercusiones económicas, socioculturales y ambientales, actuales y futuras, para desarrollar actividades que den respuesta a las necesidades de los visitantes, de los destinos, de las comunidades anfitrionas y de la industria turística y del entorno.',
    },
    {
      termino: 'Topografía',
      significado:
        'Descripción de un lugar o paisaje, un espacio físico real o imaginario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea General de las Naciones Unidas (1987). Informe de la Comisión Mundial sobre el Medio Ambiente y el Desarrollo.',
      link:
        'https://www.ecominga.uqam.ca/PDF/BIBLIOGRAPHIE/GUIDE_LECTURE_1/CMMAD-Informe-Comision-Brundtland-sobre-Medio-Ambiente-Desarrollo.pdf',
    },
    {
      referencia:
        'Boullón, R. (2006). Planificación del Espacio Turístico. Editorial Trillas. ',
      link: '',
    },
    {
      referencia:
        'Comisión Centroamericana de Ambiente y Desarrollo (2005). Manual de Interpretación Ambiental en Áreas Protegidas de la Región del Sistema Arrecifal Mesoamericano. Slideshare. ',
      link:
        'https://es.slideshare.net/urania31k/3263484-manualdeinterpretacionambientalenareasprotegidasdelaregiondelsistemaarrecifalmesoamericano',
    },
    {
      referencia:
        'Comisión Mundial sobre el Medio Ambiente y Desarrollo (1987). Informe Brundtland.',
      link:
        'http://www.ecominga.uqam.ca/PDF/BIBLIOGRAPHIE/GUIDE_LECTURE_1/CMMAD-Informe-Comision-Brundtland-sobre-Medio-Ambiente-Desarrollo.pdf',
    },
    {
      referencia:
        'Europarc (1993). Carta de Turismo Sostenible en Espacios Naturales Protegidos (CEST). ',
      link:
        'http://www.redeuroparc.org/actividades/carta-europea-turismo-sostenible',
    },
    {
      referencia: 'Fontur Colombia (s.f). Glosario Fontur. Fontur.',
      link: 'https://fontur.com.co/es/glosario?q=es/glosario',
    },
    {
      referencia:
        'Jiménez, L. (1990). Teoría Turística. Editorial Universidad Externado de Colombia. ',
      link: '',
    },
    {
      referencia:
        'Lacouture, M. (2019). Turismo Sostenible. Diez Consejos para lograrlo. Ed. Planeta Colombia S.A.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (2021). Destinos turísticos de Colombia certificados en sostenibilidad. ',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=cf570b29-7f96-40f2-8bb6-6f75c2653495',
    },
    {
      referencia:
        'Ministerio de Comercio Industria y Turismo (2020). Política de Turismo Sostenible. ',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/politicas-del-sector-turismo/politica-de-turismo-sostenible/documento-de-politica-politica-de-turismo-sostenib.aspx',
    },
    {
      referencia:
        'Ministerio para la Transición Ecológica y el Reto Demográfico (2006). Interpretación del Patrimonio Natural y Cultural. Miteco.',
      link:
        'https://www.miteco.gob.es/es/ceneam/grupos-de-trabajo-y-seminarios/interpretacion-del-patrimonio-natural-y-cultural/default.aspx',
    },
    {
      referencia:
        'Organización Mundial del Turismo (s.f.). Desarrollo Sostenible. UNWTO.',
      link: 'https://www.unwto.org/es/desarrollo-sostenible',
    },
    {
      referencia:
        'Quesada, C. (2010). Elementos del Turismo: Teoría, clasificación y actividad. Editorial Universidad Estatal a distancia. ',
      link: '',
    },
    {
      referencia:
        'San Martín, R. & Salcedo, M. (2007). Turismo, sustentabilidad y certificación: un reto global Revista del Centro de Investigación, 7(27), p. 77-91.',
      link: 'https://www.redalyc.org/articulo.oa?id=34202706',
    },
    {
      referencia:
        'Subsecretaria de Turismo (2014). Planes de Interpretación Patrimonial en Áreas Protegidas. Mbrs. ',
      link: '',
    },
    {
      referencia:
        'Tilden, F. (1957). Interpreting Our Heritage The University of North Carolina.',
      link: '',
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
        nombre: 'Carolina Hernández Vargas',
        cargo: 'Instructor tecnico ',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital ',
      },
      {
        nombre: 'Juan Carlos Rubiano Reyes',
        cargo: 'Instructor Técnico',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Villamizar R.',
        cargo: 'Profesional de diseño',
        centro: '',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Norte de Santander ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
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
        nombre: 'Anllelo Andres Reina Montañez',
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
