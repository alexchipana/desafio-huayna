export interface Checkpoint {
  id: string;
  name: string;
  distanceKm: number;
  elevationM: number;
  slopePercent: number;
  surface: string;
  description: string;
  services: string[];
  oxygenAvailable: boolean;
}

export interface OfficialScheduleItem {
  time: string;
  activity: string;
  details: string;
}

export interface Category {
  id: string;
  name: string;
  ageRange: string;
  gender: 'Varones' | 'Damas' | 'Mixto';
  birthYears: string;
  description: string;
  prizeFirstBOB: number;
  gearPrizes: string;
}

export const EVENT_DATA = {
  edition: '2026 - Primera Versión (V1)',
  title: 'Desafío Huayna Potosí V1',
  discipline: 'Ciclismo de Montaña / MTB',
  organizers: {
    club: 'MTB Rodadas La Paz',
    team: 'MTB Rodadas Racing Team',
    generalCoordinator: 'Iván Limachi',
    coordinationSupport: [
      'Rosmery Chuquimia',
      'Sandra Flores',
      'Osvaldo Torrico',
      'Elio Condori',
      'Wil Alanoca',
      'Moisés Ballesteros',
      'Juan Carlos Álvarez',
      'Noel Paricollo',
      'Favio Abel',
      'Israel Céspedes',
    ],
    email: 'mtbrodadasracingteam@gmail.com',
  },
  mountain: {
    name: 'Nevado Huayna Potosí',
    altitudePeak: 6090,
    mountainRange: 'Cordillera Real de los Andes',
    municipalities: 'Pucarani y El Alto, Departamento de La Paz, Bolivia',
  },
  keyMetrics: {
    distanceKm: 46.9,
    elevationGainM: 1450,
    elevationGainGpxM: 1704,
    maxAltitudeM: 5030,
    startAltitudeM: 3954,
    finishAltitudeM: 4635,
    surface: '100% camino de montaña no pavimentado (tierra, ripio y grava)',
    confirmedAthletes: 167,
    countries: ['Bolivia', 'Perú', 'España', 'Alemania', 'Francia', 'Estados Unidos', 'Uruguay'],
    stravaUrl: 'https://bit.ly/4zUh9jP',
    gpxUrl: 'https://drive.google.com/file/d/1izOlzTpbaIN4yxM2yNfZDmiBWFchKsis/view?usp=drivesdk',
    googleMapsStartUrl: 'https://maps.app.goo.gl/J1Lbun9svGBySEAt5',
  },
  scheduleDayOfRace: [
    { time: '06:30 - 07:30 AM', activity: 'Servicio de Guardarropía (Drop-Bag)', details: 'Recepción de mochilas/bolsas herméticas con ropa de abrigo para traslado directo a la meta en Alto Milluni.' },
    { time: '07:00 AM', activity: 'Concentración de Competidores', details: 'Plaza Principal de la Comunidad Patamanta (Municipio de Pucarani).' },
    { time: '07:20 AM', activity: 'Llamada de Listas y Control Técnico', details: 'Verificación de bicicletas MTB, manubrios sin aerobarras, ancho mínimo de llanta 1.90", cascos obligatorios y dorsales.' },
    { time: '07:45 - 07:55 AM', activity: 'Acto de Inauguración Oficial', details: 'Bienvenida institucional con autoridades originarias de Patamanta y directiva de MTB Rodadas La Paz.' },
    { time: '08:15 AM', activity: 'Largada: Todas las Categorías Damas', details: 'Partida conjunta de Élite Damas, Master A, B, C y D Mujeres.' },
    { time: '08:20 AM', activity: 'Largada: Varones Master D y E', details: 'Ciclistas nacidos entre 1957 y 1966.' },
    { time: '08:25 AM', activity: 'Largada: Varones Master C', details: 'Ciclistas nacidos entre 1967 y 1976.' },
    { time: '08:30 AM', activity: 'Largada: Varones Master B', details: 'Ciclistas nacidos entre 1977 y 1986.' },
    { time: '08:35 AM', activity: 'Largada: Varones Master A', details: 'Ciclistas nacidos entre 1987 y 1996.' },
    { time: '08:40 AM', activity: 'Largada: Varones Élite', details: 'Ciclistas nacidos entre 1997 y 2008 (y menores autorizados).' },
    { time: '08:45 AM', activity: 'Largada: Subcategoría Recreativa', details: 'Bicicletas Gravel y bicicletas con asistencia eléctrica (E-Bike, recreativas sin acceso a podio).' },
    { time: '11:30 AM', activity: 'Punto de Corte Horario en Churiaque', details: 'Filtro de seguridad obligatorio para garantizar arribo antes del horario de cierre.' },
    { time: '13:00 PM', activity: 'Ceremonia de Premiación Oficial', details: 'Podio en la plaza histórica de Alto Milluni ante las autoridades y el público.' },
    { time: '14:00 PM', activity: 'Cierre de Carrera & Vehículo Escoba', details: 'Fin del cronometraje oficial. El vehículo escoba recoge a los corredores rezagados en ruta.' },
    { time: '15:00 PM', activity: 'Límite Entrega Guardarropía & Concierto Armadura', details: 'Recojo final de bultos personales y gran cierre musical con la banda de rock andino Armadura.' },
  ] as OfficialScheduleItem[],
  registrationPhases: [
    {
      phase: 'Primera Fase (Pronto Pago)',
      dates: '12 al 25 de septiembre de 2026',
      individualBOB: 130,
      teamBOB: 1300,
      teamFormula: 'Grupo de 11 ciclistas (Modalidad 10 + 1)',
      status: 'Concluida',
    },
    {
      phase: 'Segunda Fase',
      dates: '26 de septiembre al 11 de octubre de 2026',
      individualBOB: 160,
      teamBOB: 1600,
      teamFormula: 'Grupo de 11 ciclistas (Modalidad 10 + 1)',
      status: 'Concluida',
    },
    {
      phase: 'Tercera Fase (Cierre Definitivo)',
      dates: '12 al 28 de octubre de 2026 (Extendido al 30 de octubre)',
      individualBOB: 200,
      teamBOB: 2000,
      teamFormula: 'Grupo de 11 ciclistas (Modalidad 10 + 1)',
      status: 'Cupos Completados (167 Inscritos)',
    },
  ],
  pricing: {
    individualBOB: 130,
    teamBOB: 1300,
    teamFormula: 'Modalidad 10 + 1 (11 corredores al costo de 10)',
    deadline: '30 de octubre de 2026 (Cupos Completos)',
    includedItems: [
      'Dorsal/Placa oficial con chip de control de tiempo de partida y meta',
      'Puestos de hidratación en ruta (agua purificada y bananas)',
      'Seguro de accidentes de cobertura limitada',
      'Atención prehospitalaria y ambulancia de rescate (Bomberos Santa Bárbara)',
      'Medalla conmemorativa Finisher para quienes completen el recorrido',
      'Traslado de bulto personal (drop-bag) a zona de meta en Alto Milluni',
      'Fotografías digitales oficiales del evento',
      'Acceso al Concierto de Cierre con el grupo de rock Armadura',
    ],
  },
  bankingOfficial: {
    bank: 'Banco Nacional de Bolivia (BNB)',
    accountNumber: '1504644401',
    concept: 'Indicar en Referencia/Concepto el Nombre Completo del Competidor',
    qrAvailable: true,
  },
  officialPrizes: {
    perCategory: [
      { place: '1° Lugar (Varones y Damas en todas las categorías)', amountBOB: 200, extra: 'Trofeo oficial y productos de auspiciadores' },
      { place: '2° Lugar (Varones y Damas en todas las categorías)', amountBOB: 160, extra: 'Medalla podio y productos técnicos' },
      { place: '3° Lugar (Varones y Damas en todas las categorías)', amountBOB: 130, extra: 'Medalla podio y productos de auspiciadores' },
    ],
    specials: [
      { title: 'Mejor Tiempo General Varones', amountBOB: 100, note: '1 premio único independientemente de la edad o categoría' },
      { title: 'Mejor Tiempo General Mujeres', amountBOB: 100, note: '1 premio único independientemente de la edad o categoría' },
      { title: 'Sorteo Estímulo Post-Carrera', amountBOB: 300, note: '3 premios de 100 BOB sorteados entre ciclistas que no hicieron podio' },
    ],
    ruleQuorum: 'Cada categoría requiere un mínimo de diez (10) ciclistas inscritos para habilitarse de forma independiente; de no alcanzar el cupo mínimo, los corredores se incorporan a la categoría inmediata superior (Ej. D ➔ C).',
  },
  categories: [
    {
      id: 'elite-varones',
      name: 'Élite Varones',
      ageRange: '18 a 29 años',
      birthYears: '1997 - 2008',
      gender: 'Varones',
      description: 'Corredores federados, juveniles autorizados y ciclistas de alto rendimiento nacional e internacional.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo conmemorativo + Juego de cubiertas Chaoyang + Componentes Shimano + Indumentaria',
    },
    {
      id: 'elite-damas',
      name: 'Élite Damas',
      ageRange: '18 a 29 años',
      birthYears: '1997 - 2008',
      gender: 'Damas',
      description: 'Máxima categoría femenina de resistencia en alta montaña andina.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo conmemorativo + Neumáticos de competición + Accesorios Shimano + Premios técnicos',
    },
    {
      id: 'master-a-varones',
      name: 'Master A Varones',
      ageRange: '30 a 39 años',
      birthYears: '1987 - 1996',
      gender: 'Varones',
      description: 'Categoría altamente concurrida (35 ciclistas) disputada por experimentados competidores de MTB.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo + Casco técnico + Kit de lubricación Bike Fast + Nutrición deportiva',
    },
    {
      id: 'master-a-damas',
      name: 'Master A Damas',
      ageRange: '30 a 39 años',
      birthYears: '1987 - 1996',
      gender: 'Damas',
      description: 'Competidoras de gran fondo físico que marcan ritmos de punta en ascenso.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo + Indumentaria RLX + Mantenimiento Uma Fisioterapia + Pack de hidratación',
    },
    {
      id: 'master-b-varones',
      name: 'Master B Varones',
      ageRange: '40 a 49 años',
      birthYears: '1977 - 1986',
      gender: 'Varones',
      description: 'El pelotón más numeroso del Desafío con 45 corredores élite máster.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo + Repuestos Bike Bros + Accesorios Bribol + Pack Irupana',
    },
    {
      id: 'master-b-damas',
      name: 'Master B Damas',
      ageRange: '40 a 49 años',
      birthYears: '1977 - 1986',
      gender: 'Damas',
      description: 'Veteranas andinas y destacadas ciclistas de clubes nacionales y de Perú.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo + Kit nutricional integral + Premios de marcas auspiciadoras',
    },
    {
      id: 'master-c-varones',
      name: 'Master C Varones',
      ageRange: '50 a 59 años',
      birthYears: '1967 - 1976',
      gender: 'Varones',
      description: '24 corredores que desafían los 5.029 msnm con décadas de experiencia sobre ruedas.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo + Equipamiento outdoor Xtreme Bolivia + Reconocimiento especial',
    },
    {
      id: 'master-d-e-varones',
      name: 'Master D y E Varones',
      ageRange: '60 a 69+ años',
      birthYears: '1957 - 1966',
      gender: 'Varones',
      description: '12 auténticas leyendas del ciclismo andino e internacional que conquistan el glaciar.',
      prizeFirstBOB: 200,
      gearPrizes: 'Trofeo de honor + Dotación especial de auspiciadores + Reconocimiento institucional',
    },
  ] as Category[],
  technicalRegulations: {
    allowedBikes: [
      'Bicicletas de montaña (MTB) con manubrios convencionales.',
      'Prohibido el uso de aerobarras o manillares de contrarreloj (descalificación inmediata).',
      'Ancho mínimo de llanta/cubierta: 1.90 pulgadas.',
      'Bicicletas Gravel admitidas con horario de largada a las 08:45 AM (recreativa sin podio, salvo 10 inscritos en subcategoría Gravel). Medalla Finisher solo si llegan sin ningún tipo de asistencia externa.',
      'Bicicletas con asistencia de pedaleo eléctrico (E-Bike) admitidas a las 08:45 AM con fines recreativos (prohibidas motos 100% eléctricas a acelerador). No reciben medalla Finisher.',
    ],
    gearAndConduct: [
      'Casco de ciclismo homologado de uso imperativamente obligatorio en todo momento.',
      'Prohibido el uso de audífonos que limiten la audición ambiental (única excepción: auriculares de conducción ósea).',
      'Obligatorio firmar el Deslinde de Responsabilidades (Anexo 1) y presentar Cédula de Identidad física o digital.',
      'Política ambiental estricta: Prohibido arrojar plásticos, envolturas de geles o botellas en la ruta de montaña (descalificación inmediata).',
      'Prohibido recibir remolques mecánicos, empujones o transporte en vehículos de terceros.',
      'Plazo para reclamos o impugnaciones: Máximo 30 minutos desde la publicación de resultados ante el Director de Carrera con evidencia GPS (Strava, Garmin, etc.).',
      'Los ganadores en el podio deben presentarse sin casco ni lentes oscuros para evitar suplantación de identidad.',
    ],
    supportVehicles: [
      'Prohibida la circulación de vehículos no autorizados en la ruta.',
      'Los equipos inscritos tienen derecho excepcional a UN (1) vehículo de auxilio mecánico (motocicleta o cuadratrack).',
      'No se aconseja el uso de vehículos de 4 ruedas convencionales por la extrema complejidad del terreno andino.',
      'Vehículos de apoyo debieron ser acreditados previamente ante el Club para portar el distintivo oficial.',
    ],
  },
  mandatoryGear: [
    { item: 'Casco de ciclismo homologado', required: true, detail: 'Uso obligatorio durante los 48.7 km sin excepción.' },
    { item: 'Bicicleta MTB revisada (llanta mín. 1.90")', required: true, detail: 'Manubrio normal, sin aerobarras de contrarreloj.' },
    { item: 'Cortavientos térmico impermeable', required: true, detail: 'El clima a 5.029m puede descender a 0°C con ráfagas heladas.' },
    { item: 'Guantes de dedos completos', required: true, detail: 'Protección contra el frío extremo y terreno con piedra cortante.' },
    { item: 'Manta térmica aluminizada', required: true, detail: 'Obligatoria en el bolsillo o camelbak para emergencias de hipotermia.' },
    { item: 'Mínimo 1.5 litros de líquido', required: true, detail: 'Mochila de hidratación o caramañolas con electrolitos.' },
    { item: 'Kit de reparación de pinchazos', required: true, detail: 'Cámara de repuesto, palancas y mini bomba o cartucho CO2.' },
    { item: 'Cédula de identidad y Deslinde firmado', required: true, detail: 'Entregado en físico al retirar la placa o en el parque cerrado.' },
  ],
  checkpoints: [
    {
      id: 'cp1',
      name: 'Partida: Plaza Principal de Patamanta',
      distanceKm: 0,
      elevationM: 3954,
      slopePercent: 2.0,
      surface: 'Ripio compactado y calzada vecinal altiplánica',
      description: 'Punto de reunión, concentración de delegaciones y largada por grupos cronometrados.',
      services: ['Parque cerrado', 'Revisión técnica de bicicletas', 'Llamada de lista', 'Guardarropía'],
      oxygenAvailable: true,
    },
    {
      id: 'cp2',
      name: 'Comunidad Originaria Churiaque',
      distanceKm: 2.4,
      elevationM: 4076,
      slopePercent: 4.8,
      surface: 'Camino de tierra suelta, gravilla y ondulaciones con vista a la cordillera',
      description: 'Tramo de aceleración y selección natural del pelotón. Ingreso a la quebrada.',
      services: ['Punto de Hidratación', 'Bananas y Carbohidratos', 'Control visual de paso'],
      oxygenAvailable: false,
    },
    {
      id: 'cp3',
      name: 'Inicio Escalada / Quebrada',
      distanceKm: 14.7,
      elevationM: 4495,
      slopePercent: 7.4,
      surface: 'Senderos pedregosos y grava volcánica suelta',
      description: 'Entrada a las rampas de alta exigencia muscular.',
      services: ['Puesto Avanzado Bomberos Santa Bárbara', 'Oxigenoterapia de urgencia', 'Ambulancia 4x4', 'Hidratación'],
      oxygenAvailable: true,
    },
    {
      id: 'cp4',
      name: 'Abra Glaciar Huayna Potosí (Cota Máxima)',
      distanceKm: 37.6,
      elevationM: 5030,
      slopePercent: 12.8,
      surface: 'Camino minero de alta montaña, morrena y piedra suelta',
      description: 'El punto más alto de la prueba a más de 5.030 m s. n. m. frente a las laderas glaciares.',
      services: ['Control de Chip y Cronometraje', 'Equipo de Rescate y Bomberos', 'Monitoreo de SpO2'],
      oxygenAvailable: true,
    },
    {
      id: 'cp5',
      name: 'Meta: Histórica Comunidad de Alto Milluni',
      distanceKm: 46.9,
      elevationM: 4635,
      slopePercent: -3.5,
      surface: 'Descenso técnico sobre tierra y llegada a la plaza comunitaria',
      description: 'Arco de meta, entrega de medallas Finisher, retorno de drop-bags, almuerzos comunitarios y concierto de Armadura.',
      services: ['Arco de Llegada', 'Medallas Finisher', 'Almuerzos Comunitarios Milluni', 'Concierto Rock Armadura', 'Premiación 13:00'],
      oxygenAvailable: true,
    },
  ] as Checkpoint[],
  safetyAndSupport: {
    bomberos: {
      name: 'Segunda Compañía de Bomberos Voluntarios Santa Bárbara de La Paz',
      role: 'Atención prehospitalaria de urgencia, oxigenoterapia barométrica y rescate en alta montaña',
      equipment: ['Ambulancia de primeros auxilios y unidades 4x4 todo terreno', 'Tanques de oxígeno medicinal de flujo continuo', 'Pulsioxímetros y monitores multiparamétricos', 'Camillas de evacuación alpina'],
    },
    institutional: [
      'Gobierno Autónomo Municipal de El Alto (GAM El Alto)',
      'Gobierno Autónomo Municipal de Pucarani (GAM Pucarani)',
      'Asociación Municipal de Ciclismo La Paz',
      'Secretaría Municipal de Desarrollo Económico',
    ],
    indigenousCommunities: [
      'Comunidad Originaria de Patamanta (Punto de Partida)',
      'Comunidad de Vilaque',
      'Comunidad de Churiaque',
      'Comunidad Histórica de Alto Milluni (Punto de Meta)',
    ],
  },
  sponsors: {
    technical: [
      { name: 'Shimano', category: 'Componentes y transmisión ciclista' },
      { name: 'Chaoyang', category: 'Neumáticos de competición MTB' },
      { name: 'Xtreme Bolivia', category: 'Equipamiento y ropa técnica outdoor' },
      { name: 'Bike Bros', category: 'Taller y repuestos profesionales' },
      { name: 'Bribol', category: 'Herramientas y distribución ciclística' },
      { name: 'Bike Fast', category: 'Mantenimiento y lubricación de alto rendimiento' },
      { name: 'RLX', category: 'Indumentaria ciclista ergonómica' },
    ],
    nutritionAndServices: [
      { name: 'AMTA Café Cultural', category: 'Cafetería de altura y espacio cultural' },
      { name: 'Suma Phunkhu Milluni', category: 'Gastronomía andina y trucha local' },
      { name: 'Uma Fisioterapia', category: 'Kinesiología y recuperación muscular' },
      { name: 'La Cascada', category: 'Hidratación oficial y agua purificada' },
      { name: 'Irupana', category: 'Nutrición integral y cereales andinos' },
      { name: 'Casa Fera', category: 'Alimentos naturales y energéticos' },
    ],
  },
  culturalConcert: {
    band: 'Armadura',
    genre: 'Heavy Rock & Metal Andino Boliviano',
    location: 'Escenario Principal en Meta - Alto Milluni',
    description: 'La consagrada agrupación boliviana de rock andino "Armadura" ofrecerá un concierto electroacústico y potente en vivo para celebrar a todos los ciclistas que completen la hazaña.',
  },
  registrationChannels: {
    platforms: [
      { name: 'Banco Nacional de Bolivia', url: '#', note: 'Cuenta BNB 1504644401 (transferencia y QR Simple)' },
      { name: 'Google Forms Oficial', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeEnpteet3G198abjKbH_nzoOv3pzOit-E_xOa00HDi5JemmA/viewform', note: 'Formulario oficial de inscripción digital' },
      { name: 'Jalo.com.bo', url: 'https://jalo.com.bo', note: 'Portal de tickets en Bolivia' },
      { name: 'BikeSignUp / RunSignUp', url: 'https://runsignup.com', note: 'Plataforma internacional' },
    ],
    whatsappContacts: [
      { phone: '+591 78910808', label: 'Coordinación & Inscripciones 1' },
      { phone: '+591 76986007', label: 'Coordinación & Inscripciones 2' },
      { phone: '+591 77204174', label: 'Soporte Técnico de Ruta' },
      { phone: '+591 72059917', label: 'Logística de Competencia' },
    ],
  },
  contactsOfficial: {
    phones: [
      { phone: '+591 78910808', label: 'Coordinación & Consultas 1' },
      { phone: '+591 76986007', label: 'Coordinación & Consultas 2' },
      { phone: '+591 77204174', label: 'Soporte Técnico & Ruta' },
      { phone: '+591 72059917', label: 'Logística de Competencia' },
    ],
    social: [
      { name: 'TikTok', tag: '@desafiohuaynapotosi', url: 'https://tiktok.com/@desafiohuaynapotosi' },
      { name: 'Facebook', tag: 'Desafío Huayna Potosí / MTB Rodadas La Paz', url: 'https://facebook.com' },
    ],
  },
};
