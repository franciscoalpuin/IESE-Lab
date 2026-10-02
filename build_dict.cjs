const fs = require('fs');
const path = require('path');

const entries = [];
const seen = new Set();

function add(en, es, cat, pos, phoEn, phoEs, def, exEn, exEs) {
  const norm = en.toLowerCase().trim();
  if (seen.has(norm)) return;
  seen.add(norm);
  const id = norm.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  entries.push({
    id,
    en: en.trim(),
    es: es.trim(),
    category: cat,
    partOfSpeech: pos,
    phoneticEn: phoEn || '',
    phoneticEs: phoEs || '',
    definitionEs: def || `Término bilingüe: ${es}.`,
    exampleEn: exEn || `Operational usage: ${en}.`,
    exampleEs: exEs || `Uso operacional: ${es}.`
  });
}

// Read word lists from multi-domain table
const domains = [
  {
    cat: "Tactical & Combat",
    words: [
      ["advance", "avanzar / avance", "verb & noun", "/ədˈvɑːns/", "ad-váns", "Movimiento de tropas hacia el frente.", "The platoon will advance across the valley.", "La sección avanzará a través del valle."],
      ["ambush", "emboscada", "noun & verb", "/ˈæm.bʊʃ/", "ám-bush", "Ataque por sorpresa desde posición oculta.", "The patrol set up an ambush near the road.", "La patrulla preparó una emboscada cerca del camino."],
      ["assault", "asalto / asaltar", "noun & verb", "/əˈsɔːlt/", "a-sólt", "Fase culminante y violenta de un ataque.", "Infantry launched an assault on the bunker.", "La infantería lanzó un asalto sobre el búnker."],
      ["barrage", "fuego de barrera", "noun", "/ˈbær.ɑːʒ/", "bá-raash", "Fuego masivo continuo de artillería.", "Artillery barrage suppressed enemy positions.", "El fuego de barrera artillero suprimió las posiciones enemigas."],
      ["battlefield", "campo de batalla", "noun", "/ˈbæt.əl.fiːld/", "bát-el-fild", "Zona donde se combate militarmente.", "Medics evacuated casualties from the battlefield.", "Los enfermeros evacuaron bajas del campo de batalla."],
      ["beachhead", "cabeza de playa", "noun", "/ˈbiːtʃ.hed/", "bíich-jed", "Posición costera asegurada para desembarco.", "Marines secured the beachhead under fire.", "Los infantes de marina aseguraron la cabeza de playa bajo fuego."],
      ["blockade", "bloqueo", "noun & verb", "/blɒkˈeɪd/", "blok-éid", "Aislamiento impuesto para cortar suministros.", "The naval blockade halted enemy supply ships.", "El bloqueo naval detuvo los barcos de abastecimiento enemigos."],
      ["breakthrough", "ruptura táctica", "noun", "/ˈbreɪk.θruː/", "bréik-zru", "Acción de quebrar las defensas enemigas.", "Armour achieved a breakthrough on the flank.", "Los blindados lograron una ruptura en el flanco."],
      ["bridgehead", "cabeza de puente", "noun", "/ˈbrɪdʒ.hed/", "brídch-jed", "Posición en la orilla opuesta de un río.", "Troops held the bridgehead until relieved.", "Las tropas sostuvieron la cabeza de puente hasta ser relevadas."],
      ["casualty", "baja (militar)", "noun", "/ˈkæʒ.ju.əl.ti/", "kásh-ual-ti", "Militar muerto, herido o desaparecido.", "The unit sustained zero casualties during the raid.", "La unidad no sufrió bajas durante la incursión."],
      ["ceasefire", "alto el fuego", "noun", "/ˈsiːs.faɪər/", "síis-fáier", "Suspensión de combates acordada.", "Both parties agreed to an immediate ceasefire.", "Ambas partes acordaron un alto el fuego inmediato."],
      ["checkpoint", "puesto de control", "noun", "/ˈtʃek.pɔɪnt/", "chék-point", "Puesto para controlar personas y vehículos.", "Sentries manned the vehicular checkpoint.", "Los centinelas guarnecieron el puesto de control vehicular."],
      ["choke point", "punto de estrangulamiento", "noun", "/ˈtʃəʊk pɔɪnt/", "chóuk point", "Paso estrecho que canaliza tropas.", "The narrow mountain pass was a deadly choke point.", "El estrecho paso de montaña era un punto de estrangulamiento letal."],
      ["close air support", "apoyo aéreo cercano (CAS)", "noun", "/kləʊs eə səˈpɔːt/", "clóus éar sa-pórt", "Ataque aéreo cerca de fuerzas amigas.", "The commander requested close air support.", "El comandante solicitó apoyo aéreo cercano."],
      ["combat patrol", "patrulla de combate", "noun", "/ˈkɒm.bæt pəˈtrəʊl/", "kóm-bat pa-tróul", "Patrulla enviada a destruir al enemigo.", "A combat patrol intercepted the hostile group.", "Una patrulla de combate interceptó al grupo hostil."],
      ["combined arms", "armas combinadas", "noun", "/kəmˈbaɪnd ɑːmz/", "com-báind áarms", "Integración de infantería, blindados y artillería.", "Combined arms operations require close coordination.", "Las operaciones de armas combinadas requieren estrecha coordinación."],
      ["command post", "puesto de mando (CP)", "noun", "/kəˈmɑːnd pəʊst/", "ca-mánd póust", "Centro donde el jefe dirige la operación.", "Headquarters was established at the command post.", "El cuartel general se estableció en el puesto de mando."],
      ["concealment", "ocultamiento", "noun", "/kənˈsiːl.mənt/", "con-síil-ment", "Protección contra la vista enemiga.", "Foliage provides concealment from drones.", "El follaje brinda ocultamiento frente a drones."],
      ["cover", "cubierta / cobertura", "noun & verb", "/ˈkʌv.ər/", "kóv-er", "Protección contra balas y metralla.", "Take cover behind the stone wall!", "¡Póngase a cubierto detrás del muro de piedra!"],
      ["counter-attack", "contraataque", "noun & verb", "/ˈkaʊn.tər.ə.tæk/", "káun-ter-aták", "Ataque defensivo para recuperar terreno.", "The battalion mounted an immediate counter-attack.", "El batallón organizó un contraataque inmediato."],
      ["cordon and search", "acordonamiento y registro", "noun", "/ˈkɔː.dən ənd sɜːtʃ/", "kóor-don and séerch", "Operación para aislar y registrar una zona.", "Troops carried out a cordon and search operation.", "Las tropas realizaron una operación de acordonamiento y registro."],
      ["defensive perimeter", "perímetro defensivo", "noun", "/dɪˈfen.sɪv pəˈrɪm.ɪ.tər/", "di-fén-siv pe-rím-eter", "Línea de seguridad en 360°.", "Sentries guarded the defensive perimeter.", "Los centinelas custodiaron el perímetro defensivo."],
      ["deploy", "desplegar", "verb", "/dɪˈplɔɪ/", "di-plói", "Posicionar unidades o armas en el terreno.", "The brigade will deploy two companies to the sector.", "La brigada desplegará dos compañías en el sector."],
      ["deployment", "despliegue", "noun", "/dɪˈplɔɪ.mənt/", "di-plói-ment", "Traslado de tropas al teatro operativo.", "Their overseas deployment lasted six months.", "Su despliegue en el exterior duró seis meses."],
      ["direct fire", "tiro directo", "noun", "/daɪˈrekt ˈfaɪər/", "dai-rékt fáier", "Fuego con visión directa del blanco.", "Tanks engaged with direct fire at two thousand metres.", "Los tanques batieron con tiro directo a dos mil metros."],
      ["disengage", "romper el contacto", "verb", "/ˌdɪs.ɪŋˈɡeɪdʒ/", "dis-in-guéidch", "Interrumpir el combate y replegarse.", "The patrol disengaged under cover of smoke.", "La patrulla rompió el contacto bajo cobertura de humo."],
      ["dismounted", "desmontado / a pie", "adjective", "/dɪsˈmaʊn.tɪd/", "dis-máun-tid", "Tropas que operan a pie fuera del vehículo.", "The mechanized squad carried out a dismounted patrol.", "La escuadra mecanizada realizó una patrulla desmontada."],
      ["drop zone", "zona de lanzamiento (DZ)", "noun", "/ˈdrɒp zəʊn/", "drop zóun", "Área para caída de paracaidistas.", "Paratroopers landed precisely on the drop zone.", "Los paracaidistas aterrizaron con precisión en la zona de lanzamiento."],
      ["encirclement", "cerco militar", "noun", "/ɪnˈsɜː.kəl.mənt/", "in-séer-kel-ment", "Maniobra que aísla al enemigo por todos lados.", "The army avoided enemy encirclement.", "El ejército evitó el cerco enemigo."],
      ["engagement", "combate / enfrentamiento", "noun", "/ɪnˈɡeɪdʒ.mənt/", "in-guéidch-ment", "Contacto armado entre fuerzas opuestas.", "Rules of engagement authorize self-defence.", "Las reglas de enfrentamiento autorizan la legítima defensa."],
      ["evacuation", "evacuación", "noun", "/ɪˌvæk.juˈeɪ.ʃən/", "i-vak-iu-éishon", "Traslado de personas fuera del peligro.", "Helicopters carried out a casualty evacuation.", "Los helicópteros ejecutaron una evacuación de bajas."],
      ["extraction", "extracción", "noun", "/ɪkˈstræk.ʃən/", "eks-trák-shon", "Evacuación de tropas de territorio hostil.", "The special unit reached the extraction point.", "La unidad especial alcanzó el punto de extracción."],
      ["fire and movement", "fuego y maniobra", "noun", "/faɪər ənd ˈmuːv.mənt/", "fáier and múuv-ment", "Un elemento dispara mientras otro avanza.", "Infantry platoons train heavily in fire and movement.", "Las secciones de infantería se entrenan intensamente en fuego y maniobra."],
      ["fire support", "apoyo de fuegos", "noun", "/ˈfaɪə səˌpɔːt/", "fáier sa-pórt", "Fuegos que asisten a las tropas de maniobra.", "Mortars provided rapid fire support.", "Los morteros proporcionaron apoyo de fuegos rápido."],
      ["flank", "flanco", "noun & verb", "/flæŋk/", "flank", "Costado de una formación militar.", "Cavalry protected the vulnerable left flank.", "La caballería protegió el flanco izquierdo vulnerable."],
      ["forward operating base", "base avanzada (FOB)", "noun", "/ˈfɔː.wəd ˈɒp.ər.eɪ.tɪŋ beɪs/", "fór-uerd op-er-éiting béis", "Base segura cercana al frente.", "Supplies arrived at the forward operating base.", "Los suministros llegaron a la base de operaciones avanzada."],
      ["friendly fire", "fuego amigo", "noun", "/ˈfrend.li ˈfaɪər/", "frénd-li fáier", "Fuego propio que daña a tropas amigas.", "Protocols were updated to prevent friendly fire.", "Se actualizaron protocolos para prevenir el fuego amigo."],
      ["harassment", "hostigamiento", "noun", "/ˈhær.əs.mənt/", "jár-as-ment", "Fuego intermitente para desgastar al adversario.", "Sniper harassment kept enemies inside bunkers.", "El hostigamiento de francotiradores mantuvo a los enemigos dentro de los búnkeres."],
      ["incursion", "incursión", "noun", "/ɪnˈkɜː.ʃən/", "in-kér-shon", "Ataque rápido y delimitado en territorio enemigo.", "Border guards repelled a hostile incursion.", "Los guardias fronterizos repelieron una incursión hostil."],
      ["indirect fire", "tiro indirecto", "noun", "/ˌɪn.daɪˈrekt ˈfaɪər/", "in-dai-rékt fáier", "Tiro sobre blancos no visibles (artillería).", "Howitzers fired indirect fire at grid coordinates.", "Los obuses ejecutaron tiro indirecto a coordenadas de cuadrícula."],
      ["infiltration", "infiltración", "noun", "/ˌɪn.fɪlˈtreɪ.ʃən/", "in-fil-tréishon", "Entrada sigilosa a través de líneas enemigas.", "Commandos executed a stealthy infiltration.", "Los comandos ejecutaron una infiltración sigilosa."],
      ["landing zone", "zona de aterrizaje (LZ)", "noun", "/ˈlæn.dɪŋ zəʊn/", "lán-ding zóun", "Lugar para posarse helicópteros.", "Smoke canisters marked the landing zone.", "Botes de humo marcaron la zona de aterrizaje."],
      ["manoeuvre", "maniobra", "noun & verb", "/məˈnuː.vər/", "ma-núu-ver", "Movimiento de fuerzas para ganar ventaja táctica.", "Armoured manoeuvre disoriented the defender.", "La maniobra blindada desorientó al defensor."],
      ["neutralize", "neutralizar", "verb", "/ˈnjuː.trə.laɪz/", "niúu-tra-lais", "Inutilizar o destruir una amenaza.", "The air strike neutralized the radar battery.", "El ataque aéreo neutralizó la batería de radar."],
      ["objective", "objetivo militar", "noun", "/əbˈdʒek.tɪv/", "ob-dchék-tiv", "Misión o lugar fijado para ser capturado.", "Alpha Company secured the hill objective.", "La Compañía Alfa aseguró el objetivo de la colina."],
      ["observation post", "puesto de observación (OP)", "noun", "/ˌɒb.zəˈveɪ.ʃən pəʊst/", "ob-zer-véishon póust", "Puesto para vigilar al enemigo.", "Scouts operated an observation post on the ridge.", "Los exploradores operaron un puesto de observación en la cresta."],
      ["offensive", "ofensiva", "noun & adjective", "/əˈfen.sɪv/", "o-fén-siv", "Ataque coordinado a gran escala.", "The division launched an offensive across the river.", "La división lanzó una ofensiva a través del río."],
      ["perimeter defense", "defensa perimétrica", "noun", "/pəˈrɪm.ɪ.tər dɪˈfens/", "pe-rím-eter di-féns", "Defensa en 360 grados.", "Troops set up perimeter defense around the crash.", "Las tropas montaron defensa perimétrica alrededor del accidente."],
      ["pincer movement", "movimiento de pinza", "noun", "/ˈpɪn.sər ˈmuːv.mənt/", "pín-ser múuv-ment", "Ataque coordinado sobre ambos flancos.", "The regiment trapped enemies in a pincer movement.", "El regimiento atrapó a los enemigos en un movimiento de pinza."],
      ["raid", "golpe de mano / incursión rápida", "noun & verb", "/reɪd/", "réid", "Ataque sorpresa seguido de repliegue.", "Commandos carried out a raid on the depot.", "Los comandos llevaron a cabo un golpe de mano sobre el depósito."],
      ["readiness", "alistamiento / preparación", "noun", "/ˈred.i.nəs/", "réd-i-nes", "Capacidad inmediata de entrar en acción.", "The quick reaction force maintained high readiness.", "La fuerza de reacción rápida mantuvo alto alistamiento."],
      ["reconnaissance", "reconocimiento", "noun", "/rɪˈkɒn.ɪ.səns/", "ri-kón-i-sens", "Misión para obtener datos del terreno y enemigo.", "Armoured reconnaissance probed the valley.", "El reconocimiento blindado exploró el valle."],
      ["reinforcement", "refuerzo", "noun", "/ˌriː.ɪnˈfɔːs.mənt/", "rii-in-fóors-ment", "Tropas enviadas para fortalecer una posición.", "Reinforcements arrived to secure the sector.", "Llegaron refuerzos para asegurar el sector."],
      ["retreat", "retirada", "noun & verb", "/rɪˈtriːt/", "ri-tríit", "Repliegue ordenado ante presión hostil.", "The commander ordered a tactical retreat.", "El comandante ordenó una retirada táctica."],
      ["salient", "saliente táctico", "noun", "/ˈseɪ.li.ənt/", "séi-li-ent", "Parte del frente que penetra en territorio enemigo.", "Artillery targeted the salient flanks.", "La artillería batió los flancos del saliente."],
      ["sector", "sector militar", "noun", "/ˈsek.tər/", "sék-tor", "Zona asignada a una unidad militar.", "Company Bravo holds responsibility for Sector 2.", "La Compañía Bravo es responsable del Sector 2."],
      ["siege", "sitio / asedio", "noun", "/siːdʒ/", "síidch", "Cerco prolongado a una ciudad o fuerte.", "The long siege concluded with negotiations.", "El prolongado asedio concluyó con negociaciones."],
      ["skirmish", "escaramuza", "noun & verb", "/ˈskɜː.mɪʃ/", "skér-mish", "Breve combate menor entre patrullas.", "Outposts reported skirmishes along the border.", "Los puestos avanzados reportaron escaramuzas a lo largo de la frontera."],
      ["smoke screen", "cortina de humo", "noun", "/ˈsməʊk skriːn/", "smóuk skriin", "Humo para ocultar maniobras de tropas.", "Tanks fired smoke to lay a smoke screen.", "Los tanques dispararon humo para tender una cortina de humo."],
      ["sniper", "francotirador", "noun", "/ˈsnaɪ.pər/", "snái-per", "Tirador de precisión entrenado.", "The sniper eliminated the heavy machine gun.", "El francotirador eliminó la ametralladora pesada."],
      ["spearhead", "punta de lanza", "noun & verb", "/ˈspɪə.hed/", "spíer-jed", "Fuerza que encabeza un asalto ofensivo.", "The 1st Armoured Division spearheads the attack.", "La 1.ª División Blindada encabeza el ataque."],
      ["strongpoint", "punto fuerte", "noun", "/ˈstrɒŋ.pɔɪnt/", "stróng-point", "Posición defensiva fuertemente protegida.", "Engineers breached the concrete strongpoint.", "Los ingenieros abrieron brecha en el punto fuerte de hormigón."],
      ["suppressive fire", "fuego de supresión", "noun", "/səˈpres.ɪv ˈfaɪər/", "sa-prés-iv fáier", "Fuego para impedir que el enemigo dispare.", "Machine guns maintained suppressive fire.", "Las ametralladoras mantuvieron fuego de supresión."],
      ["surrender", "rendición / rendirse", "noun & verb", "/səˈren.dər/", "sa-rén-der", "Entrega formal de las armas.", "Enemy soldiers surrendered after heavy fighting.", "Soldados enemigos se rindieron tras intensos combates."],
      ["tactical withdrawal", "retirada táctica", "noun", "/ˈtæk.tɪ.kəl wɪðˈdrɔː.əl/", "ták-ti-kal uiz-dró-al", "Repliegue planificado para reorganizarse.", "The squad completed a tactical withdrawal.", "La escuadra completó una retirada táctica."],
      ["trench", "trinchera", "noun", "/trentʃ/", "trench", "Zanja de protección en el terreno.", "Troops fortified their front line trenches.", "Las tropas fortificaron sus trincheras de primera línea."],
      ["urban warfare", "combate urbano", "noun", "/ˈɜː.bən ˈwɔː.feər/", "éer-ban uór-féar", "Operaciones militares en ciudades y calles.", "Urban warfare requires careful room clearing.", "El combate urbano exige un cuidadoso despeje de habitaciones."],
      ["vanguard", "vanguardia", "noun", "/ˈvæn.ɡɑːd/", "ván-gard", "Parte delantera de un cuerpo militar.", "The motorized vanguard reached the bridge first.", "La vanguardia motorizada alcanzó el puente primero."],
      ["rear guard", "retaguardia", "noun", "/rɪə ɡɑːd/", "ríer gard", "Elemento militar que protege la cola.", "The rear guard repelled enemy pursuers.", "La retaguardia repelió a los perseguidores enemigos."],
      ["zero hour", "hora cero", "noun", "/ˈzɪə.rəʊ ˈaʊər/", "zí-rou áuer", "Momento exacto fijado para atacar.", "Artillery barrage opened at zero hour.", "La barrera de artillería se abrió en la hora cero."]
    ]
  }
];

// Add initial tactical words
for (const d of domains) {
  for (const w of d.words) {
    add(w[0], w[1], d.cat, w[2], w[3], w[4], w[5], w[6], w[7]);
  }
}

console.log("Initial count:", entries.length);
