import { AxisTheoryModule } from '../../types';

export const useOfLanguageLevel2: AxisTheoryModule = {
  axis: 'useOfLanguage',
  levelNumber: 2,
  overview: 'Programa Oficial STANAG 6001 Nivel 2 (Competencia Profesional Limitada / A2-B1): Dominio integrado de tiempos verbales (Present Simple vs Continuous con State Verbs, Cláusulas Temporales con when/as soon as/before/after/until, Past Simple regular e irregular con there was/were, Past Continuous con when/while para acciones interrumpidas y paralelas, Futuro con Going to, Will, Present Continuous para acuerdos, Present Simple para horarios y "Shall" para sugerencias); Sistema de Modales (can, could, must, mustn\'t, have to, have got to, would, should); Condicional Tipo 1; Orden de adjetivos; Comparativos y superlativos; Pronombres indefinidos (some/any/no/every-); Sustantivos contables/incontables y cuantificadores; y vocabulario integral de compras, moda, trabajo y organigramas, estudio, personas y biografías, viajes, hotelería, tránsito, clima, gastronomía, salud, accidentes y emergencias, y Phrasal Verbs clave.',
  vocabulary: [
    {
      theme: 'Compras, Supermercados, Centros Comerciales y Precios (Shopping & Money)',
      description: 'Léxico para compras de alimentos, muebles, indumentaria, comparación de precios y transacciones.',
      words: [
        { term: 'Aisle / Trolley / Basket', ipa: '/aɪl / ˈtrɒli / ˈbɑːskɪt/', partOfSpeech: 'sustantivos', translation: 'Pasillo / Carrito de compras / Canasto', example: 'You will find cooking oil in aisle four; take a trolley at the entrance.', tacticalTip: 'La "s" en "aisle" es completamente muda (/aɪl/).' },
        { term: 'Receipt / Refund / Discount', ipa: '/rɪˈsiːt / ˈriːfʌnd / ˈdɪskaʊnt/', partOfSpeech: 'sustantivos', translation: 'Comprobante de compra / Reembolso / Descuento', example: 'Keep your receipt if you want to request a refund or an exchange.', tacticalTip: 'En "receipt" la letra "p" es muda (/rɪˈsiːt/).' },
        { term: 'Expensive / Affordable / Bargain', ipa: '/ɪkˈspensɪv / əˈfɔːdəbl / ˈbɑːɡɪn/', partOfSpeech: 'adjetivos y sustantivo', translation: 'Costoso / Accesible / Ganga u oferta', example: 'This winter jacket is a real bargain, twenty percent off the marked price.', tacticalTip: 'Términos indispensables para comparar calidad y precios.' },
        { term: 'Department store / Shopping mall', ipa: '/dɪˈpɑːtmənt stɔː / ˈʃɒpɪŋ mɔːl/', partOfSpeech: 'sustantivos', translation: 'Tienda por departamentos / Centro comercial', example: 'The shopping mall has furniture, clothes and electronics stores.', tacticalTip: 'Uso en actividades de abastecimiento y vida diaria.' }
      ]
    },
    {
      theme: 'La Moda, Ropa y Tipos de Vestimenta (Fashion & Clothes)',
      description: 'Prendas formales, informales, deportivas y accesorios para distintas ocasiones.',
      words: [
        { term: 'Formal wear / Suit & Tie', ipa: '/ˈfɔːml weə / suːt ænd taɪ/', partOfSpeech: 'sustantivo', translation: 'Vestimenta formal / Traje y corbata', example: 'Officers wear formal suits or dress uniforms for the official reception.', tacticalTip: 'Código de vestimenta para ceremonias oficiales.' },
        { term: 'Casual wear / Jeans & Hoodie', ipa: '/ˈkæʒuəl weə / dʒiːnz ænd ˈhʊdi/', partOfSpeech: 'sustantivo', translation: 'Ropa informal / Pantalón vaquero y buzo con capucha', example: 'On weekends, personnel are permitted to wear casual civilian clothes.', tacticalTip: 'Vestimenta de descanso y recreación.' },
        { term: 'Sportswear / Tracksuit & Trainers', ipa: '/ˈspɔːtsweə / ˈtræksuːt ænd ˈtreɪnəz/', partOfSpeech: 'sustantivo', translation: 'Ropa deportiva / Conjunto deportivo y zapatillas', example: 'Put on your tracksuit and trainers for physical training at 0700.', tacticalTip: 'En inglés británico "trainers" equivale a "sneakers" (US).' },
        { term: 'Fitting room / Size / Try on', ipa: '/ˈfɪtɪŋ ruːm / saɪz / traɪ ɒn/', partOfSpeech: 'sustantivo y phrasal verb', translation: 'Probador / Talle / Probarse una prenda', example: 'Could I try on this medium size shirt in the fitting room?', tacticalTip: 'Frase clave al comprar vestimenta en comercios.' }
      ]
    },
    {
      theme: 'El Trabajo, Organigramas y Educación (Work, Roles & Study)',
      description: 'Ocupaciones, puestos, jerarquías, tareas laborales, escuelas y ámbitos de estudio.',
      words: [
        { term: 'Organisational chart / Hierarchy', ipa: '/ˌɔːɡənaɪˈzeɪʃənl tʃɑːt / ˈhaɪərɑːki/', partOfSpeech: 'sustantivos', translation: 'Organigrama / Estructura jerárquica', example: 'The organisational chart shows the chain of command and line managers.', tacticalTip: 'La "ch" en "hierarchy" suena como /k/ (/ˈhaɪərɑːki/).' },
        { term: 'Duty / Responsibility / Task', ipa: '/ˈdjuːti / rɪˌspɒnsəˈbɪləti / tɑːsk/', partOfSpeech: 'sustantivos', translation: 'Deber / Responsabilidad / Tarea asignada', example: 'My main duty is to coordinate logistics and inspect communications equipment.', tacticalTip: 'Uso obligatorio para describir tareas laborales y de servicio.' },
        { term: 'Colleague / Staff / Trainee', ipa: '/ˈkɒliːɡ / stɑːf / treɪˈniː/', partOfSpeech: 'sustantivos', translation: 'Colega / Personal (planta) / Aprendiz o pasante', example: 'She trains new staff members at the technical academy.', tacticalTip: '"Staff" es sustantivo colectivo; refiere al conjunto de trabajadores.' },
        { term: 'Coursework / Degree / Lecture', ipa: '/ˈkɔːswɜːk / dɪˈɡriː / ˈlektʃə/', partOfSpeech: 'sustantivos', translation: 'Trabajo de cursada / Título o grado académico / Clase magistral', example: 'The officer completed an engineering degree and military staff coursework.', tacticalTip: 'Ámbito académico, universitario y de formación militar.' }
      ]
    },
    {
      theme: 'Personas: Descripción Física, Personalidad y Biografías (People & Traits)',
      description: 'Léxico para describir aspecto externo, rasgos de carácter, estados de ánimo y relatos biográficos.',
      words: [
        { term: 'What does he look like?', ipa: '/wɒt dʌz hi lʊk laɪk/', partOfSpeech: 'pregunta fija', translation: '¿Cómo es físicamente? (apariencia física)', example: 'What does the courier look like? — He is tall, with short curly hair.', tacticalTip: 'Diferenciar rigurosamente de "What is he like?" (personalidad).' },
        { term: 'What is he like? (Personality)', ipa: '/wɒt ɪz hi laɪk/', partOfSpeech: 'pregunta fija', translation: '¿Cómo es de carácter / personalidad?', example: 'What is the new commander like? — He is very reliable, calm and decisive.', tacticalTip: 'Indaga personalidad y virtudes morales, no rasgos físicos.' },
        { term: 'Reliable / Outgoing / Stubborn', ipa: '/rɪˈlaɪəbl / ˈaʊtɡəʊɪŋ / ˈstʌbən/', partOfSpeech: 'adjetivos', translation: 'Confiable / Extrovertido / Terco o tozudo', example: 'Sergeant Davies is extremely reliable under pressure.', tacticalTip: 'Adjetivos de personalidad frecuentes en evaluaciones y partes.' },
        { term: 'Mood / Cheerful / Anxious / Exhausted', ipa: '/muːd / ˈtʃɪəfl / ˈæŋkʃəs / ɪɡˈzɔːstɪd/', partOfSpeech: 'sustantivo y adjetivos', translation: 'Estado de ánimo / Alegre / Ansioso / Agotado', example: 'The troops were exhausted but in high spirits after the 20-km march.', tacticalTip: 'Descripción de estado psicológico y anímico.' },
        { term: 'Born / Raised / Career / Legacy', ipa: '/bɔːn / reɪzd / kəˈrɪə / ˈleɡəsi/', partOfSpeech: 'verbos y sustantivos', translation: 'Nacido / Criado / Trayectoria profesional / Legado', example: 'General San Martín was born in Yapeyú and had an outstanding military career.', tacticalTip: 'Estructuras típicas de redacción biográfica.' }
      ]
    },
    {
      theme: 'Lugares, Ciudades, Barrio y Vivienda (Places, Housing & Furniture)',
      description: 'Países, nacionalidades, idiomas, partes de la casa, mobiliario y dependencias del vecindario.',
      words: [
        { term: 'Country, Nationality, Language', ipa: '/ˈkʌntri / ˌnæʃəˈnæləti / ˈlæŋɡwɪdʒ/', partOfSpeech: 'sustantivos', translation: 'País, Nacionalidad e Idioma', example: 'He is from Argentina; his nationality is Argentine and he speaks Spanish and English.', tacticalTip: 'El país, nacionalidad e idioma siempre se escriben con mayúscula inicial en inglés.' },
        { term: 'Suburbs / Downtown / Facilities', ipa: '/ˈsʌbɜːbz / ˈdaʊntaʊn / fəˈsɪlətiz/', partOfSpeech: 'sustantivos', translation: 'Suburbanos / Centro de la ciudad / Instalaciones y servicios', example: 'The military base is located in the suburbs, close to medical facilities.', tacticalTip: 'Ubicación geográfica urbana y periurbana.' },
        { term: 'Balcony / Attic / Basement', ipa: '/ˈbælkəni / ˈætɪk / ˈbeɪsmənt/', partOfSpeech: 'sustantivos', translation: 'Balcón / Ático o desván / Sótano', example: 'Emergency rations are stored in the dry basement of the house.', tacticalTip: 'Partes estructurales de una vivienda.' },
        { term: 'Armchair / Cupboard / Wardrobe', ipa: '/ˈɑːmtʃeə / ˈkʌbəd / ˈwɔːdrəʊb/', partOfSpeech: 'sustantivos', translation: 'Sillón / Alacena o armario / Placard o ropero', example: 'The officer\'s flat includes a desk, an armchair and a wooden wardrobe.', tacticalTip: 'En "cupboard" la "p" es totalmente muda (/ˈkʌbəd/).' }
      ]
    },
    {
      theme: 'Viajes, Turismo, Hotelería y Transporte (Travel & Hotel Services)',
      description: 'Reservas hoteleras, servicios, equipaje, señales viales y transporte público.',
      words: [
        { term: 'Single / Twin / Double room', ipa: '/ˈsɪŋɡl / twɪn / ˈdʌbl ruːm/', partOfSpeech: 'sustantivos', translation: 'Habitación individual / Con dos camas / Matrimonial', example: 'We booked a twin room with an en-suite bathroom and breakfast included.', tacticalTip: '"Twin room" cuenta con dos camas separadas; "double" con una de dos plazas.' },
        { term: 'Check-in / Luggage / Amenities', ipa: '/ˈtʃek ɪn / ˈlʌɡɪdʒ / əˈmiːnətiz/', partOfSpeech: 'sustantivos', translation: 'Registro de ingreso / Equipaje / Comodidades y servicios', example: 'Hotel check-in is at 1400 hours; luggage can be stored at reception.', tacticalTip: '"Luggage" es sustantivo incontable; no lleva -s plural.' },
        { term: 'Street signs / Roundabout / Crossroads', ipa: '/striːt saɪnz / ˈraʊndəbaʊt / ˈkrɒsrəʊdz/', partOfSpeech: 'sustantivos', translation: 'Señales viales / Rotonda / Cruce de caminos o encrucijada', example: 'Turn right at the roundabout and follow the traffic signs toward the port.', tacticalTip: 'Términos británicos estándar de orientación vial.' },
        { term: 'Platform / Return ticket / Delay', ipa: '/ˈplætfɔːm / rɪˈtɜːn ˈtɪkɪt / dɪˈleɪ/', partOfSpeech: 'sustantivos', translation: 'Andén / Pasaje de ida y vuelta / Demora o retraso', example: 'The train to Salisbury departs from platform two with a 10-minute delay.', tacticalTip: 'Vocabulario de viajes ferroviarios y terminales.' }
      ]
    },
    {
      theme: 'El Clima, Meteorología y Estaciones (Weather & Forecast)',
      description: 'Condiciones meteorológicas, temperaturas, fenómenos climáticos y pronósticos.',
      words: [
        { term: 'Forecast / Mild / Overcast', ipa: '/ˈfɔːkɑːst / maɪld / ˌəʊvəˈkɑːst/', partOfSpeech: 'sustantivo y adjetivos', translation: 'Pronóstico / Templado / Nublado o cubierto', example: 'The meteorological forecast predicts mild temperatures and overcast skies.', tacticalTip: 'Información meteorológica indispensable para planificar actividades de campo.' },
        { term: 'Fog / Thunderstorm / Gale', ipa: '/fɒɡ / ˈθʌndəstɔːm / ɡeɪl/', partOfSpeech: 'sustantivos', translation: 'Niebla espesa / Tormenta eléctrica / Temporal de viento fuerte', example: 'Flight operations were suspended due to dense fog and gale-force winds.', tacticalTip: 'Condiciones meteorológicas adversas.' },
        { term: 'Degrees Celsius / Below freezing', ipa: '/dɪˈɡriːz ˈselsiəs / bɪˈləʊ ˈfriːzɪŋ/', partOfSpeech: 'frases sustantivas', translation: 'Grados Celsius / Bajo cero', example: 'During winter exercises, temperatures drop to five degrees below freezing.', tacticalTip: 'Expresión reglamentaria de temperatura ambiental.' }
      ]
    },
    {
      theme: 'Gastronomía, Menús, Comidas y Recetas (Food, Cooking & Restaurant)',
      description: 'Platos típicos, vocabulario culinario, ingredientes, instrucciones de recetas y servicio de mesa.',
      words: [
        { term: 'Appetizer / Main course / Dessert', ipa: '/ˈæpɪtaɪzə / meɪn kɔːs / dɪˈzɜːt/', partOfSpeech: 'sustantivos', translation: 'Entrada / Plato principal / Postre', example: 'For our main course, we ordered roast lamb with seasonal vegetables.', tacticalTip: 'Diferenciar la pronunciación de "dessert" /dɪˈzɜːt/ de "desert" /ˈdezət/.' },
        { term: 'Chop / Stir / Boil / Bake', ipa: '/tʃɒp / stɜː / bɔɪl / beɪk/', partOfSpeech: 'verbos culinarios', translation: 'Picar / Revolver / Hervir / Hornear', example: 'Chop the onions finely and boil the potatoes for fifteen minutes.', tacticalTip: 'Verbos imperativos típicos en textos instructivos de recetas.' },
        { term: 'Ingredients / Portion / Recipe', ipa: '/ɪnˈɡriːdiənts / ˈpɔːʃn / ˈresəpi/', partOfSpeech: 'sustantivos', translation: 'Ingredientes / Porción / Receta culinaria', example: 'Follow the recipe carefully to prepare four equal portions.', tacticalTip: 'La pronunciación de "recipe" es /ˈresəpi/ con tres sílabas.' },
        { term: 'Cutlery / Napkin / Tip', ipa: '/ˈkʌtləri / ˈnæpkɪn / tɪp/', partOfSpeech: 'sustantivos', translation: 'Cubiertos (cuchillo, tenedor, cuchara) / Servilleta / Propina', example: 'The waiter placed clean cutlery and cloth napkins on the table.', tacticalTip: 'Términos de servicio de salón en restaurantes y casinos.' }
      ]
    },
    {
      theme: 'Salud, Enfermedades, Accidentes y Emergencias (Health, Illnesses & Emergencies)',
      description: 'Síntomas, dolores, enfermedades comunes, accidentes caseros y viales menores, y pedidos de auxilio.',
      words: [
        { term: 'Headache / Sore throat / Fever', ipa: '/ˈhedeɪk / sɔː θrəʊt / ˈfiːvə/', partOfSpeech: 'sustantivos', translation: 'Dolor de cabeza / Dolor de garganta / Fiebre', example: 'He has a high fever, a persistent cough and a severe sore throat.', tacticalTip: 'El sufijo "-ache" suena como /eɪk/ (toothache, stomachache).' },
        { term: 'Cut / Burn / Sprain / Bruise', ipa: '/kʌt / bɜːn / spreɪn / bruːz/', partOfSpeech: 'sustantivos y verbos', translation: 'Corte / Quemadura / Esguince o torcedura / Moretón', example: 'The mechanic suffered a minor burn on his hand and a sprained ankle.', tacticalTip: 'Accidentes domésticos y laborales frecuentes.' },
        { term: 'Collision / Fender-bender / Witness', ipa: '/kəˈlɪʒn / ˈfendə ˈbendə / ˈwɪtnəs/', partOfSpeech: 'sustantivos', translation: 'Colisión / Choque menor sin heridos / Testigo', example: 'Two cars had a minor fender-bender at the intersection; I was an eyewitness.', tacticalTip: 'Vocabulario para declaraciones ante autoridades o policía.' },
        { term: 'Ambulance / Fire engine / Police cruiser', ipa: '/ˈæmbjələns / ˈfaɪər ˌendʒɪn / pəˈliːs ˈkruːzə/', partOfSpeech: 'sustantivos', translation: 'Ambulancia / Autobomba de bomberos / Móvil policial', example: 'Call emergency services immediately and request an ambulance to the scene.', tacticalTip: 'Servicios de respuesta ante emergencias (999 en UK, 911 en US).' },
        { term: 'Prescription / Painkiller / Bandage', ipa: '/prɪˈskrɪpʃn / ˈpeɪnkɪlə / ˈbændɪdʒ/', partOfSpeech: 'sustantivos', translation: 'Receta médica / Analgésico / Venda o vendaje', example: 'The doctor gave him a prescription for antibiotics and painkillers.', tacticalTip: 'Indicaciones médicas y elementos de botiquín.' }
      ]
    },
    {
      theme: 'Tecnología y Vehículos Militares, Unidades y Rangos (Military Tech & Base)',
      description: 'Vehículos tácticos, dependencias de una base militar, divisiones orgánicas y jerarquías.',
      words: [
        { term: 'Main Battle Tank (MBT) / Drone (UAV)', ipa: '/meɪn ˈbætl tæŋk / drəʊn/', partOfSpeech: 'sustantivos', translation: 'Tanque principal de combate / Vehículo aéreo no tripulado (dron)', example: 'Drones provide real-time surveillance for the armoured cavalry unit.', tacticalTip: 'Acrónimos tecnológicos de uso doctrinario actual.' },
        { term: 'Squad / Platoon / Company / Battalion', ipa: '/skwɒd / pləˈtuːn / ˈkʌmpəni / bəˈtæliən/', partOfSpeech: 'sustantivos', translation: 'Grupo de tiradores / Sección / Compañía / Batallón', example: 'A platoon consists of three rifle squads and a command element.', tacticalTip: 'Escalones orgánicos de la fuerza terrestre.' },
        { term: 'Captain / Major / Colonel', ipa: '/ˈkæptɪn / ˈmeɪdʒə / ˈkɜːnl/', partOfSpeech: 'sustantivos', translation: 'Capitán / Mayor / Coronel', example: 'The Colonel commands the brigade headquarters.', tacticalTip: 'En inglés británico "colonel" se pronuncia /ˈkɜːnl/ (con sonido "r").' },
        { term: 'Communications relay / Radar station', ipa: '/kəˌmjuːnɪˈkeɪʃnz ˈriːleɪ / ˈreɪdɑː ˈsteɪʃn/', partOfSpeech: 'sustantivos', translation: 'Puesto repetidor de comunicaciones / Estación de radar', example: 'Engineers secured the mountain communications relay.', tacticalTip: 'Instalaciones críticas en una base militar.' }
      ]
    },
    {
      theme: 'Phrasal Verbs Clave de Uso Cotidiano y de Servicio (Key Phrasal Verbs)',
      description: 'Verbos compuestos de alta frecuencia para situaciones cotidianas, laborales y de seguridad.',
      words: [
        { term: 'Look for', ipa: '/lʊk fɔː/', partOfSpeech: 'phrasal verb', translation: 'Buscar algo o a alguien', example: 'I am looking for the logistics officer\'s room.', tacticalTip: 'No confundir con "look after".' },
        { term: 'Look after', ipa: '/lʊk ˈɑːftə/', partOfSpeech: 'phrasal verb', translation: 'Cuidar / ocuparse de alguien o algo', example: 'The medical orderly looks after wounded personnel.', tacticalTip: 'Sinónimo de "take care of".' },
        { term: 'Try on', ipa: '/traɪ ɒn/', partOfSpeech: 'phrasal verb', translation: 'Probarse ropa o calzado', example: 'Try on the combat boots before leaving the supply store.', tacticalTip: 'Verbo separable: "Try them on".' },
        { term: 'Eat out', ipa: '/iːt aʊt/', partOfSpeech: 'phrasal verb', translation: 'Comer afuera (en un restaurante)', example: 'Officers often eat out at the town bistro on Friday evenings.', tacticalTip: 'Comer fuera de las instalaciones del cuartel o del hogar.' },
        { term: 'Fill in', ipa: '/fɪl ɪn/', partOfSpeech: 'phrasal verb', translation: 'Completar / rellenar un formulario', example: 'Please fill in this customs declaration form in block capitals.', tacticalTip: 'Equivalente británico a "fill out" (US).' },
        { term: 'Watch out', ipa: '/wɒtʃ aʊt/', partOfSpeech: 'phrasal verb', translation: 'Prestar atención / tener cuidado / estar alerta', example: 'Watch out! There is wet paint on that door.', tacticalTip: 'Expresión imperativa de advertencia inmediata.' }
      ]
    }
  ],
  grammar: [
    {
      title: 'Presente Simple vs Presente Continuo: Hábitos, Acciones en Progreso y Verbos de Estado (State Verbs)',
      structureFormula: 'Simple: Suj + Verbo (-s 3ra pers.) | Continuo: Suj + am/is/are + Verbo-ing\nVerbos de Estado (NO admiten continuo): know, understand, believe, want, like, belong, need',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Agente o perceptor', example: 'Lieutenant Evans / We' },
        { position: 2, element: 'Adverbio / Auxiliar to be', function: 'Frecuencia o to be según tiempo', example: 'usually / are' },
        { position: 3, element: 'Verbo Principal / de Estado', function: 'Léxico dinámico o estático', example: 'wants / driving' },
        { position: 4, element: 'Complemento', function: 'Objeto de la oración', example: 'to review the report / to the base right now.' }
      ],
      explanation: 'El Presente Simple describe hábitos y verdades permanentes. El Presente Continuo describe lo que ocurre ahora mismo. REGLA FUNDAMENTAL: Los verbos de estado (State Verbs: know, understand, believe, want, need, prefer, like, love, hate, remember, belong) NUNCA se usan en tiempos continuos, incluso si refieren al momento actual.',
      examples: [
        { english: 'I understand the emergency procedure now.', spanish: 'Entiendo el procedimiento de emergencia ahora (NO: "I am understanding").', notes: 'Verbo de estado en Presente Simple.' },
        { english: 'Captain Scott usually works in the office, but today he is inspecting the motor pool.', spanish: 'El capitán Scott normalmente trabaja en la oficina, pero hoy está inspeccionando el parque de automotores.', notes: 'Contraste entre rutina habitual y actividad temporal en curso.' }
      ],
      commonMistakes: [
        { incorrect: 'I am wanting a glass of water.', correct: 'I want a glass of water.', reason: '"Want" es un verbo de estado y no se conjuga en Presente Continuo.' },
        { incorrect: 'He is knowing the city well.', correct: 'He knows the city well.', reason: '"Know" es un verbo cognitivo de estado; siempre lleva Presente Simple.' }
      ]
    },
    {
      title: 'El Presente Simple en Cláusulas Temporales Futuras (Time Clauses: when, as soon as, before, after, until)',
      structureFormula: 'Cláusula Principal (Futuro: will / imperative) + Conector Temporal (when / as soon as / before / after / until) + Cláusula Temporal (Presente Simple)',
      orderElements: [
        { position: 1, element: 'Cláusula Principal', function: 'Acción que ocurrirá (Will + Verbo Base o Imperativo)', example: 'I will call you / Stand by' },
        { position: 2, element: 'Conector Temporal', function: 'when, as soon as, before, after, until', example: 'as soon as / until' },
        { position: 3, element: 'Sujeto subordinado', function: 'Actor de la condición de tiempo', example: 'the inspector / the relief guard' },
        { position: 4, element: 'Verbo en Presente Simple', function: 'Forma presente obligatoria (NO will)', example: 'arrives at the gate / takes over.' }
      ],
      explanation: 'En inglés, cuando una cláusula subordinada de tiempo se refiere al futuro y está introducida por conectores temporales (WHEN, AS SOON AS, BEFORE, AFTER, UNTIL), el verbo debe ir rigurosamente en PRESENTE SIMPLE, nunca con "will".',
      examples: [
        { english: 'We will depart as soon as the convoy is ready.', spanish: 'Partiremos tan pronto como el convoy esté listo.', notes: '"is ready" en Presente Simple tras "as soon as".' },
        { english: 'Do not sign the contract before you read all the terms.', spanish: 'No firme el contrato antes de que lea todas las cláusulas.', notes: 'Imperativo + before + Presente Simple.' }
      ],
      commonMistakes: [
        { incorrect: 'I will call you when I will arrive.', correct: 'I will call you when I arrive.', reason: 'Tras conectores temporales ("when") se prohíbe el uso de "will"; se usa Presente Simple.' },
        { incorrect: 'We wait until he will come.', correct: 'We will wait until he comes.', reason: 'Tras "until" el verbo va en Presente Simple ("comes").' }
      ]
    },
    {
      title: 'Pasado Simple (Regulares, Irregulares y There was / There were) vs Pasado Continuo',
      structureFormula: 'Past Simple: Suj + Verbo-ed / 2da col. | There was (singular) / There were (plural)\nPast Continuous: Suj + was/were + Verbo-ing\nInterrupción: While + Continuous, Simple Past | Parallel: While + Continuous, Continuous',
      orderElements: [
        { position: 1, element: 'Conector temporal', function: 'While (mientras) o When (cuando)', example: 'While / When' },
        { position: 2, element: 'Acción en desarrollo en el pasado', function: 'Sujeto + was/were + verbo-ing', example: 'the mechanics were repairing the truck,' },
        { position: 3, element: 'Acción puntual o paralela', function: 'Pasado Simple puntual o Pasado Continuo simultáneo', example: 'the power went out / the driver was checking the tires.' }
      ],
      explanation: 'El Pasado Simple expresa acciones finalizadas en un momento determinado del pasado. El Pasado Continuo expresa acciones que estaban en pleno desarrollo en el pasado. Se combinan con WHILE (seguido de continuo: "While I was driving...") y WHEN (seguido de simple: "...when the tire burst"). Dos acciones continuas simultáneas usan continuo en ambas: "While John was cooking, Mary was setting the table".',
      examples: [
        { english: 'There was an accident on the highway yesterday morning.', spanish: 'Hubo un accidente en la autopista ayer por la mañana.', notes: '"There was" para singular en pasado.' },
        { english: 'While the officer was briefing the staff, the alarm sounded.', spanish: 'Mientras el oficial estaba dando las instrucciones al personal, sonó la alarma.', notes: 'Acción continua interrumpida por un suceso puntual.' }
      ],
      commonMistakes: [
        { incorrect: 'There were a meeting yesterday.', correct: 'There was a meeting yesterday.', reason: 'Sustantivo singular ("a meeting") exige "there was".' },
        { incorrect: 'While he slept, someone stole his wallet.', correct: 'While he was sleeping, someone stole his wallet.', reason: 'La acción de fondo que dura en el tiempo tras "while" requiere Pasado Continuo.' }
      ]
    },
    {
      title: 'El Sistema de Futuro: Going to, Will, Present Continuous para Acuerdos, Present Simple para Horarios y "Shall"',
      structureFormula: 'Going to: Planes e intenciones decididas previas / Evidencia presente\nWill: Decisiones instantáneas / Promesas / Predicciones sin evidencia\nPresent Continuous: Citas y acuerdos con hora y persona fijada (arrangements)\nPresent Simple: Horarios fijos de transporte o eventos públicos (schedules)\nShall: Ofrecimientos corteses y sugerencias (Shall I help you? / Shall we go?)',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Persona o entidad que actúa en el futuro', example: 'I / The train / Shall we' },
        { position: 2, element: 'Estructura de futuro', function: 'am going to / will / am meeting / leaves / shall', example: 'am going to / leaves' },
        { position: 3, element: 'Verbo Base o Complemento', function: 'Acción programada', example: 'study logistics tonight / at 0815 sharp tomorrow.' }
      ],
      explanation: 'Cada forma de futuro tiene un matiz funcional: 1) "Going to": intención previa o evidencia física ("Look at the clouds, it\'s going to rain"). 2) "Will": decisión espontánea en el momento ("I\'m tired, I will order tea"), promesas ("I will send the report") y ofrecimientos. 3) Present Continuous: acuerdo confirmado con otra persona o lugar ("I am seeing the doctor at 1600"). 4) Present Simple: horarios oficiales de transporte o instituciones ("The plane lands at 1930"). 5) "Shall": en preguntas con I y We para ofrecer ayuda o proponer planes ("Shall I carry your bag? / Shall we meet at noon?").',
      examples: [
        { english: 'I have already booked the flight; I am travelling to London next Tuesday.', spanish: 'Ya reservé el vuelo; viajo a Londres el próximo martes (acuerdo fijado: Present Continuous).', notes: 'Arreglo futuro confirmado.' },
        { english: 'The train to Bristol departs at zero-nine-thirty hours.', spanish: 'El tren a Bristol sale a las 0930 horas (horario oficial fijo: Present Simple).', notes: 'Horario preestablecido.' },
        { english: 'Shall I open the window, Sir? It is rather warm in here.', spanish: '¿Abro la ventana, señor? Hace bastante calor aquí (ofrecimiento cortés con Shall).', notes: 'Uso de Shall para ofrecer auxilio.' }
      ],
      commonMistakes: [
        { incorrect: 'Will we dance?', correct: 'Shall we dance?', reason: 'Para sugerencias o propuestas con "we" se utiliza "Shall we...?", no "Will we".' },
        { incorrect: 'The flight will leave at 10:00 every day.', correct: 'The flight leaves at 10:00 every day.', reason: 'Los horarios públicos fijos e invariables se expresan con Present Simple.' }
      ]
    },
    {
      title: 'Sistema de Verbos Modales: Can, Could, Must, Mustn\'t, Have to / Have got to, Would, Should',
      structureFormula: 'Sujeto + Modal (can/could/must/have to/would/should) + Verbo Base (sin to)\nNegativos: cannot / couldn\'t / mustn\'t (prohibición) / don\'t have to (no es obligatorio)',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Persona sujeta a la norma, habilidad o consejo', example: 'All personnel / You / Could I' },
        { position: 2, element: 'Verbo Modal', function: 'Habilidad, permiso, prohibición, deber o cortesía', example: 'must / don\'t have to / should' },
        { position: 3, element: 'Verbo Base', function: 'Acción preceptiva', example: 'wear / attend / verify' },
        { position: 4, element: 'Complemento', function: 'Detalle de la instrucción', example: 'safety goggles / the lecture / the tire pressure.' }
      ],
      explanation: 'CAN: habilidad presente ("I can swim") o permiso informal. COULD: habilidad en el pasado ("When I was young, I could run fast") o peticiones formales ("Could you tell me the way?"). MUST: orden interna obligatoria; MUSTN\'T expresa prohibición absoluta. HAVE TO / HAVE GOT TO: deber laboral o norma externa; DON\'T HAVE TO expresa falta de obligación (opcional). WOULD: pedidos cordiales ("I would like... / Would you mind...?"). SHOULD: consejos y recomendaciones ("You should see a doctor").',
      examples: [
        { english: 'You mustn\'t smoke near the fuel tanks; it is strictly prohibited.', spanish: 'No debe fumar cerca de los tanques de combustible; está estrictamente prohibido.', notes: 'Prohibición tajante con "mustn\'t".' },
        { english: 'You don\'t have to work on Sunday; it is your rest day.', spanish: 'No tiene que trabajar el domingo; es su día de descanso (no es obligatorio).', notes: 'Ausencia de obligación con "don\'t have to".' },
        { english: 'You should take this medicine twice a day after meals.', spanish: 'Debería tomar este medicamento dos veces al día después de las comidas.', notes: 'Consejo médico con "should".' }
      ],
      commonMistakes: [
        { incorrect: 'You mustn\'t wear tie if you don\'t want.', correct: 'You don\'t have to wear a tie if you don\'t want to.', reason: 'Si algo es opcional, se usa "don\'t have to", jamás "mustn\'t" (que significaría que está prohibido usarla).' },
        { incorrect: 'He must to sign.', correct: 'He must sign.', reason: 'Los modales no llevan la partícula "to".' }
      ]
    },
    {
      title: 'Condicional Tipo 1 (First Conditional) e Imperativos para Instrucciones Complejas',
      structureFormula: 'Condicional 1: If + Presente Simple, Sujeto + will + Verbo Base (o Imperativo)\nImperativo: Verbo Base + Complemento (afirm.) | Don\'t + Verbo Base (neg.)',
      orderElements: [
        { position: 1, element: 'Cláusula de condición If', function: 'Condición real o probable en el presente', example: 'If you press this red emergency button,' },
        { position: 2, element: 'Resultado o instrucción', function: 'will + verbo o comando directo imperativo', example: 'the alarm will sound immediately / call the engineer.' }
      ],
      explanation: 'El Primer Condicional expresa consecuencias reales y directas en el futuro basadas en una condición presente ("If it rains, we will cancel the sports event"). En instrucciones operativas o de funcionamiento de aparatos, la cláusula de resultado puede ser una orden imperativa directa: "If the red light flashes, shut down the generator immediately".',
      examples: [
        { english: 'If you fail the driving test, you will retake it next month.', spanish: 'Si repruebas el examen de conducir, lo rendirás de nuevo el mes próximo.', notes: 'Condición real futura.' },
        { english: 'First, insert the card into the slot; then, enter your PIN and press enter.', spanish: 'Primero, inserte la tarjeta en la ranura; luego, ingrese su PIN y presione confirmar.', notes: 'Secuencia imperativa para uso de aparatos.' }
      ],
      commonMistakes: [
        { incorrect: 'If it will rain, we won\'t go.', correct: 'If it rains, we won\'t go.', reason: 'La cláusula que contiene "if" nunca lleva "will".' }
      ]
    },
    {
      title: 'Orden de los Adjetivos y Formas Comparativas y Superlativas (Regulares e Irregulares)',
      structureFormula: 'Orden de adjetivos: Opinión + Tamaño + Edad + Forma + Color + Origen + Material + Sustantivo\nComparativo corto (-er than) / largo (more ... than) | Superlativo corto (the -est) / largo (the most ...)\nIrregulares: good/better/best | bad/worse/worst | far/further/furthest',
      orderElements: [
        { position: 1, element: 'Sujeto / Primer elemento', function: 'Objeto o persona comparada', example: 'This new military transport' },
        { position: 2, element: 'Verbo to be', function: 'is / was', example: 'is' },
        { position: 3, element: 'Grado comparativo o superlativo', function: 'more comfortable than / the fastest', example: 'much faster and more reliable than' },
        { position: 4, element: 'Segundo elemento de referencia', function: 'Punto de comparación', example: 'the previous model.' }
      ],
      explanation: 'Cuando se acumulan adjetivos antes de un sustantivo, se sigue el orden canónico inglés: Opinion (comfortable), Size (large), Age (new), Shape (round), Colour (dark-green), Origin (British), Material (leather). En comparaciones: adjetivos de 1 sílaba agregan -er (taller than); adjetivos de 2 sílabas terminados en -y cambian a -ier (easier than); adjetivos de 2 o más sílabas usan more (more expensive than). Superlativos usan "the" + -est o "the most".',
      examples: [
        { english: 'He bought a comfortable modern black leather office chair.', spanish: 'Compró un cómodo sillón de oficina moderno, de cuero negro (Opinión + Edad + Color + Material).', notes: 'Secuencia estandarizada de adjetivos.' },
        { english: 'Health is far more important than wealth.', spanish: 'La salud es mucho más importante que la riqueza.', notes: 'Comparativo largo con "more... than".' },
        { english: 'That was the worst storm in twenty years.', spanish: 'Esa fue la peor tormenta en veinte años (superlativo irregular de bad).', notes: 'Superlativo irregular "the worst".' }
      ],
      commonMistakes: [
        { incorrect: 'This car is more cheap than that one.', correct: 'This car is cheaper than that one.', reason: '"Cheap" es monosílabo; su comparativo es "cheaper", no "more cheap".' },
        { incorrect: 'He is the most good driver.', correct: 'He is the best driver.', reason: 'El superlativo de "good" es irregular: "the best".' }
      ]
    },
    {
      title: 'Pronombres Posesivos, Pronombres Objeto, Genitivo Sajón y Pronombres Indefinidos',
      structureFormula: 'Pronombres Posesivos: mine, yours, his, hers, ours, theirs (reemplazan al sustantivo)\nPronombres Objeto: me, you, him, her, it, us, them (tras verbos y preposiciones)\nGenitivo Sajón: Nombre/Rango + \'s (The Colonel\'s office / The soldiers\' gear)\nIndefinidos: Some / Any / No / Every + -thing / -body / -one',
      orderElements: [
        { position: 1, element: 'Sujeto / Pronombre Indefinido', function: 'Actor o entidad genérica', example: 'Somebody / Is anyone' },
        { position: 2, element: 'Verbo en singular (con indefinidos)', function: 'Tercera persona singular obligatoria', example: 'has left / listening' },
        { position: 3, element: 'Complemento con Posesivo / Objeto', function: 'Indica posesión o destino', example: 'a notebook on my desk; is it yours?' }
      ],
      explanation: 'Los adjetivos posesivos (my, your, his, her, our, their) anteceden al sustantivo; los pronombres posesivos (mine, yours, his, hers, ours, theirs) van solos y reemplazan al sustantivo ("This coat is mine"). El Genitivo Sajón lleva apóstrofo y \'s en singulares ("the doctor\'s car") y solo apóstrofo tras plurales regulares en -s ("the teachers\' room"). Los pronombres indefinidos (someone, anyone, nothing, everywhere) SIEMPRE rigen verbo en singular.',
      examples: [
        { english: 'Everyone is ready for the morning inspection.', spanish: 'Todos están listos para la inspección matutina (Everyone rige verbo singular "is").', notes: 'Concordancia en singular con pronombres indefinidos.' },
        { english: 'That laptop is not mine; I gave it to her yesterday.', spanish: 'Esa computadora portátil no es mía; se la entregué a ella ayer.', notes: 'Uso de pronombre posesivo (mine) y pronombre objeto (her).' }
      ],
      commonMistakes: [
        { incorrect: 'Everybody are here.', correct: 'Everybody is here.', reason: '"Everybody" es gramaticalmente singular y exige el verbo "is".' },
        { incorrect: 'This is the car of my brother.', correct: 'This is my brother\'s car.', reason: 'En inglés natural para personas se usa el genitivo sajón con apóstrofo \'s.' }
      ]
    },
    {
      title: 'Sustantivos Contables e Incontables, Plurales Irregulares y Cuantificadores (How much/many)',
      structureFormula: 'How much + Incontable (much, a little, a bit of, a lot of) -> dinero, tiempo, agua, información\nHow many + Contable Plural (many, a few, lots of) -> personas, coches, sillas, libros\nPlurales Irregulares: man/men, woman/women, child/children, foot/feet, tooth/teeth, person/people, aircraft/aircraft',
      orderElements: [
        { position: 1, element: 'Interrogativo de cantidad', function: 'How much (incontable) o How many (contable plural)', example: 'How much / How many' },
        { position: 2, element: 'Sustantivo correspondiente', function: 'Líquido, masa o unidad enumerable', example: 'fuel / soldiers' },
        { position: 3, element: 'Auxiliar e Inversión', function: 'Estructura interrogativa o negativa', example: 'do we have / were injured in the accident?' }
      ],
      explanation: 'Sustantivos incontables no tienen plural ni admiten "a/an" (water, luggage, advice, information, equipment, furniture, money). Usan "how much", "much" (en negativas/preguntas), "a little" (un poco) o "a lot of". Sustantivos contables tienen forma plural (regular con -s o irregular) y usan "how many", "many", "a few" (unos pocos) o "a lot of".',
      examples: [
        { english: 'How many children are there in the primary school?', spanish: '¿Cuántos niños hay en la escuela primaria? (plural irregular: children).', notes: 'Uso de how many con plural irregular.' },
        { english: 'We have very little time left before the gates close.', spanish: 'Nos queda muy poco tiempo antes de que cierren los portones ("little" con incontable time).', notes: 'Cuantificador para incontable.' }
      ],
      commonMistakes: [
        { incorrect: 'How many furnitures did you buy?', correct: 'How much furniture did you buy?', reason: '"Furniture" es estrictamente incontable en inglés; no lleva -s y usa "how much".' },
        { incorrect: 'There were three mans in the car.', correct: 'There were three men in the car.', reason: 'El plural de "man" es irregular: "men".' }
      ]
    },
    {
      title: 'Verbos de Preferencia con Gerundio (Like / Love / Hate + -ing because...) y Conectores Discursivos',
      structureFormula: 'Sujeto + like / love / enjoy / hate + Verbo-ing + because + Razón\nConectores: Adición (also), Condición (if), Consecuencia (so), Ejemplificación (for example), Secuencia temporal (First, Then, Next, After that, Finally; As soon as)',
      orderElements: [
        { position: 1, element: 'Conector de secuencia / Sujeto', function: 'Orden cronológico o emisor', example: 'First, / I love' },
        { position: 2, element: 'Verbo de gusto + Gerundio', function: 'like/hate + -ing', example: 'jogging in the park' },
        { position: 3, element: 'Conector de causa o consecuencia', function: 'because / so / also', example: 'because it helps me stay fit, so I do it every morning.' }
      ],
      explanation: 'Los verbos de emoción o preferencia (like, love, enjoy, prefer, hate, can\'t stand) rigen habitualmente la forma en -ing del verbo siguiente para expresar actividades que se disfrutan o detestan. Los conectores estructuran discursos coherentes: ALSO (adición), IF (condición), SO (consecuencia: "I was tired, so I went to bed"), FOR EXAMPLE (ejemplificación), y la secuencia cronológica: FIRST, THEN, NEXT, AFTER THAT, FINALLY.',
      examples: [
        { english: 'She loves working outdoors because she hates sitting in an office all day.', spanish: 'Le encanta trabajar al aire libre porque detesta estar sentada en una oficina todo el día.', notes: 'Uso de -ing tras love y hate con conector because.' },
        { english: 'The road was flooded, so we had to find an alternative route.', spanish: 'El camino estaba anegado, por lo que tuvimos que buscar una ruta alternativa (consecuencia con "so").', notes: 'Conector de consecuencia.' }
      ],
      commonMistakes: [
        { incorrect: 'I enjoy to play tennis.', correct: 'I enjoy playing tennis.', reason: '"Enjoy" exige obligatoriamente gerundio (-ing) a continuación.' },
        { incorrect: 'It rained, because we stayed home.', correct: 'It rained, so we stayed home.', reason: 'Para expresar la consecuencia de un hecho se usa "so", no "because".' }
      ]
    }
  ],
  phonetics: [
    {
      title: 'La Pronunciación de la Terminación Regular -ED en Pasado (/t/, /d/, /ɪd/)',
      soundIpa: '/t/, /d/, /ɪd/',
      description: 'Regla sistemática de articulación de verbos regulares en tiempo pasado indispensable para relatos operacionales y narración de sucesos.',
      articulatoryGuide: 'Vibración laríngea: /t/ tras consonantes sordas (/p, k, s, ʃ, tʃ, f/); /d/ tras vocales y consonantes sonoras (/b, ɡ, v, m, n, l, r, z/); /ɪd/ agrega una sílaba adicional únicamente tras /t/ o /d/.',
      rules: [
        'Tras sonidos sordos: checked /tʃekt/, washed /wɒʃt/, watched /wɒtʃt/, liked /laɪkt/.',
        'Tras sonidos sonoros: arrived /əˈraɪvd/, cleaned /kliːnd/, called /kɔːld/, played /pleɪd/.',
        'Tras /t/ o /d/ agrega sílaba /ɪd/: visited /ˈvɪzɪtɪd/, started /ˈstɑːtɪd/, decided /dɪˈsaɪdɪd/, landed /ˈlændɪd/.'
      ],
      practiceWords: [
        { word: 'checked', ipa: '/tʃekt/', stressPattern: 'CHECKED (/t/)', translation: 'verificó' },
        { word: 'arrived', ipa: '/əˈraɪvd/', stressPattern: 'ar-RIVED (/d/)', translation: 'llegó' },
        { word: 'started', ipa: '/ˈstɑːtɪd/', stressPattern: 'STAR-ted (/ɪd/)', translation: 'comenzó' },
        { word: 'decided', ipa: '/dɪˈsaɪdɪd/', stressPattern: 'de-CI-ded (/ɪd/)', translation: 'decidió' }
      ]
    },
    {
      title: 'Entonación y Modulación: Preguntas Directas, Peticiones y Fórmulas Radiales',
      soundIpa: 'Rising vs Falling Intonation',
      description: 'Diferenciación de patrones de entonación para preguntas de sí/no (ascendente) frente a preguntas Wh- (descendente).',
      articulatoryGuide: 'Las preguntas cerradas (Yes/No questions) elevan el tono al final de la frase (↗). Las preguntas de información (Wh- questions) descienden al final (↘). Las órdenes e instrucciones imperativas mantienen una curva descendente firme.',
      rules: [
        'Yes/No: Are you staying at the hotel? ↗ (ascendente).',
        'Wh-: What time does the flight depart? ↘ (descendente).',
        'Peticiones formales: Could you repeat that, please? ↗ (suavemente ascendente).'
      ],
      practiceWords: [
        { word: 'Could you help me?', ipa: '/kʊd ju help miː/ ↗', stressPattern: 'Rising', translation: '¿Podría ayudarme?' },
        { word: 'Where is the station?', ipa: '/weər ɪz ðə ˈsteɪʃn/ ↘', stressPattern: 'Falling', translation: '¿Dónde está la estación?' }
      ]
    },
    {
      title: 'Pares Mínimos y Sonidos Vocálicos Críticos en Nivel 2',
      soundIpa: '/iː/ vs /ɪ/, /ʊ/ vs /uː/, /æ/ vs /ʌ/',
      description: 'Discriminación acústica de vocales breves y largas fundamentales para evitar equívocos en compras, comida y trabajo.',
      articulatoryGuide: 'La tensión muscular en los labios y lengua marca la diferencia entre vocales tensas largas y vocales breves relajadas.',
      rules: [
        'Sheep /ʃiːp/ (oveja) vs Ship /ʃɪp/ (buque o navío).',
        'Leave /liːv/ (partir/salir) vs Live /lɪv/ (vivir/residir).',
        'Men /men/ (hombres) vs Man /mæn/ (hombre singular).',
        'Cup /kʌp/ (taza) vs Cap /kæp/ (gorra militar).'
      ],
      practiceWords: [
        { word: 'leave', ipa: '/liːv/', stressPattern: 'vocal larga /iː/', translation: 'partir / licencia' },
        { word: 'live', ipa: '/lɪv/', stressPattern: 'vocal breve /ɪ/', translation: 'vivir' }
      ],
      minimalPairs: [
        { word1: 'leave', ipa1: '/liːv/', meaning1: 'partir / salir', word2: 'live', ipa2: '/lɪv/', meaning2: 'vivir / residir' },
        { word1: 'chip', ipa1: '/tʃɪp/', meaning1: 'papas fritas / circuito', word2: 'cheap', ipa2: '/tʃiːp/', meaning2: 'económico / barato' },
        { word1: 'fit', ipa1: '/fɪt/', meaning1: 'quedar bien (talle)', word2: 'feet', ipa2: '/fiːt/', meaning2: 'pies (plural)' }
      ]
    }
  ],
  usefulPhrases: [
    {
      communicativeFunction: 'Compras: Pedir Productos, Comparar Precios y Probarse Prendas',
      situation: 'En una tienda de ropa o centro comercial solicitando talles, precios y probadores.',
      phrases: [
        { english: 'Excuse me, how much is this jacket? Is it on sale?', spanish: 'Disculpe, ¿cuánto cuesta esta campera? ¿Está en liquidación?', usageNote: 'Pregunta estándar de precio en comercios.', register: 'Neutro' },
        { english: 'Could I try this shirt on in a larger size, please? Where are the fitting rooms?', spanish: '¿Podría probarme esta camisa en un talle más grande, por favor? ¿Dónde están los probadores?', usageNote: 'Solicitud para probarse vestimenta.', register: 'Neutro' },
        { english: 'This laptop is much lighter and more affordable than the other model.', spanish: 'Esta computadora portátil es mucho más liviana y económica que el otro modelo.', usageNote: 'Comparación argumentada de productos.', register: 'Neutro' },
        { english: 'I will take it. Do you accept credit cards or only cash?', spanish: 'Me lo llevo. ¿Aceptan tarjeta de crédito o solo efectivo?', usageNote: 'Decisión de compra y consulta sobre formas de pago.', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'En el Restaurante: Reservar Mesa, Ordenar y Consultar la Cuenta',
      situation: 'Almorzar o cenar en un restaurante, solicitar recomendaciones de platos y abonar.',
      phrases: [
        { english: 'Good evening. We booked a table for four under the name of Perez.', spanish: 'Buenas noches. Reservamos una mesa para cuatro personas a nombre de Pérez.', usageNote: 'Confirmación de reserva.', register: 'Neutro' },
        { english: 'What do you recommend for the main course? Does this dish contain nuts or dairy?', spanish: '¿Qué nos recomienda como plato principal? ¿Este plato contiene frutos secos o lácteos?', usageNote: 'Consulta sobre el menú y alérgenos.', register: 'Neutro' },
        { english: 'Could we have the bill, please? We would like to pay separately.', spanish: '¿Nos trae la cuenta, por favor? Nos gustaría pagar por separado.', usageNote: 'Cierre del servicio y división de cuenta.', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'Comunicaciones Telefónicas: Identificarse, Transferir y Dejar Mensajes',
      situation: 'Llamadas administrativas u oficiales en dependencias o empresas.',
      phrases: [
        { english: 'Hello, this is Captain Ramos speaking. May I speak to the logistics coordinator, please?', spanish: 'Hola, habla el capitán Ramos. ¿Podría hablar con el coordinador de logística, por favor?', usageNote: 'Presentación formal en llamadas telefónicas.', register: 'Formal / Táctico' },
        { english: 'I am afraid she is away from her desk at the moment. Would you like to leave a message?', spanish: 'Me temo que ella no está en su escritorio en este momento. ¿Le gustaría dejar un recado?', usageNote: 'Atención protocolar ante ausencia.', register: 'Formal / Táctico' },
        { english: 'Could you ask her to call me back as soon as possible on zero-two-zero, five-five-four?', spanish: '¿Podría pedirle que me devuelva el llamado lo antes posible al 020-554?', usageNote: 'Solicitud de devolución de llamada.', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'Salud, Consultas Médicas y Descripción de Dolores o Síntomas',
      situation: 'Consulta en la enfermería, hospital o farmacia describiendo malestares.',
      phrases: [
        { english: 'Good morning, Doctor. I have had a severe headache and a high fever since yesterday.', spanish: 'Buenos días, doctor. He tenido un fuerte dolor de cabeza y fiebre alta desde ayer.', usageNote: 'Descripción de síntomas con Present Perfect.', register: 'Neutro' },
        { english: 'I slipped on the wet stairs and twisted my left ankle; it is very swollen and painful.', spanish: 'Me resbalé en las escaleras mojadas y me torcí el tobillo izquierdo; está muy hinchado y dolorido.', usageNote: 'Relato de accidente doméstico en Pasado Simple.', register: 'Neutro' },
        { english: 'You should rest for three days and take these painkillers every eight hours.', spanish: 'Debería guardar reposo por tres días y tomar estos analgésicos cada ocho horas.', usageNote: 'Recomendación médica con "should".', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'Solicitar Auxilio en Emergencias y Declarar ante la Policía',
      situation: 'Llamar al servicio de emergencias (999/911) o reportar un accidente vial o robo.',
      phrases: [
        { english: 'Emergency services: which service do you require — police, fire, or ambulance?', spanish: 'Servicios de emergencia: ¿qué servicio requiere — policía, bomberos o ambulancia?', usageNote: 'Pregunta protocolar del operador de emergencias en el Reino Unido.', register: 'Formal / Táctico' },
        { english: 'We need an ambulance immediately at the crossroads of Oak Street and 5th Avenue. Two people are injured.', spanish: 'Necesitamos una ambulancia de inmediato en el cruce de Oak Street y 5th Avenue. Hay dos personas heridas.', usageNote: 'Pedido perentorio de auxilio.', register: 'Formal / Táctico' },
        { english: 'I witnessed a hit-and-run accident: a dark blue sedan struck a parked van and fled northbound.', spanish: 'Fui testigo de un choque con fuga: un sedán azul oscuro chocó a una camioneta estacionada y huyó hacia el norte.', usageNote: 'Declaración testimonial formal para parte policial.', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Descripción de Tareas Laborales y Organigrama de la Unidad',
      situation: 'Entrevistas de trabajo, presentaciones de servicio o briefings sobre funciones.',
      phrases: [
        { english: 'I report directly to the Chief of Operations, and I supervise a team of twelve technicians.', spanish: 'Dependo directamente del Jefe de Operaciones y superviso un equipo de doce técnicos.', usageNote: 'Explicación de jerarquía y dependencia en organigrama.', register: 'Formal / Táctico' },
        { english: 'My daily responsibilities include maintaining radio networks and drafting weekly logistics reports.', spanish: 'Mis responsabilidades diarias incluyen mantener las redes de radio y redactar los informes logísticos semanales.', usageNote: 'Detalle de tareas habituales.', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Interacción Social: Pedir Aclaración, Interrumpir y Expresar Opinión',
      situation: 'Conversaciones entre colegas o en reuniones internacionales.',
      phrases: [
        { english: 'Pardon me for interrupting, but could you clarify what you mean by that?', spanish: 'Perdón por interrumpir, pero ¿podría aclarar qué quiso decir con eso?', usageNote: 'Interrupción cortés y solicitud de aclaración.', register: 'Neutro' },
        { english: 'Could you please speak a little more slowly? I didn\'t catch that last figure.', spanish: '¿Podría hablar un poco más despacio, por favor? No alcancé a captar esa última cifra.', usageNote: 'Solicitud de repetición o ritmo más pausado.', register: 'Neutro' },
        { english: 'In my opinion, option B is far more practical because it saves both time and fuel.', spanish: 'En mi opinión, la opción B es mucho más práctica porque ahorra tanto tiempo como combustible.', usageNote: 'Expresión fundamentada de opinión personal.', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'Viajes y Hotelería: Check-in, Servicios y Direcciones',
      situation: 'Llegada al hotel, consulta de comodidades y orientación hacia lugares turísticos.',
      phrases: [
        { english: 'Good afternoon. I have a reservation for a single room for three nights. Is breakfast included?', spanish: 'Buenas tardes. Tengo una reserva de habitación individual por tres noches. ¿El desayuno está incluido?', usageNote: 'Trámite de ingreso hotelero.', register: 'Neutro' },
        { english: 'Excuse me, could you tell me the best way to get to the railway station from here?', spanish: 'Disculpe, ¿podría indicarme cuál es la mejor manera de llegar a la estación de tren desde aquí?', usageNote: 'Solicitud de indicaciones viales.', register: 'Neutro' }
      ]
    }
  ]
};
